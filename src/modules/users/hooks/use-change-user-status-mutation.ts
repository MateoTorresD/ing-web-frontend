import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusAction } from "../actions/change-user-status.action";
import { usersKeys } from "../queries/users.keys";

export const useChangeUserStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeUserStatusAction,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: usersKeys.lists() }),
  });
};
