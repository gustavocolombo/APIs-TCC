import "dotenv/config";
import knex from "knex";
import path from "path";

export const connection = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    filename: path.resolve(__dirname, "database.pg"),
  },
});
