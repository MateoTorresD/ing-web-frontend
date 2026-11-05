// The API sends stable role codes; the labels shown to the user live here.
export const ROLE_LABELS: Record<string, string> = {
  ADMIN: "Administrador",
  PLANNER: "Planificador",
  DRIVER: "Conductor",
};

export const getRoleLabel = (name: string): string =>
  ROLE_LABELS[name] ?? name;
