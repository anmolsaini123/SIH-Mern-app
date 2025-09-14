import mongoose from "mongoose";

const sosSchema = new mongoose.Schema({
  touristId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  fullName: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});


const SOS = mongoose.model("SOS", sosSchema);
export default SOS