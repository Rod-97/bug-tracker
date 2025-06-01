import { db } from "./index";
import { userTable } from "./schema";
import { seed } from "drizzle-seed";

async function seedDB() {
  await seed(db, { userTable });
}

seedDB();
