import { UserCheck2 } from "lucide-react";
import { FormResetPassword } from "./components/form-reset-password";


const ResetPassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <section
        aria-label="Área de autenticação"
        className="w-full max-w-xs rounded-2xl border px-8 pb-16 shadow-xl backdrop-blur-xl"
      >
        <header className="flex flex-col items-center justify-center gap-4 py-12">
          <UserCheck2 size={50} />
          <h1 className="text-2xl font-bold tracking-tight">
            Controle de Usuários
          </h1>
        </header>
        <FormResetPassword />
      </section>
    </div>
  );
};

export default ResetPassword;