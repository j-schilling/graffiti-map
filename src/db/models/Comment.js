import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    user: { type: String, required: true },
    text: { type: Number, required: true },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
