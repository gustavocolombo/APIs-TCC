import { Request, Response } from "express";
import UpdateCategoryService from "../services/UpdateCategoryService";

export default class UpdateCategoryController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;
    const { name } = request.body;

    const service = new UpdateCategoryService();

    console.time('updatePrisma')

    const getAll = await service.execute({ id, name });

    console.timeEnd('updatePrisma')

    return response.json(getAll);
  }
}