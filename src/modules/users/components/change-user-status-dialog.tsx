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
import { useChangeUserStatusMutation } from "../hooks/use-change-user-status-mutation";
import type { UserResponse } from "../interfaces/user-response.interface";

interface Props {
  user: UserResponse;
  onClose: () => void;
}

export const ChangeUserStatusDialog = ({ user, onClose }: Props) => {
  const { mutate: changeStatus, isPending } = useChangeUserStatusMutation();
  const willDeactivate = user.isActive;

  const handleConfirm = () => {
    changeStatus(
      { uuid: user.uuid, isActive: !user.isActive },
      {
        onSuccess: () => {
          toast.success(willDeactivate ? "User deactivated" : "User activated");
          onClose();
        },
        onError: (error) => toast.error(getApiErrorMessage(error)),
      },
    );
  };

  return (
    <AlertDialog open onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {willDeactivate ? "Deactivate user" : "Activate user"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <strong>{user.username}</strong>{" "}
            {willDeactivate
              ? "will no longer be able to log in. You can activate the account again later."
              : "will be able to log in again."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant={willDeactivate ? "destructive" : "default"}
            disabled={isPending}
            onClick={handleConfirm}
          >
            {isPending
              ? "Saving..."
              : willDeactivate
                ? "Deactivate"
                : "Activate"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
