"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { getUserInCookies } from "@/utils/_server-actions/get-user-in-cookies";

export async function resetPassword(newPassword: string) {
  const { id } = await getUserInCookies();

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: id },
    data: {
      password: hashedPassword,
      status: "ACTIVE",
    },
  });

  redirect("/users-control");
}