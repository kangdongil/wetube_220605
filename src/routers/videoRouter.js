import express from "express";
import { upload, watch, edit, deleteVideo } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", deleteVideo);

export default videoRouter;