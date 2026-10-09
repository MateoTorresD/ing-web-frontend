import type { PaginationParams } from "@/common/interfaces/pagination-params.interface";

export const usersKeys = {
  all: ["users"] as const,
  lists: () => [...usersKeys.all, "list"] as const,
  list: (params: PaginationParams) => [...usersKeys.lists(), params] as const,
  details: () => [...usersKeys.all, "detail"] as const,
  detail: (uuid: string) => [...usersKeys.details(), uuid] as const,
};
