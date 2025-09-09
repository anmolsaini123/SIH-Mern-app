import mongoose from "mongoose";

const verificationSchema = mongoose.Schema(
  {
 
    phoneNo: {
      type: Number,
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
