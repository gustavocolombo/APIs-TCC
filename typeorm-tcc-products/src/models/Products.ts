import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Category from "./Category";

@Entity("products")
export default class Products {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column()
    name: string;

  @Column()
    shelf_life: Date;

  @Column()
    amount: number;

  @Column()
    price: number;

  @Column()
    categories_id: string;

  @ManyToOne(() => Products, (products) => products.id)
  @JoinColumn({ name: "categories_id" })
    categories: Category;

  @CreateDateColumn()
    created_at: Date;
}
