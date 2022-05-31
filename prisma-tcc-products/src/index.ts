import 'dotenv/config'
import express from "express";
import routes from "./routes";

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3333, async () => {
  console.log("Server started on port 3333");
});
