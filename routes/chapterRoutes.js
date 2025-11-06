import express from "express";
import mongoose from "mongoose";
import Chapter from "../models/Chapter.js";

const router = express.Router();

// GET /api/chapters/:subjectId
router.get("/:subjectId", async (req, res) => {
  try {
    const { subjectId } = req.params;    
    

    if (!mongoose.Types.ObjectId.isValid(subjectId)) {
      return res.status(400).json({ message: "Invalid subjectId" });
    }

    const chapters = await Chapter.find({ subjectId }).sort({ chapterNumber: 1 });

    res.json(chapters); // sending array directly
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
});


export default router;
