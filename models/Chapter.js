import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // e.g., "Chapter 1: Measurements"
    chapterNumber: { type: Number },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
  },
  { timestamps: true }
);

const ChapterModel = mongoose.model("Chapter", chapterSchema);
export default ChapterModel;
