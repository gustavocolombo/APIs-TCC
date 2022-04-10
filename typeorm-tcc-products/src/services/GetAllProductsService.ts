import { getRepository } from "typeorm";
import Products from "../models/Products";

export default class GetAllProductsService {
  public async execute() {
    const repository = getRepository(Products);

    const getAllProducts = repository.find();

    return getAllProducts;
  }
}
