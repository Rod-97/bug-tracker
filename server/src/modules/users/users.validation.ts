import z from "zod";

export const createUserValidation = z.object({
  body: z
    .object({
      email: z.string().email(),
      name: z.string(),
      password: z
        .string()
        .min(8, "Password too short - should be 8 chars minimum"),
      passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    }),
});

export type CreateUserInput = z.TypeOf<typeof createUserValidation>;
