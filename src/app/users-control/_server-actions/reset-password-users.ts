"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export async function ResetPasswordUsers(id: string) {
  const password = await bcrypt.hash("1234", 10);
  const user = await prisma.user.update({
    where: { id },
    data: { password, status: "PENDING" },
  });

  revalidatePath("/users-control");
  return { success: true, user };
}
