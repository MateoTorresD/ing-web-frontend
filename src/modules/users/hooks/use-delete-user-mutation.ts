import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserAction } from "../actions/delete-user.action";
import { usersKeys } from "../queries/users.keys";

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserAction,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: usersKeys.lists() }),
  });
};
