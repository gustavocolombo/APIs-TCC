const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    shelf_life: {
      type: Date,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
