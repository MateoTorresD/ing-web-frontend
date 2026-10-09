import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getApiErrorMessage } from "@/common/utils/get-api-error-message";
import { useCreateUserMutation } from "../hooks/use-create-user-mutation";
import { useUpdateUserMutation } from "../hooks/use-update-user-mutation";
import type { UserResponse } from "../interfaces/user-response.interface";
import type { UserFormValues } from "../schemas/user-form.schema";
import { UserForm } from "./user-form";

interface Props {
  user?: UserResponse;
  onClose: () => void;
}

export const UserFormDialog = ({ user, onClose }: Props) => {
  const isEdit = user !== undefined;
  const { mutate: createUser, isPending: isCreating } = useCreateUserMutation();
  const { mutate: updateUser, isPending: isUpdating } = useUpdateUserMutation();

  const handleSubmit = ({ password, ...values }: UserFormValues) => {
    const dto = { ...values, middleName: values.middleName || undefined };

    const options = {
      onSuccess: () => {
        toast.success(isEdit ? "User updated" : "User created");
        onClose();
      },
      onError: (error: unknown) => toast.error(getApiErrorMessage(error)),
    };

    if (user) {
      updateUser({ uuid: user.uuid, dto }, options);
    } else {
      createUser({ ...dto, password }, options);
    }
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit user" : "New user"}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Update the user's information."
              : "Fill in the information to create a user."}
          </DialogDescription>
        </DialogHeader>
        <UserForm
          user={user}
          isPending={isCreating || isUpdating}
          onSubmit={handleSubmit}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};
