import { getRepository } from 'typeorm';
import ICreateProductsDTO from '../dtos/ICreateProductsDTO';
import Products from '../models/Products';

export default class CreateProductsService {
  async execute({
    name,
    price,
    amount,
    shelf_life,
    categories_id,
  }: ICreateProductsDTO) {
    const repository = getRepository(Products);

    const findProducts = await repository.findOne({
      relations: ['categories'],
      where: {
        name,
      },
    });

    if (findProducts) throw new Error('Produto com nome já existente');

    const newProduct = repository.create({
      name,
      price,
      amount,
      shelf_life: new Date(shelf_life),
      categories_id,
    });

    await repository.save(newProduct);

    return newProduct;
  }
}
