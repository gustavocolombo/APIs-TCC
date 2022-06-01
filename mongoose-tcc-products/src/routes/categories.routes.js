const express = require("express");
const Category = require("../models/categories");

const categoriesRoutes = express.Router();

categoriesRoutes.post("/create", (req, res) => {
  const { name } = req.body;

  const category = { name };

  console.time('mongoCreate')

  new Category(category)
    .save()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json({ error: error.message });
    });

    console.timeEnd('mongoCreate')
});

categoriesRoutes.put("/update", async (req, res) => {
  const { id, newName } = req.body;

  const category = { id };

  console.time('mongoUpdate')

  await Category
  .updateOne({_id: id}, {$set: {name: newName}}, category)
  .exec()
  .then((result) => {
    return res.json(result)
  })
  .catch((err) => {
    return res.json({ error: err.message });
  });

  console.timeEnd('mongoUpdate')
});

categoriesRoutes.delete("/remove", async (req, res) => {
  const { name } = req.body;

  const category = { name };

  console.time('mongoDelete')

  await Category
  .remove({name: name}).then((result) => {
    return res.json(result)
  })
  .catch((err) => {
    return res.json({ error: err.message });
  });

  console.timeEnd('mongoDelete')
});

module.exports = categoriesRoutes;
