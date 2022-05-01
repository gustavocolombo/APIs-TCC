const express = require("express");
const routes = require("./routes/index.js");
require("./app/database");

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log("Server started on port 3333");
});
