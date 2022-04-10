import { Router } from 'express';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRoutes = Router();

categoriesRoutes.post('/create', async (request, response) => {
  const { name } = request.body;

  console.log('entrando');

  const service = new CreateCategoryService();

  const newCategory = await service.execute({ name });

  return response.json(newCategory);
});

export default categoriesRoutes;
