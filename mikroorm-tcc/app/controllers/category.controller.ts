import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { DI } from '../server';
import { Category } from '../entities';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const category = DI.em.create(Category, req.body);
    await DI.categoryRepository.persist(category).flush();

    res.json(category);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

export const CategoryController = router;
