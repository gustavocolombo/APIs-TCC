import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";
import ProductsController from "../controllers/ProductsController";

const routes = Router();

routes.post("/categories", new CategoriesController().create);
routes.post("/products", new ProductsController().create);
routes.get("/products/get-all", new ProductsController().show);

export default routes;
