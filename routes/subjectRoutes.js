import express from "express";
import Subject from "../models/Subject.js";
import Chapter from "../models/Chapter.js";

const router = express.Router();



// Get all subjects for a class (existing)
router.get("/:className", async (req, res) => {
  try {
    const subjects = await Subject.find({ ClassName: req.params.className }).sort({ name: 1 });
    console.log(subjects);
    
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});



export default router;
