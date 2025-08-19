"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "../../../../generated/prisma";
import { revalidatePath } from "next/cache";

export async function UpdateRole(role: UserRole, id: string) {
  const user = await prisma.user.update({
    where: { id },
    data: { role },
  });

  revalidatePath("/users-control");
  return { success: true, user };
}
