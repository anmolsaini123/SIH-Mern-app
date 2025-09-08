import mongoose from "mongoose";

const userschema = mongoose.Schema(
  {
    name: String,
    password: String,
    email: String,
    role: {
      type: String,
      enum: ["user", "admin "],
      default: "user",
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: sting,
    },
    resetPasswordToken: {
      type: sting,
    },
    resetPasswordExpire: {
      type: date,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userschema);
export default User;
