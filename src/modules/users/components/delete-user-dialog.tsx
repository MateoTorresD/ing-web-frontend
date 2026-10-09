import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { getApiErrorMessage } from "@/common/utils/get-api-error-message";
import { useDeleteUserMutation } from "../hooks/use-delete-user-mutation";
import type { UserResponse } from "../interfaces/user-response.interface";

interface Props {
  user: UserResponse;
  onClose: () => void;
  onDeleted: () => void;
}

export const DeleteUserDialog = ({ user, onClose, onDeleted }: Props) => {
  const { mutate: deleteUser, isPending } = useDeleteUserMutation();

  const handleDelete = () => {
    deleteUser(user.uuid, {
      onSuccess: () => {
        toast.success("User deleted");
        onDeleted();
        onClose();
      },
      onError: (error) => toast.error(getApiErrorMessage(error)),
    });
  };

  return (
    <AlertDialog open onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete user</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete <strong>{user.username}</strong>?
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
