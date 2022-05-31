import { Request, Response } from "express";
import GetAllCategoriesService from "../services/GetAllCategoriesService";

export default class GetAllCategoriesController {
  async handle(request: Request, response: Response) {

    const service = new GetAllCategoriesService();

    console.time('findPrisma')

    const getAll = await service.execute();

    console.timeEnd('findPrisma')

    return response.json(getAll);
  }
}
