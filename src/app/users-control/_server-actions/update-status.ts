"use server"

import { prisma } from "@/lib/prisma";
import { UserStatus } from "../../../../generated/prisma";
import { revalidatePath } from "next/cache";

export async function UpdateStatus(status: UserStatus, id: string) {
  const user = await prisma.user.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/users-control");
  return { success: true, user };
}
