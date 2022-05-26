import { Options } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { Category, BaseEntity, Product } from './entities';

const options: Options = {
  type: 'mongo',
  entities: [Category, Product, BaseEntity],
  dbName: 'mikro-orm-express-ts',
  highlighter: new MongoHighlighter(),
  debug: true,
};

export default options;
