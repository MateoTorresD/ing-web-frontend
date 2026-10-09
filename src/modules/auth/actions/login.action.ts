import { api } from "@/api/api";
import type { LoginDto } from "../interfaces/login-dto.interface";
import type { LoginResponse } from "../interfaces/login-response.interface";

export const loginAction = async (dto: LoginDto): Promise<LoginResponse> => {
  try {
    const { data } = await api.post<LoginResponse>("/auth/login", dto);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
