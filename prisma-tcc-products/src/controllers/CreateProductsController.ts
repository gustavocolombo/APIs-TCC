import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductsService";

export default class CreateProductsController {
  async handle(request: Request, response: Response) {
    const { name, amount, price, shelf_life } = request.body;
    const { categoriesId } = request.params;

    const service = new CreateProductService();

    const products = await service.execute({
      name,
      amount,
      price,
      shelf_life,
      categoriesId,
    });

    return response.json(products);
  }
}
