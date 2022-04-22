import { getModelForClass, prop } from "@typegoose/typegoose";

export class Categories {
  @prop({ required: true })
  name: string;

  @prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const CategoriesModel = getModelForClass(Categories);
