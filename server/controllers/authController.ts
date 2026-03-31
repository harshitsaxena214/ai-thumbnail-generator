import { Request, Response } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

// Register User Controller
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body || {};
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // setting user Data in sessions
    req.session.isLoggedIn = true;
    req.session.userId = newUser._id;

    return res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error: any) {
    console.log("Error in Registering the User", error);
    res.status(500).json({
      success: false,
      mesaage: error.message,
    });
  }
};
// User Login Controller

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist, Create an account first",
      });
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Pasword",
      });
    }
    req.session.isLoggedIn = true;
    req.session.userId = user._id;

    return res.status(200).json({
      success: true,
      message: "User Logged In Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.log("Error in Logging In the User", error);
    res.status(500).json({
      success: false,
      mesaage: error.message,
    });
  }
};

// User Logout Controller

export const logoutUser = async (req: Request, res: Response) => {
  req.session.destroy((error: any) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
  return res.status(200).json({ success: true, message: "Logout Successful" });
};

// User Verification Controller

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid User",
      });
    }
    return res.json({ user });
  } catch (error: any) {
    console.log("Error in Verifying the User", error);
    res.status(500).json({
      success: false,
      mesaage: error.message,
    });
  }
};
