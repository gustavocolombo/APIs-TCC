import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("content").notNullable();
    table.integer("stars").defaultTo(0);

    table.integer("categories_id").notNullable();
    table.foreign("categories_id").references("id").inTable("categories");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("products");
}
