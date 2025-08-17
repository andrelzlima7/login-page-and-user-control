import { UserStatus } from "../../../../generated/prisma";
import { Badge } from "@/components/ui/badge";

interface PropsBadgeStatus {
  status: UserStatus;
}

const BadgeStatus = ({ status }: PropsBadgeStatus) => {
  const statusMap: Record<"ACTIVE" | "INACTIVE" | "PENDING", string> = {
    ACTIVE: "Ativo",
    INACTIVE: "Inativo",
    PENDING: "Pendente",
  };

  function translateStatus(status: "ACTIVE" | "INACTIVE" | "PENDING"): string {
    return statusMap[status] ?? status;
  }
  return (
    <Badge
      variant={
        status === "ACTIVE"
          ? "default"
          : status === "PENDING"
            ? "outline"
            : "destructive"
      }
    >
      {translateStatus(status)}
    </Badge>
  );
};

export default BadgeStatus;
