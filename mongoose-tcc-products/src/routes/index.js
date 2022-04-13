const express = require("express");
const categoriesRoutes = require("./categories.routes");
const productsRoutes = require("./products.routes");

const routes = express.Router();

routes.use("/categories", categoriesRoutes);
routes.use("/products", productsRoutes);

module.exports = routes;
