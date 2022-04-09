import ICreateCategoryDTO from "../dtos/ICreateCateoryDTO";
import { prismaClient } from "../shared/connection/prismaClient";

export default class CreateCategoryService {
  async execute({ name }: ICreateCategoryDTO) {
    const findCategory = await prismaClient.categories.findFirst({
      where: { name },
    });

    if (findCategory) throw new Error("Categoria já existente");

    const newCategory = await prismaClient.categories.create({
      data: {
        name,
      },
    });

    return newCategory;
  }
}
