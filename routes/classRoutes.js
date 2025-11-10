import express from "express";
import ClassModel from "../models/Class.js";

const router = express.Router();

// GET all classes
router.get("/", async (req, res) => {
  try {
    const classes = await ClassModel.find({}, "name");

    // Extract class names and sort numerically but keep them as strings
    const classArray = classes
      .map((cls) => cls.name)
      .sort((a, b) => Number(a) - Number(b));

      console.log(classArray);
    res.json(classArray);
  } catch (error) {
    console.error("Error fetching classes:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
