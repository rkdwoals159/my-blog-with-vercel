import mongoose from "mongoose";

// Define Schemes
const postingSchema = new mongoose.Schema(
  {
    postid: { type: Number, required: true, unique: true },
    categoryId: { type: Number, required: true },
    title: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    liked: { type: Number, default: 0 },
    thumbnailURL: { type: String, default: 0 },
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: () => new Date() },
    completed: { type: String, default: false },
  },
  {
    collection: "postingTable",
    timestamps: true,
  }
);

export default postingSchema
