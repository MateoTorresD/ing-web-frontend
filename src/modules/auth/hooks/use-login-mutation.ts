import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../actions/login.action";
import { useAuthStore } from "../store/auth.store";

export const useLoginMutation = () => {
  const setSession = useAuthStore((s) => s.setSession);

  return useMutation({
    mutationFn: loginAction,
    onSuccess: ({ accessToken, user }) => setSession(accessToken, user),
  });
};
