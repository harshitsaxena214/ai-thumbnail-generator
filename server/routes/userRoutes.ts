import express from "express";
import {
  getThumbnailById,
  getUserThumbnails,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/thumbnail", getUserThumbnails);
userRouter.get("/thumbnail/:id", getThumbnailById);

export default userRouter;
