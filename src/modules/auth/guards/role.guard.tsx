import type { PropsWithChildren } from "react";
import type { RoleName } from "@/modules/roles/enums/role-name.enum";
import { NoAccessPage } from "../pages/no-access.page";
import { useAuthStore } from "../store/auth.store";

interface Props extends PropsWithChildren {
  roles: RoleName[];
}

/**
 * UX only: the real protection is the backend RolesGuard.
 */
export const RoleRoute = ({ roles, children }: Props) => {
  const role = useAuthStore((s) => s.user?.role?.name);

  if (!role || !roles.includes(role)) return <NoAccessPage />;

  return children;
};
