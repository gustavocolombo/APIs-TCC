import { Cascade, Entity, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";

@Entity()
export class Product extends BaseEntity {

  @Property()
  name: string;

  @Property()
  amount: number;

  @Property()
  price: number;

  @ManyToOne(() => Category, { cascade: [Cascade.PERSIST, Cascade.REMOVE], nullable: true })
  category?: Category;

  constructor(name: string, amount: number, price: number, category: Category) {
    super();
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.category = category;
  }
}