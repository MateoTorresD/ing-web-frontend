import { api } from "@/api/api";
import type { UpdateUserDto } from "../interfaces/update-user-dto.interface";
import type { UserResponse } from "../interfaces/user-response.interface";

export const updateUserAction = async (
  uuid: string,
  dto: UpdateUserDto,
): Promise<UserResponse> => {
  try {
    const { data } = await api.patch<UserResponse>(`/users/${uuid}`, dto);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
