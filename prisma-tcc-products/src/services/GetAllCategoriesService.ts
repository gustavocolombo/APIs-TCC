import { Categories } from "@prisma/client";
import { prismaClient } from "../shared/connection/prismaClient";

export default class GetAllCategoriesService {
  async execute() {
    const findCategories: Categories[] | null = await prismaClient.categories.findMany();

    return findCategories
  }
}
