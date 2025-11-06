import mongoose from "mongoose";
import dotenv from "dotenv";
import NotesModel from "./models/Notes.js";


dotenv.config();

const seedNotes = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected.");

        //adding notes
        const NotesData = [
            {
                chapterId: "6909969b769dfb72e151ebcc", // Example ObjectId, replace with actual
                type: "Notes",
                title: "Chapter 1",
                fileUrl: "https://docs.google.com/document/d/1U_-G5RbLS7G5uNCf4rFduV_JkNZaxVjt/edit?usp=drive_link&ouid=111877907608920450336&rtpof=true&sd=true"
            },
            {
                chapterId: "6909969b769dfb72e151ebcc", // Example ObjectId, replace with actual
                type: "Exercise",
                title: "Chapter 1",
                fileUrl: "https://docs.google.com/document/d/1AIN8nMMSvEoJ9QZDhUE06q_b2uNB-uGy/edit?usp=drive_link&ouid=111877907608920450336&rtpof=true&sd=true"
            },
             {
                chapterId: "6909969b769dfb72e151ebcc", // Example ObjectId, replace with actual
                type: "Additonal",
                title: "Chapter 1",
                fileUrl: "https://docs.google.com/document/d/1itW7fs-0KJIk_9uQvYUWVaVjCnZuYJck/edit?usp=drive_link&ouid=111877907608920450336&rtpof=true&sd=true"
            },
            {
                chapterId: "6909969b769dfb72e151ebcc", // Example ObjectId, replace with actual
                type: "Quiz",
                title: "Chapter 1",
                fileUrl: "https://docs.google.com/document/d/1x_rMdMVxTibrHoGjAO3o3ngERrJrGL3b/edit?usp=drive_link&ouid=111877907608920450336&rtpof=true&sd=true"
            }
        ]
        
        await NotesModel.insertMany(NotesData);
        console.log("Notes added sucessfully.");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeder error:", error.message);
        process.exit(1);
    }
};

seedNotes();
