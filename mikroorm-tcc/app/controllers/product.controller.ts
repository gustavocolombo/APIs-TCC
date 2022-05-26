import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { DI } from '../server';
import { Product } from '../entities';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const product = DI.em.create(Product, req.body);
    await DI.productRepository.persist(product).flush();

    res.json(product);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

export const ProductController = router;
