import { getRepository } from 'typeorm';
import Category from '../models/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

export default class CreateCategoryService {
  public async execute({ name }: ICreateCategoryDTO): Promise<any> {
    const repository = getRepository(Category);
    const findCategory = await repository.findOne({
      where: { name },
    });

    if (findCategory) throw new Error('Categoria com nome já existente');

    const newCategory = await repository.create({
      name,
    });

    await repository.save(newCategory);

    return newCategory;
  }
}
