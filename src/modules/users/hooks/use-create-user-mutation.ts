import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAction } from "../actions/create-user.action";
import { usersKeys } from "../queries/users.keys";

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUserAction,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: usersKeys.lists() }),
  });
};
