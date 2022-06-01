import { Router } from "express";
import { Categories, CategoriesModel } from "../models/Categories";

const categoriesRoutes = Router();

categoriesRoutes.post("/create", async (request, response) => {
  const { name } = request.body;

  console.time('typegooseCreate');

  const category = await CategoriesModel.create({ name });

  console.timeEnd('typegooseCreate');

  return response.json(category);
});

categoriesRoutes.get("/get-all", async (request, response) => {

  console.time('typegoose');

  const result = await CategoriesModel.find();

  console.timeEnd('typegoose');

  return response.json(result);
});

categoriesRoutes.put("/update", async (request, response) => {

  const { id, newName } = request.body;

  const category =  id 

  console.time('typegooseUpdate');

  const result = await CategoriesModel.findByIdAndUpdate(category, newName);

  console.timeEnd('typegooseUpdate');

  return response.json(result);
});

categoriesRoutes.delete("/delete/:id", async (request, response) => {

  const { id } = request.params;

  const category =  id 

  console.time('typegooseDelete');

  const result = await CategoriesModel.findByIdAndDelete(category);

  console.timeEnd('typegooseDelete');

  return response.json(result);
});

export default categoriesRoutes;
