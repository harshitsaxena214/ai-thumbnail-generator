import express from "express";
import {
  getThumbnailById,
  getUserThumbnails,
} from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.get("/thumbnail",protect, getUserThumbnails);
userRouter.get("/thumbnail/:id",protect, getThumbnailById);

export default userRouter;
