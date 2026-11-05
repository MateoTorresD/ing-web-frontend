import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { queryClient } from "@/lib/query-client";
import { useAuthStore } from "../store/auth.store";

export const NoAccessPage = () => {
  const handleLogout = () => {
    useAuthStore.getState().logout();
    // Avoids showing cached data to the next user of this browser.
    queryClient.clear();
  };

  return (
    <main className="flex min-h-svh items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>No tienes acceso</CardTitle>
          <CardDescription>
            Tu rol no tiene acceso a esta sección.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};
