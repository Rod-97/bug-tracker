import { Request, Response } from "express";
import { CreateUserInput } from "./users.validation";
import { createUser, findUserByEmail } from "./users.service";

export async function registerUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  const { email, name, password } = req.body;
  const user = await findUserByEmail(email);

  if (user) {
    res.status(409).send("Invalid email or password");
    return;
  }

  const newUser = await createUser({ email, name, password });
  res.status(201).send(newUser);
  return;
}
