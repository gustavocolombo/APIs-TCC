import { response, Router } from "express";
import { ProductsModel } from "../models/Products";

const productsRoutes = Router();

productsRoutes.post("/create", async (request, response) => {
  const { name, amount, price, shelf_life, category } = request.body;

  const newProduct = await ProductsModel.create({
    name,
    amount,
    price,
    shelf_life: new Date(shelf_life),
    category,
  });

  return response.json(newProduct);
});

export default productsRoutes;
