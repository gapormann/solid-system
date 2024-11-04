import pgp from "pg-promise";
import { DatabaseConnection } from "../interfaces/DatabaseConnection.interface";
import pg from "pg-promise/typescript/pg-subset";
import dotenv from "dotenv";
dotenv.config();

export class PgPromiseAdapter implements DatabaseConnection {
  readonly connection: pgp.IDatabase<{}, pg.IClient>;
  constructor() {
    this.connection = pgp()(process.env.DATABASE_URL_PGP as string);
  }
  async query(query: string, params: any[]): Promise<any> {
    return this.connection.query(query, params);
  }
  async close() {
    this.connection.$pool.end();
  }
}
