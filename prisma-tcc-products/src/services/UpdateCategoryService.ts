import { prismaClient } from "../shared/connection/prismaClient";

interface IUpdateCategory {
  id: string;
  name: string
}

export default class UpdateCategoryService {
  async execute({ id, name }: IUpdateCategory) {
    const findCategory = await prismaClient.categories.findFirst({
      where: {
        id
      },
    });

    if (!findCategory) throw new Error('Categoria não encontrada')

    const updatedCategory = await prismaClient.categories.update({
      where: { id },
      data: {
        name
      }
    });

    return updatedCategory
  }
}