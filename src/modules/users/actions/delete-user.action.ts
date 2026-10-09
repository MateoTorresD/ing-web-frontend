import { api } from "@/api/api";

export const deleteUserAction = async (uuid: string): Promise<void> => {
  try {
    await api.delete(`/users/${uuid}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
