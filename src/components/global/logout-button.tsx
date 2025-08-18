"use client";
import { LogOutIcon } from "lucide-react";
import { SidebarMenuButton } from "../ui/sidebar";
import { logout } from "@/utils/_server-actions/logout";

const LogoutButton = () => {
  async function logOut() {
    await logout();
  }
  return (
    <SidebarMenuButton onClick={() => logOut()} variant={"outline"} className="cursor-pointer flex justify-center items-center">
      <LogOutIcon />
      <span>Sair</span>
    </SidebarMenuButton>
  );
};

export default LogoutButton;