import express from "express";
import Subject from "../models/Subject.js";
import Chapter from "../models/Chapter.js";

const router = express.Router();

// Get all subjects for a class (existing)
router.get("/:className", async (req, res) => {
  try {
    const subjects = await Subject.find({ className: req.params.className }).sort({ name: 1 });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Get a subject by name and its chapters
router.get("/:className/:subjectName", async (req, res) => {
  try {
    const { className, subjectName } = req.params;

    // Find the subject by class and name (case-insensitive)
    const subject = await Subject.findOne({
      className,
      name: new RegExp(`^${subjectName}$`, "i"),
    });

    if (!subject) return res.status(404).json({ message: "Subject is not present" });

    // Find chapters for this subject
    const chapters = await Chapter.find({ subjectId: subject._id }).sort({ chapterNumber: 1 });

    res.json({ subject, chapters });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
