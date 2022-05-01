const express = require("express");
const categoriesRouter = express.Router();

const CategoriesController = require("./controllers/CategoriesController");

const categoriesController = new CategoriesController();

categoriesRouter.post("/", categoriesController.store);

module.exports = categoriesRouter;
