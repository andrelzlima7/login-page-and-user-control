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
import { DateFormatting } from "@/utils/date-formatting";
import { IdFormatter } from "@/utils/Id-formatter";
import CopyId from "./copy-id";
import DialogUpdateStatus from "./dialog-update-status";
import DialogUpdateRole from "./dialog-update-role";

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
            <TableHead>Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user.id} className="odd:bg-muted">
                <TableCell>{DateFormatting.longDate(user.createAt)}</TableCell>
                <TableCell>
                  <div
                    className="flex items-center justify-center"
                    title={user.id}
                  >
                    {IdFormatter.shortId(user.id)}
                    <CopyId id={user.id} />
                  </div>
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>
                  <DialogUpdateStatus id={user.id} status={user.status} />
                </TableCell>
                <TableCell>
                  <DialogUpdateRole id={user.id} role={user.role} />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUsers;
