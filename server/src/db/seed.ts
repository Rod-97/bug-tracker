import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./schema";
import { seed } from "drizzle-seed";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  await seed(db, { usersTable });
}

main();
