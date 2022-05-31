import { response, Router } from 'express';
import DeleteCategoryService from '../services/DeleteCategoryService';
import CreateCategoryService from '../services/CreateCategoryService';
import UpdateCategoryService from '../services/UpdateCategoryService';

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

categoriesRoutes.put('/update/:id', async (request, response) => {
  const { id } = request.params;

  const { name } = request.body;

  const service = new UpdateCategoryService();

  console.time('typeormUpdate');

  const updateCategory = await service.execute({ id, name });

  console.timeEnd('typeormUpdate');

  return response.json(updateCategory);
});

export default categoriesRoutes;
