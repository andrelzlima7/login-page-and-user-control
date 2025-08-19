"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { ResetPasswordUsers } from "../_server-actions/reset-password-users";

interface PropsResetPasswordUser {
  id: string;
}

const ResetPasswordUser = ({ id }: PropsResetPasswordUser) => {
  const passwordReset = async () => {
    await ResetPasswordUsers(id);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Pencil />
          Redefinir Senha
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Deseja realmente redefinir a senha deste usuário?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ao redefinir a senha, a mesma voltará ao estado inicial. No próximo
            acesso o usuário será redirecionado para definir novamente sua
            senha.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => passwordReset()}>
            Continar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResetPasswordUser;
