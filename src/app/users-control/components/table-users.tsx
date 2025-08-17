import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUsers } from "../_server-actions/get-users";

const TableUsers = async () => {
  const { users, total } = await getUsers();
  return (
    <div className="rounded-xl border p-4">
      <Table>
        <TableCaption>{total} usuário(s) cadastrado(s)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Criado em</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Usuário</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Função</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{DateFormatting.shortDate(user.createAt)}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUsers;
