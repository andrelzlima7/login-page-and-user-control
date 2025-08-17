import Layout from "@/components/layout/layout";
import TableUsers from "./components/table-users";
import DialogCreateUser from "./components/dialog-create-user";

const UsersControl = () => {
  return (
    <Layout>
      <div className="p-8">
        <div>
          <h1 className="text-center font-bold text-2xl">Controle de Usuários</h1>
        </div>
        <div className="flex justify-end p-4">
          <DialogCreateUser />
        </div>
        <div>
          <TableUsers />
        </div>
      </div>
    </Layout>
  );
};

export default UsersControl;
