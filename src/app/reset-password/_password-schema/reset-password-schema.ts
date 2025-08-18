import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Os campos não são iguais",
    path: ["confirmPassword"],
  });