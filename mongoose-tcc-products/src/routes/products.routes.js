const express = require("express");
const Products = require("../models/products");
const Category = require("../models/categories");

const productsRoutes = express.Router();

productsRoutes.post("/create", async (req, res) => {
  const { name, amount, price, shelf_life, category } = req.body;

  let findCategory;

  await Category.findOne({ name: category })
    .lean()
    .then((result) => {
      findCategory = result;
    })
    .catch((err) => {
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

  console.time('mongoFind')
  
  await Products.find()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json({ error: err.message });
    });

    console.timeEnd('mongoFind')

});

module.exports = productsRoutes;
