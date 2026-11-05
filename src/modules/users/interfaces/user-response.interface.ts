export interface UserResponse {
  uuid: string;
  username: string;
  email: string;
  isActive: boolean;
  role: {
    uuid: string;
    name: string;
  };
  person: {
    firstName: string;
    middleName: string | null;
    lastName: string;
  };
}
