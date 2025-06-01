import express from "express";
import router from "./router";

const server = express();
const port = 3000;

server.use(express.json());

server.use("/api", router);

server.listen(port);
