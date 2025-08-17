import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircleIcon } from "lucide-react";
import FormCreateUser from "./form-create-user";

const DialogCreateUser = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusCircleIcon />
          Novo Usuário
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastro de Usuários</DialogTitle>
          <DialogDescription>
            Informe os dados necessários para cadastrar um novo usuário
          </DialogDescription>
        </DialogHeader>
        <div>
          <FormCreateUser />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateUser;
