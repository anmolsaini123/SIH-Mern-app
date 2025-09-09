import mongoose from "mongoose";

const verificationSchema = mongoose.Schema(
  {
    addharCard: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const VerifyUser = mongoose.model("Verification", verificationSchema);
export default VerifyUser;
