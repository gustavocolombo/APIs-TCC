import { getRepository } from "typeorm";
import Category from "../models/Category";

interface IDeleteCategory{
  id: string;
}

export default class DeleteCategoryService {
  async execute({ id }:IDeleteCategory) {
    const repository = getRepository(Category);

    const findCategory = await repository.findOne({ where: { id } });

    if (!findCategory) throw new Error('Categoria não encontrada');

    const deletedRepository = await repository.delete(findCategory);

    if (deletedRepository.affected === 1) return 'Categoria deletada com sucesso';

    return 0;
  }
}
