import express from "express";
import {
  deleteThumbnail,
  generateThmbnail,
} from "../controllers/thumbnailController.js";

const thumbnailRouter = express.Router();

thumbnailRouter.post("/generate", generateThmbnail);
thumbnailRouter.delete("/delete/:id", deleteThumbnail);

export default thumbnailRouter;
