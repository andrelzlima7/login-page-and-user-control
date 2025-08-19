import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserRole } from "../../../../generated/prisma";
import { getUserInCookies } from "@/utils/_server-actions/get-user-in-cookies";
import BadgeRole from "./badge-role";
import FormUpdateRole from "./form-update-role";

interface PropsDialogUpdateRole {
  role: UserRole;
  id: string;
}

const DialogUpdateRole = async ({ role, id }: PropsDialogUpdateRole) => {
  const user = await getUserInCookies();
  return (
    <Dialog>
      <DialogTrigger disabled={user.role != "ADMIN"}>
        <BadgeRole role={role} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar Função do usuário</DialogTitle>
        </DialogHeader>
        <div>
          <FormUpdateRole id={id} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUpdateRole;
