import { Cascade, Collection, Entity, OneToMany, Property, ManyToOne } from '@mikro-orm/core';

import { BaseEntity } from './BaseEntity';
import { Product } from './Product';

@Entity()
export class Category extends BaseEntity {

  @Property()
  name: string;

  @OneToMany({ entity: () => Product, mappedBy: 'category', orphanRemoval: true })
  products = new Collection<Product>(this);

  constructor(name: string) {
    super();
    this.name = name;
  }
}
