import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BadgeStatus from "./badge-status";
import { UserStatus } from "../../../../generated/prisma";
import FormUpdateStatus from "./form-update-status";
import { getUserInCookies } from "@/utils/_server-actions/get-user-in-cookies";

interface PropsDialogUpdateStatus {
  status: UserStatus;
  id: string;
}

const DialogUpdateStatus = async ({ status, id }: PropsDialogUpdateStatus) => {
    const user = await getUserInCookies()
  return (
    <Dialog>
      <DialogTrigger disabled={user.role !="ADMIN"}>
        <BadgeStatus status={status} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar status do usuário</DialogTitle>
        </DialogHeader>
        <div>
          <FormUpdateStatus id={id} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUpdateStatus;
