import mongoose from "mongoose";
import "./Comment";
import "./User";

const { Schema } = mongoose;

const graffitiSchema = new Schema(
  {
    images: [{ type: String, required: true }],
    coords: [{ type: Number, required: true }],
    location: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    score: { type: Number, required: true },
    tags: [{ type: String, required: false }],
    comments: { type: [Schema.Types.ObjectId], ref: "Comment" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Graffiti =
  mongoose.models.Graffiti || mongoose.model("Graffiti", graffitiSchema);

export default Graffiti;
