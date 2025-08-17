import { cn } from "@/lib/utils";
import { UserRole } from "../../../../generated/prisma";
import { Badge } from "@/components/ui/badge";

interface PropsBadgeRole {
  role: UserRole;
}

const BadgeRole = ({ role }: PropsBadgeRole) => {
  const roleMap: Record<"ADMIN" | "MANAGER" | "USER", string> = {
    ADMIN: "Adminstrador",
    MANAGER: "Gestor",
    USER: "Usuário",
  };

  function translateRole(role: "ADMIN" | "MANAGER" | "USER"): string {
    return roleMap[role] ?? role;
  }
  return (
    <Badge
      className={cn(
        role === "ADMIN"
          ? "bg-black"
          : role === "MANAGER"
            ? "bg-blue-600"
            : "bg-green-600",
        "text-white",
      )}
    >
      {translateRole(role)}
    </Badge>
  );
};

export default BadgeRole;
