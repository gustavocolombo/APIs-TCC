import { Router } from 'express';
import GetAllProductsService from '../services/GetAllProductsService';
import CreateProductsService from '../services/CreateProductsService';

const productsRoutes = Router();

productsRoutes.post('/create/:categories_id', async (request, response) => {
  const {
    name, price, amount, shelf_life,
  } = request.body;
  const { categories_id } = request.params;

  const service = new CreateProductsService();

  console.time('typeormCreate');

  const newProduct = await service.execute({
    name,
    price,
    amount,
    shelf_life,
    categories_id,
  });

  console.timeEnd('typeormCreate');

  return response.json(newProduct);
});

productsRoutes.get('/', async (request, response) => {
  const service = new GetAllProductsService();

  console.time('typeormFind');

  const getAll = await service.execute();

  console.timeEnd('typeormFind');

  return response.json(getAll);
});

export default productsRoutes;
