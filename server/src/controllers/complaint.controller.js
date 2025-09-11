import Complaint from "../models/complaint.models.js";
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js";
const createComplaint = async (req, res) => {
  //*data lena hai res body se
  //* then use verify karna hai
  //* complaint show kar dena hai
  try {
    const { fullName, email, phoneNo, incident, location } = req.body;

    if (
      [fullName, email, incident, phoneNo, location].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new Apierror(400, "All fields are required");
    }
    const trimmedIncident = incident?.trim();

    const complaint = await Complaint.create({
      fullName,
      email,
      phoneNo,
      incident: trimmedIncident,
      location,
    });
    console.log(complaint, "bc hogi teri complaint regester ");
    return res
      .status(201)
      .json(new APIresp(201, complaint, "complaints registered successfully"));
  } catch (error) {
    console.error(error);
    throw new Apierror(400, "sorry complaint is not regester ");
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    return res
      .status(201)
      .json(new APIresp(201, complaints, "complaints are here  "));
  } catch (error) {
    console.error(error);
    throw new Apierror(400, "error in complaint fetch  ");
  }
};

export { getAllComplaints, createComplaint };
