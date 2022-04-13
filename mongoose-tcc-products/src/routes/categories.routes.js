const express = require("express");
const Category = require("../models/categories");

const categoriesRoutes = express.Router();

categoriesRoutes.post("/create", (req, res) => {
  const { name } = req.body;

  const category = { name };

  new Category(category)
    .save()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json({ error: error.message });
    });
});

module.exports = categoriesRoutes;
