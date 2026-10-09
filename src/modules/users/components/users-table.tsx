import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { UserResponse } from "../interfaces/user-response.interface";

interface Props {
  users: UserResponse[];
  currentUserUuid?: string;
  onEdit: (user: UserResponse) => void;
  onDelete: (user: UserResponse) => void;
}

export const UsersTable = ({
  users,
  currentUserUuid,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>First name</TableHead>
          <TableHead>Middle name</TableHead>
          <TableHead>Last name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead className="w-24 text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center text-muted-foreground">
              No users found.
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user.uuid}>
              <TableCell>{user.person.firstName}</TableCell>
              <TableCell>{user.person.middleName ?? "-"}</TableCell>
              <TableCell>{user.person.lastName}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Edit ${user.username}`}
                    onClick={() => onEdit(user)}
                  >
                    <Pencil />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Delete ${user.username}`}
                    disabled={user.uuid === currentUserUuid}
                    onClick={() => onDelete(user)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
