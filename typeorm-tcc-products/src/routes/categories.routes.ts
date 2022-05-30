import { Router } from 'express';
import DeleteCategoryService from '../services/DeleteCategoryService';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRoutes = Router();

categoriesRoutes.post('/create', async (request, response) => {
  const { name } = request.body;

  const service = new CreateCategoryService();

  console.time('typeormCreate');

  const newCategory = await service.execute({ name });

  console.timeEnd('typeormCreate');

  return response.json(newCategory);
});

categoriesRoutes.delete('/delete/:id', async (request, response) => {
  const { id } = request.params;

  const service = new DeleteCategoryService();

  console.time('typeormDelete');

  const deleteCategory = await service.execute({ id });

  console.timeEnd('typeormDelete');

  return response.json(deleteCategory);
});

export default categoriesRoutes;
