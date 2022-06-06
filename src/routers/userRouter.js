import express from "express";
import { logout, see, edit, remove } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", see);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/logout", logout);

export default userRouter;