import { prismaClient } from "../shared/connection/prismaClient";

interface IDeleteCategory {
  id: string;
}

export default class DeleteCategoryService {
  async execute({ id }: IDeleteCategory) {
    const findCategory = await prismaClient.categories.findFirst({
      where: {
        id
      },
    });

    if (!findCategory) throw new Error('Categoria não encontrada')

    const deletedCategory = await prismaClient.categories.delete({
      where: { id }
    });

    return 'Categoria deletada com sucesso'
  }
}