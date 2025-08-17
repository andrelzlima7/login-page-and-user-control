import { z } from "zod";
import { UserRole } from "../../../../generated/prisma";

const userSchema = z.object({
  name: z.string().min(2),
  userName: z.string(),
  role: z.enum(UserRole),
});

export { userSchema };
