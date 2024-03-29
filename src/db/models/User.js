import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    image: { type: String, required: false },
    email: {
      type: String,
      unique: [true, "Emailaltready exists"],
      required: [true, "Email is required"],
    },
    liked: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
    disliked: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
    favorites: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
    commented: { type: [Schema.Types.ObjectId], ref: "Graffiti" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
