"use server";
import { prisma } from "@/lib/prisma";

type Params = {
  page?: number;
};

export async function getUsers({ page = 1 }: Params) {
  const take = 10;
  const skip = (page - 1) * take;

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip,
      take,
      select: {
        id: true,
        createAt: true,
        name: true,
        password: false,
        role: true,
        status: true,
        userName: true,
      },
      orderBy: { name: "asc" },
    }),
    prisma.user.count(),
  ]);
  return { users, total, page, totalPages: Math.ceil(total / take) };
}
