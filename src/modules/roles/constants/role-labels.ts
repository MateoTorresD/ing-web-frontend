import { RoleName } from "../enums/role-name.enum";

// The API sends stable role codes; the labels shown to the user live here.
export const ROLE_LABELS: Record<RoleName, string> = {
  [RoleName.ADMIN]: "Administrador",
  [RoleName.PLANNER]: "Planificador",
  [RoleName.DRIVER]: "Conductor",
};

export const getRoleLabel = (name: RoleName): string => ROLE_LABELS[name];
