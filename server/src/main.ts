import express, { Request, Response } from "express";

const server = express();
const port = 3000;

server.use(express.json());

server.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Success!" });
  return;
});

server.listen(port);
