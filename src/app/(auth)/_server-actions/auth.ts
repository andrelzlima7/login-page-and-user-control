"use server";

import { generateJWT } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function auth(userName: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { userName },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  if (user.status === "INACTIVE") {
    throw new Error("Usuário Inativo");
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw new Error("senha incorreta");
  }

  const token = await generateJWT({
    id: user.id,
    name: user.name,
    userName: user.userName,
    status: user.status,
    role: user.role,
  });

  (await cookies()).set("login-page-and-user-control", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 5,
    path: "/",
  });

  if (user.status === "PENDING") {
    redirect("/reset-password");
  }
  if (user.status === "ACTIVE") {
    redirect("/users-control");
  }
}
