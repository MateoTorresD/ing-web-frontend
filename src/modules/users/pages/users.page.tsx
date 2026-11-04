import { useState } from "react";

import { Button } from "@/components/ui/button";
import { usePageParam } from "@/common/hooks/use-page-param";
import { getApiErrorMessage } from "@/common/utils/get-api-error-message";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { ChangeUserStatusDialog } from "../components/change-user-status-dialog";
import { UserFormDialog } from "../components/user-form-dialog";
import { UsersTable } from "../components/users-table";
import { useUsersQuery } from "../hooks/use-users-query";
import type { UserResponse } from "../interfaces/user-response.interface";

const PAGE_SIZE = 10;

type DialogState =
  | { type: "create" }
  | { type: "edit"; user: UserResponse }
  | { type: "status"; user: UserResponse }
  | null;

export const UsersPage = () => {
  const { page } = usePageParam();
  const currentUserUuid = useAuthStore((s) => s.user?.uuid);
  const [dialog, setDialog] = useState<DialogState>(null);

  const { data, isPending, isError, error } = useUsersQuery({
    page,
    limit: PAGE_SIZE,
  });

  const closeDialog = () => setDialog(null);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Users</h1>
        <div>
          <Button
            onClick={() => setDialog({ type: "create" })}
            className="mr-2"
          >
            New user
          </Button>
          <Button
            onClick={() => useAuthStore.getState().logout()}
            variant="destructive"
          >
            Log Out
          </Button>
        </div>
      </div>

      {isPending && <p className="text-muted-foreground">Loading...</p>}

      {isError && (
        <p className="text-destructive">{getApiErrorMessage(error)}</p>
      )}

      {data && (
        <UsersTable
          users={data.data}
          currentUserUuid={currentUserUuid}
          onEdit={(user) => setDialog({ type: "edit", user })}
          onToggleStatus={(user) => setDialog({ type: "status", user })}
        />
      )}

      {dialog?.type === "create" && <UserFormDialog onClose={closeDialog} />}

      {dialog?.type === "edit" && (
        <UserFormDialog user={dialog.user} onClose={closeDialog} />
      )}

      {dialog?.type === "status" && (
        <ChangeUserStatusDialog user={dialog.user} onClose={closeDialog} />
      )}
    </main>
  );
};
