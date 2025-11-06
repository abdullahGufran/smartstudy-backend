import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true  }, // e.g., "Class 9"
    slug: { type: String, required: true }, // e.g., "class-9"
  },
  { timestamps: true }
);

const ClassModel = mongoose.model("Class", classSchema);
export default ClassModel;
 