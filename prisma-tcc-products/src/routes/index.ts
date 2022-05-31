import { Router } from "express";
import CreateCategoryController from "../controllers/CreateCategoryController";
import CreateProductsController from "../controllers/CreateProductsController";
import DeleteCategoryController from "../controllers/DeleteCategoryController";
import GetAllCategoriesController from "../controllers/GetAllcategoriesController";
import UpdateCategoryController from "../controllers/UpdateCategoryController";

const routes = Router();

routes.post("/category", new CreateCategoryController().handle);
routes.post("/products/:categoriesId", new CreateProductsController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/category/:id", new DeleteCategoryController().handle);
routes.put("/category/:id", new UpdateCategoryController().handle);

export default routes;
