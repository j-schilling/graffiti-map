import mongoose from "mongoose";
import "./Comment";

const { Schema } = mongoose;

const entrySchema = new Schema({
  images: [{ type: String, required: true }],
  coords: [{ type: Number, required: true }],
  tags: [{ type: String, required: false }],
  comments: { type: [Schema.Types.ObjectId], ref: "Comment" },
});

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
