import "dotenv/config";
import path from "path";

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      port: process.env.DATABASE_PORT,
      filename: path.resolve(__dirname, "src", "database", "database.pg"),
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
};