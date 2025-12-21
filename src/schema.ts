import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(6, { message: "Minimum 6 characters!" })
      .max(20, { message: "Maximum 20 characters!" }),
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

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title is minimum 4 characters!" })
    .max(20, { message: "Title is maximum 20 characters!" }),
  description: z
    .string()
    .min(10, { message: "Description is minimum 10 characters!" })
    .max(100, { message: "Description is maximum 100 characters!" }),
});
