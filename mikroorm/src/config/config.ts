import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export const connection = await MikroORM.init<PostgreSqlDriver>({
  entities: ["./dist/models"],
  entitiesTs: ["./src/models"],
  dbName: "mikroorm_tcc",
  type: "postgresql",
  user: "postgres",
  password: "postgres",
});

console.log('Acessando a configuração')
