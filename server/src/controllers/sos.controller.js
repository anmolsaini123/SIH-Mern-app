import SOS from "../models/sos.models.js";
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js";
const makeSOS = async (req, res) => {
  try {
    const sos = new SOS(req.body);
    await sos.save();
    console.log(sos);
    res
      .status(201)
      .json(new APIresp(201, "sos created please wait for police to come "));
  } catch (error) {
    throw (
      (new Apierror(500, "Something went wrong while making a sos function "),
      error)
    );
  }
};

const getAllSOS = async (req, res) => {
  try {
    const sosList = await SOS.find()
      .populate("touristId", "fullName email username ")
      .sort({ createdAt: -1 });
    console.log(sosList);
    res.status(200).json({ success: true, data: sosList });
  } catch (err) {
    throw new Apierror(
      500,
      "Something went wrong while showing the  a sos function "
    );
  }
};

export { getAllSOS, makeSOS };
