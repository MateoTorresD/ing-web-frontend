export interface CreateUserDto {
  firstName: string;
  middleName?: string;
  lastName: string;
  username: string;
  email: string;
  roleUuid: string;
  password: string;
}
