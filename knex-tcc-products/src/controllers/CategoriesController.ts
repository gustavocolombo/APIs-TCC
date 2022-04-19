import { Request, Response } from "express";
import { connection as knex } from "../database/connection";

export default class CategoriesController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const trx = await knex.transaction();

    const newCategory = await trx("categories").insert({ name }).returning("*");

    await trx.commit();

    return response.json(newCategory);
  }
}
