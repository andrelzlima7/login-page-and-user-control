"use server"
import { prisma } from "@/lib/prisma";

export async function getUsers() {
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
        createAt: true,
        name: true,
        password: false,
        role: true,
        status: true,
        userName: true,
      },
    }),
    prisma.user.count(),
  ]);
  return { users, total };
}
