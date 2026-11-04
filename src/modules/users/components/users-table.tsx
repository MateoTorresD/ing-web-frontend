import { Pencil, UserCheck, UserX } from "lucide-react";

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
  onToggleStatus: (user: UserResponse) => void;
}

export const UsersTable = ({
  users,
  currentUserUuid,
  onEdit,
  onToggleStatus,
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
          <TableHead>Status</TableHead>
          <TableHead className="w-24 text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center text-muted-foreground">
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
              <TableCell>
                <span
                  className={
                    user.isActive
                      ? "rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                      : "rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                  }
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </TableCell>
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
                    aria-label={`${user.isActive ? "Deactivate" : "Activate"} ${user.username}`}
                    disabled={user.uuid === currentUserUuid}
                    onClick={() => onToggleStatus(user)}
                  >
                    {user.isActive ? <UserX /> : <UserCheck />}
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
