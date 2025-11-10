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

    // Map of class names to their IDs
    const classMap = {
      "9": "690f6a9e19cb2985276b5609",
      "10": "690f6a9e19cb2985276b560a",
      "11": "690f6a9e19cb2985276b560b",
      "12": "690f6a9e19cb2985276b560c",
    };

    // Subjects for each class
    const subjects = [
      // Class 9
      { name: "Mathematics", slug: "mathematics", classId: classMap["9"] },
      { name: "Physics", slug: "physics", classId: classMap["9"] },
      { name: "Chemistry", slug: "chemistry", classId: classMap["9"] },
      { name: "Biology", slug: "biology", classId: classMap["9"] },
      { name: "English", slug: "english", classId: classMap["9"] },

      // Class 10
      { name: "Mathematics", slug: "mathematics", classId: classMap["10"] },
      { name: "Physics", slug: "physics", classId: classMap["10"] },
      { name: "Chemistry", slug: "chemistry", classId: classMap["10"] },
      { name: "Biology", slug: "biology", classId: classMap["10"] },
      { name: "English", slug: "english", classId: classMap["10"] },

      // Class 11
      { name: "Mathematics", slug: "mathematics", classId: classMap["11"] },
      { name: "Physics", slug: "physics", classId: classMap["11"] },
      { name: "Chemistry", slug: "chemistry", classId: classMap["11"] },
      { name: "Biology", slug: "biology", classId: classMap["11"] },
      { name: "English", slug: "english", classId: classMap["11"] },

      // Class 12
      { name: "Mathematics", slug: "mathematics", classId: classMap["12"] },
      { name: "Physics", slug: "physics", classId: classMap["12"] },
      { name: "Chemistry", slug: "chemistry", classId: classMap["12"] },
      { name: "Biology", slug: "biology", classId: classMap["12"] },
      { name: "English", slug: "english", classId: classMap["12"] },
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
