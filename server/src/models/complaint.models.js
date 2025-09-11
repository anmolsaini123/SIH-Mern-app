import mongoose from "mongoose";

const complaintSchema = mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
    },
    incident: {
      type: String,
      enum: [
        "harasment",
        "Pickpocketing",
        "Scams",
        "Accidents",
        "Illegal Detention",
      ],
    },
    location: String,
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;
