import 'reflect-metadata';
import http from 'http';
import express from 'express';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';

import { CategoryController, ProductController } from './controllers';
import { Category, Product } from './entities';

export const DI = {} as {
  server: http.Server;
  orm: MikroORM,
  em: EntityManager,
  categoryRepository: EntityRepository<Category>,
  productRepository: EntityRepository<Product>
};

export const app = express();
const port = process.env.PORT || 3000;

export const init = (async () => {
  DI.orm = await MikroORM.init();
  DI.em = DI.orm.em;
  DI.categoryRepository = DI.orm.em.getRepository(Category);
  DI.productRepository = DI.orm.em.getRepository(Product);

  app.use(express.json());
  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  app.use('/category', CategoryController);
  app.use('/product', ProductController);

  DI.server = app.listen(port, () => {
    console.log(`MikroORM express TS example started at http://localhost:${port}`);
  });
})();
