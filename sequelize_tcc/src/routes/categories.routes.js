const express = require("express");
const categoriesRouter = express.Router();

const CategoriesController = require("./controllers/CategoriesController");

const categoriesController = new CategoriesController();

categoriesRouter.post("/", categoriesController.store);
categoriesRouter.get("/", categoriesController.show);
categoriesRouter.put("/", categoriesController.update);
categoriesRouter.delete("/", categoriesController.delete);

module.exports = categoriesRouter;
