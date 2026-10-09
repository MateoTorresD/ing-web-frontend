import { api } from "@/api/api";
import type { CreateUserDto } from "../interfaces/create-user-dto.interface";
import type { UserResponse } from "../interfaces/user-response.interface";

export const createUserAction = async (
  dto: CreateUserDto,
): Promise<UserResponse> => {
  try {
    const { data } = await api.post<UserResponse>("/users", dto);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
