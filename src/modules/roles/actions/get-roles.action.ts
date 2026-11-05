import { api } from "@/api/api";
import type { RoleResponse } from "../interfaces/role-response.interface";

export const getRolesAction = async (): Promise<RoleResponse[]> => {
  try {
    const { data } = await api.get<RoleResponse[]>("/roles");

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
