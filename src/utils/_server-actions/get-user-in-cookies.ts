"use server";

import { verifyJWT } from "@/lib/jwt";
import { cookies } from "next/headers";
import { UserRole, UserStatus } from "../../../generated/prisma";

type token = {
  id: string;
  name: string;
  userName: string;
  status: UserStatus;
  role: UserRole;
};

export async function getUserInCookies() {
  const cookie = await cookies();
  const token = cookie.get("login-page-and-user-control")?.value;

  if (!token) {
    throw new Error("Token não encontrado");
  }

  const user = await verifyJWT(token);

  if (!user) {
    throw new Error("Token inválido ou expirado");
  }

  return user as token;
}
