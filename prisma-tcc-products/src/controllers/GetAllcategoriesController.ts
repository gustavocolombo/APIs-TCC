import { Request, Response } from "express";
import GetAllCategoriesService from "../services/GetAllCategoriesService";

export default class GetAllCategoriesController {
  async handle(request: Request, response: Response) {

    const service = new GetAllCategoriesService();

    const getAll = await service.execute();

    console.log('get all', getAll)

    return response.json(getAll);
  }
}
