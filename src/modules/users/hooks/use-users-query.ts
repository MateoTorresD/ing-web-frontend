import { useQuery } from "@tanstack/react-query";
import type { PaginationParams } from "@/common/interfaces/pagination-params.interface";
import { getUsersAction } from "../actions/get-users.action";
import { usersKeys } from "../queries/users.keys";

export const useUsersQuery = (params: PaginationParams) => {
  return useQuery({
    queryKey: usersKeys.list(params),
    queryFn: () => getUsersAction(params),
    // placeholderData: keepPreviousData,
  });
};
