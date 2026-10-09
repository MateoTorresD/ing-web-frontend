import { createBrowserRouter } from "react-router";
import { AuthenticatedRoute } from "./modules/auth/guards/authenticated.guard";
import { NotAuthenticatedRoute } from "./modules/auth/guards/not-authenticated.guard";
import { LoginPage } from "./modules/auth/pages/login.page";
import { UsersPage } from "./modules/users/pages/users.page";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthenticatedRoute>
        <UsersPage />
      </AuthenticatedRoute>
    ),
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
