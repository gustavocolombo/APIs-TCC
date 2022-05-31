import { Request, Response } from "express";
import CreateCategoryService from "../services/CreateCategoryService";

export default class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const service = new CreateCategoryService();

    console.time('prismaCreate')

    const category = await service.execute({ name });

    console.timeEnd('prismaCreate')

    return response.json(category);
  }
}
