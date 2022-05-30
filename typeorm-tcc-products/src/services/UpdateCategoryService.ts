import { getRepository } from "typeorm";
import Category from "../models/Category";

interface IUpdateCategory{
  id: string;
  name: string;
}

export default class UpdateCategoryService {
  async execute({ id, name }: IUpdateCategory) {
    const repository = getRepository(Category);

    const findCategory = await repository.findOne({ where: { id } });

    if (!findCategory) throw new Error('Categoria não encontrada');

    const updateCategory = await repository.update(findCategory.id, { name });

    return updateCategory;
  }
}
