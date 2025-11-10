import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  className: { type: String
  }
});

export default mongoose.model("Subject", subjectSchema);
