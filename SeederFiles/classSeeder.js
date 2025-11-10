import mongoose from "mongoose";
import ClassModel from "../models/Class.js"; // adjust path if needed
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("MongoDB connected");
     await ClassModel.deleteMany({});

    const classes = [
      { name: "9", slug: "class-9" },
      { name: "10", slug: "class-10" },
      { name: "11", slug: "class-11" },
      { name: "12", slug: "class-12" },
    ];
    
    const inserted = await ClassModel.insertMany(classes);
    console.log("Insertion sucessful",inserted);

    mongoose.disconnect();
  } catch (error) {
    console.error("Seeder error:", error);
  }
};

dbConnect();
