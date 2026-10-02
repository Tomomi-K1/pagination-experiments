import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import { users } from "./db/schema";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  await seed(db, { users: users }, { count: 200 });
}

main();
