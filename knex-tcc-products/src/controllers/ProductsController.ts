import { Request, Response } from "express";
import { connection as knex } from "../database/connection";

export default class ProductsController {
  async create(request: Request, response: Response) {
    const { name, price, amount, shelf_life, categories_id } = request.body;

    const trx = await knex.transaction();

    if (!categories_id || (await trx("categories").select("*")) == null)
      throw new Error("Id inválido/não encontrado");

    const newProduct = await trx("products")
      .insert({ name, price, amount, shelf_life, categories_id })
      .returning("*");

    await trx.commit();

    return response.json(newProduct);
  }

  async show(request: Request, response: Response) {
    const trx = await knex.transaction();

    const products = await trx("products").select("*");

    return response.json(products);
  }
}
