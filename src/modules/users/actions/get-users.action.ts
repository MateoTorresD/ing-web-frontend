import { api } from "@/api/api";
import type { Paginated } from "@/common/interfaces/paginated.interface";
import type { PaginationParams } from "@/common/interfaces/pagination-params.interface";
import type { UserResponse } from "../interfaces/user-response.interface";

export const getUsersAction = async (
  params: PaginationParams,
): Promise<Paginated<UserResponse>> => {
  try {
    const { data } = await api.get<Paginated<UserResponse>>("/users", {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
