import { Request, Response } from "express";
import DeleteCategoryService from "../services/DeleteCategoryService";

export default class DeleteCategoryController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const service = new DeleteCategoryService();

    console.time('deletePrisma')

    const getAll = await service.execute({id});

    console.timeEnd('deletePrisma')

    return response.json(getAll);
  }
}