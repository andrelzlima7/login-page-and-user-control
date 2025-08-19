import Layout from "@/components/layout/layout";
import TableUsers from "./components/table-users";
import DialogCreateUser from "./components/dialog-create-user";

const UsersControl = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {

  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);
  
  return (
    <Layout>
      <div className="p-8">
        <div>
          <h1 className="text-center text-2xl font-bold">
            Controle de Usuários
          </h1>
        </div>
        <div className="flex justify-end p-4">
          <DialogCreateUser />
        </div>
        <div>
          <TableUsers currentPage={currentPage} />
        </div>
      </div>
    </Layout>
  );
};

export default UsersControl;
