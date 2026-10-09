import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserAction } from "../actions/update-user.action";
import type { UpdateUserDto } from "../interfaces/update-user-dto.interface";
import { usersKeys } from "../queries/users.keys";

interface UpdateUserVariables {
  uuid: string;
  dto: UpdateUserDto;
}

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ uuid, dto }: UpdateUserVariables) =>
      updateUserAction(uuid, dto),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: usersKeys.all }),
  });
};
