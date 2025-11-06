import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    chapterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: { type: String },
    fileUrl: { type: String }, 
  },
  { timestamps: true }
);

const NotesModel = mongoose.model("Notes", notesSchema);
export default NotesModel;
