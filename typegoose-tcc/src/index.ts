import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { connection } from "./config/connection";
import routes from "./routes";

const server = express();
server.use(express.json());
connection();

server.use(routes);

server.listen(3333, () => console.log("Server started on port 3333"));
