import ICreateProductsDTO from "../dtos/ICreateProductsDTO";
import { prismaClient } from "../shared/connection/prismaClient";

export default class CreateProductService {
  async execute({
    name,
    amount,
    price,
    shelf_life,
    categoriesId,
  }: ICreateProductsDTO) {
    const productAlreadyExists = await prismaClient.categories.findFirst({
      where: {
        products: {
          some: {
            name,
          },
        },
      },
    });

    if (productAlreadyExists) throw new Error("Produto com nome já existente");

    const newProduct = await prismaClient.products.create({
      data: {
        name,
        amount,
        price,
        shelf_life: new Date(shelf_life),
        categoriesId,
      },
      include: {
        category: true,
      },
    });

    return newProduct;
  }
}
