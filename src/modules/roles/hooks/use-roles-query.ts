import { useQuery } from "@tanstack/react-query";
import { getRolesAction } from "../actions/get-roles.action";
import { rolesKeys } from "../queries/roles.keys";

export const useRolesQuery = () => {
  return useQuery({
    queryKey: rolesKeys.list(),
    queryFn: getRolesAction,
    // Fixed catalog: it never changes while the app is open.
    staleTime: Infinity,
  });
};
