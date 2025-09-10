import { AsyncHanddler } from "../utils/AsyncHanddler.js";
import { Apierror } from "../utils/APIerror.js";
import User from "../models/user.models.js";
import { APIresp } from "../utils/APIresp.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
const registerUser = AsyncHanddler(async (req, res) => {
  // * get user details from frontend
  // * validations
  // * check if user exists already: username / emails
  // * check about images
  // * upload them to cloudinary
  // * double check the avatar
  // * create user object
  // * check entry in db
  // * remove password and refresh token field from response
  // * check for user creation
  // * return response
  // ! all are done here

  const { fullName, username, email, password } = req.body || {};
  console.log(`username: ${username}`);

  if (
    [fullName, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new Apierror(400, "All fields are required");
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });

  if (existingUser) {
    throw new Apierror(409, "User with same email or username already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new Apierror(500, "Something went wrong while registering user");
  }
  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure:true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  console.log(token);
  return res
    .status(201)
    .json(
      new APIresp(
        201,
        { user: createdUser, token },
        "User registered successfully"
      )
    );
});

const loginUser = AsyncHanddler(async (req, res) => {
  // * request body se data le aao
  // * username or emails se login
  // * find the user
  // * password check
  // * access and refresh token generate and give to user
  // * send through secure cookie

  const { username, email, password } = req.body || {};

  if (!username && !email) {
    throw new Apierror(400, "Username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new Apierror(404, "User does not exist");
  }
  const ifpasswordcorrect = await bcrypt.compare(password, user.password);
  if (!ifpasswordcorrect) {
    throw new Apierror(401, "Invalid credentials");
  }
  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure:false,
    sameSite: "none",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  console.log(token)
  const loggedInUser = await User.findById(user._id).select("-password");
  console.log(loggedInUser);

  return res.status(200).json(
    new APIresp(
      200,
      {
        user: loggedInUser,
        token,
      },
      "User logged in successfully"
    )
  );
});

export { registerUser, loginUser };
