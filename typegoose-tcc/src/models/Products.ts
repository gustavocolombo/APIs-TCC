import { getModelForClass, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { Categories } from "./Categories";

export class Products {
  @prop({required: true})
  name: string

  @prop({ required: true })
  amount: number;

  @prop({ required: true })
  price: number;

  @prop({ required: true })
  shelf_life: Date;

  @prop({ type: mongoose.Types.ObjectId, ref: Categories.name, required: true })
  category: mongoose.Types.ObjectId;

  @prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const ProductsModel = getModelForClass(Products);
