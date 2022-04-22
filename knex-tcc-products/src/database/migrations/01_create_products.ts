import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("amount").notNullable();
    table.decimal("price").notNullable();
    table.date("shelf_life").notNullable();
    table.integer("categories_id").notNullable();
    table.foreign("categories_id").references("id").inTable("categories");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("products");
}
