import jwt from "jsonwebtoken";
import { Apierror } from "../utils/APIerror.js";
import User from "../models/user.models.js";
export const authMiddleware = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      throw new Apierror(401, "Not authorized, no token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
       throw new Apierror(401, `jwt verify eror : ${error.message}`);
      console.log("error in the jwt verification ")
    }
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      throw new Apierror(404, "User not found");
    }
    next();
  } catch (error) {
    throw new Apierror(401, `Not authorized: ${error.message}`);
  }
};
