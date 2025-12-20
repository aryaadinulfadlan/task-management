import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(6, { message: "Minimum 6 characters!" })
      .max(30, { message: "Maximum 30 characters!" }),
    email: z.email({
      message: "Email is not valid!",
    }),
    password: z
      .string()
      .min(6, { message: "Minimum 6 characters!" })
      .max(12, { message: "Maximum 12 characters!" }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password confirmation does not match",
    path: ["passwordConfirm"],
  });

export const SignInSchema = z.object({
  email: z.email({
    message: "Email is not valid!",
  }),
  password: z.string().min(1, { message: "Password is required!" }),
});
