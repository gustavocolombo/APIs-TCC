const { Router } = require("express");
const categoriesController = require("./categories.routes");

const routes = Router();

routes.use("/category", categoriesController);

module.exports = routes;
