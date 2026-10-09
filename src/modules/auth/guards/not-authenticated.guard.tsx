import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../store/auth.store";

export const NotAuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useAuthStore((s) => s.token !== null);

  if (isAuthenticated) return <Navigate to="/" replace />;

  return children;
};
