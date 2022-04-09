import { Request, Response } from "express";
import CreateCategoryService from "../services/CreateCategoryService";

export default class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const service = new CreateCategoryService();

    const category = await service.execute({ name });

    return response.json(category);
  }
}
