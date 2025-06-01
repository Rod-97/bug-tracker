import express from "express";
import validateResource from "../../middleware/validate-resource";
import { createUserValidation } from "./users.validation";
import { registerUserHandler } from "./users.controller";

const usersRouter = express.Router();

usersRouter.post(
  "/",
  validateResource(createUserValidation),
  registerUserHandler
);

export default usersRouter;
