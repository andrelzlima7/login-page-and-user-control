import { z } from "zod";

export const authSchema = z.object({
  userName: z.string().min(2),
  password: z.string().min(4, "Senha obrigatória"),
});
