import { Router } from "express";
import CreateCategoryController from "../controllers/CreateCategoryController";
import CreateProductsController from "../controllers/CreateProductsController";
import GetAllCategoriesController from "../controllers/GetAllcategoriesController";

const routes = Router();

routes.post("/category", new CreateCategoryController().handle);
routes.post("/products/:categoriesId", new CreateProductsController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);

export default routes;
