import mongoose from "mongoose";
import dotenv from "dotenv";
import SubjectModel from "../models/Subject.js";

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // Clear existing subjects
    await SubjectModel.deleteMany({});

    // Subjects for each class
    const subjects = [
      // Class 9
      { name: "Mathematics", slug: "mathematics", ClassName: "9" },
      { name: "Physics", slug: "physics", ClassName: "9" },
      { name: "Chemistry", slug: "chemistry", ClassName: "9" },
      { name: "Biology", slug: "biology", ClassName: "9" },
      { name: "English", slug: "english", ClassName: "9" },

      // Class 10
      { name: "Mathematics", slug: "mathematics", ClassName: "10" },
      { name: "Physics", slug: "physics", ClassName: "10" },
      { name: "Chemistry", slug: "chemistry", ClassName: "10" },
      { name: "Biology", slug: "biology", ClassName: "10" },
      { name: "English", slug: "english", ClassName: "10" },

      // Class 11
      { name: "Mathematics", slug: "mathematics", ClassName: "11" },
      { name: "Physics", slug: "physics", ClassName: "11" },
      { name: "Chemistry", slug: "chemistry", ClassName: "11" },
      { name: "Biology", slug: "biology", ClassName: "11" },
      { name: "English", slug: "english", ClassName: "11" },

      // Class 12
      { name: "Mathematics", slug: "mathematics", ClassName: "12" },
      { name: "Physics", slug: "physics", ClassName: "12" },
      { name: "Chemistry", slug: "chemistry", ClassName: "12" },
      { name: "Biology", slug: "biology", ClassName: "12" },
      { name: "English", slug: "english", ClassName: "12" },
    ];

    // Insert into DB
    await SubjectModel.insertMany(subjects);
    console.log("✅ Subjects seeded successfully");

    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  } catch (error) {
    console.error("❌ Subject seeder error:", error);
  }
};

dbConnect();
