const express = require("express");
const Products = require("../models/products");
const Category = require("../models/categories");

const productsRoutes = express.Router();

productsRoutes.post("/create", async (req, res) => {
  const { name, amount, price, shelf_life, category } = req.body;

  let findCategory;

  console.log(category);

  await Category.findOne({ name: category })
    .lean()
    .then((result) => {
      findCategory = result;
      console.log("foi?", findCategory);
    })
    .catch((err) => {
      console.log("deu erro");
      return res.json({ error: err.message });
    });

  if (findCategory) {
    await new Products({
      name,
      amount,
      price,
      shelf_life,
      category: findCategory,
    })
      .save()
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        return res.json({ error: err.message });
      });
  }
});

productsRoutes.get("/get-all", async (req, res) => {
  await Products.find()
    .then((result) => {
      return res.json(result);
    })
    .then((err) => {
      return res.json({ error: err.message });
    });
});

module.exports = productsRoutes;
