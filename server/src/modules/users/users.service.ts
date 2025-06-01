import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function findUserByEmail(email: string) {
  const user = await db.select().from(users).where(eq(users.email, email));
  if (user.length === 0) return null;
  return user[0];
}

export async function createUser({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) {
  await db.insert(users).values({ email, name });
  return { email, name };
}
