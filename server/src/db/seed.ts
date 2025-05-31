import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./schema";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user1: typeof usersTable.$inferInsert = {
    name: "Ronaldo",
    email: "ronaldo@example.com",
  };

  const user2: typeof usersTable.$inferInsert = {
    name: "Messi",
    email: "messi@example.com",
  };

  const user3: typeof usersTable.$inferInsert = {
    name: "Neymar",
    email: "neymar@example.com",
  };

  const users = [user1, user2, user3];

  users.forEach(async (user) => {
    await db.insert(usersTable).values(user);
    console.log(`New user created: ${user.name}`);
  });
}

main();
