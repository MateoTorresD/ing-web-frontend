import { api } from "@/api/api";
import type { UserResponse } from "../interfaces/user-response.interface";

export interface ChangeUserStatusParams {
  uuid: string;
  isActive: boolean;
}

export const changeUserStatusAction = async ({
  uuid,
  isActive,
}: ChangeUserStatusParams): Promise<UserResponse> => {
  try {
    const { data } = await api.patch<UserResponse>(`/users/${uuid}/status`, {
      isActive,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
