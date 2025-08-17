import Layout from "@/components/layout/layout";
import TableUsers from "./components/table-users";
import DialogCreateUser from "./components/dialog-create-user";

const UsersControl = () => {
  return (
    <Layout>
      <div className="p-8">
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
