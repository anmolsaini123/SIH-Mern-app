import mongoose from "mongoose";

const userschema = mongoose.Schema(
  {
    fullName : String,
    password: String,
    email: String,
    username:{
      type:String, 
      required:true,
      unique: true

    },
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
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userschema);
export default User;
