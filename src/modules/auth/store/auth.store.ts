import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserResponse } from "@/modules/users/interfaces/user-response.interface";

interface AuthState {
  token: string | null;
  user: UserResponse | null;
  setSession: (token: string, user: UserResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setSession: (token, user) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: "auth",
      partialize: ({ token, user }) => ({ token, user }),
    },
  ),
);
