import { db } from "./index";
import { users } from "./schema";
import { seed } from "drizzle-seed";

async function seedDB() {
  await seed(db, { users });
}

seedDB();
