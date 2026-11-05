import { createBrowserRouter, Outlet } from "react-router";
import { AuthenticatedRoute } from "./modules/auth/guards/authenticated.guard";
import { NotAuthenticatedRoute } from "./modules/auth/guards/not-authenticated.guard";
import { RoleRoute } from "./modules/auth/guards/role.guard";
import { LoginPage } from "./modules/auth/pages/login.page";
import { RoleName } from "./modules/roles/enums/role-name.enum";
import { UsersPage } from "./modules/users/pages/users.page";

export const appRouter = createBrowserRouter([
  {
    // Administration routes: only administrators.
    element: (
      <AuthenticatedRoute>
        <RoleRoute roles={[RoleName.ADMIN]}>
          <Outlet />
        </RoleRoute>
      </AuthenticatedRoute>
    ),
    children: [{ path: "/", element: <UsersPage /> }],
  },
  {
    path: "/auth/login",
    element: (
      <NotAuthenticatedRoute>
        <LoginPage />
      </NotAuthenticatedRoute>
    ),
  },
]);
