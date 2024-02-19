import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  email: { type: String, required: true },
  liked: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
  disliked: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
  favorites: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
  created: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
  commented: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
