import { Router } from "express";
import { Categories, CategoriesModel } from "../models/Categories";

const categoriesRoutes = Router();

categoriesRoutes.post("/create", async (request, response) => {
  const { name } = request.body;

  const category = await CategoriesModel.create({ name });

  return response.json(category);
});

categoriesRoutes.get("/get-all", async (request, response) => {
  return response.json(await CategoriesModel.find());
});

export default categoriesRoutes;
