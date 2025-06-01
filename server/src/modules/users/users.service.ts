import { eq } from "drizzle-orm";
import { db } from "../../db";
import { userTable } from "../../db/schema";
import { hashPassword } from "../../utils/password";

export async function findUserByEmail(email: string) {
  const user = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));
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
  const passwordHash = await hashPassword(password);
  await db.insert(userTable).values({ email, name, passwordHash });
  return { email, name };
}
