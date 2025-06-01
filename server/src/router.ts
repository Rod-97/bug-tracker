import express from "express";
import usersRouter from "./modules/users/users.router";

const router = express.Router();

router.use("/users", usersRouter);

export default router;
