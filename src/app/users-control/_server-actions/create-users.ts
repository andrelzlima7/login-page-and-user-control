"use server"
import { prisma } from "@/lib/prisma";
import { UserRole } from "../../../../generated/prisma";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

interface ICreateUser {
  name: string;
  userName: string;
  role: UserRole;
}
export async function createUser({ name, role, userName }: ICreateUser) {
  const password = await bcrypt.hash("1234", 10);

  const user = await prisma.user.create({
    data: { name, role, userName, password },
  });

  revalidatePath("/users-control");
  return { success: true, user };
}
