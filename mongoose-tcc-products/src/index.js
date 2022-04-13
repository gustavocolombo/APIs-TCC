const express = require("express");
require("./config/connection");
const routes = require("./routes/index");

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3000);
