import type { CreateUserDto } from "./create-user-dto.interface";

export type UpdateUserDto = Partial<Omit<CreateUserDto, "password">>;
