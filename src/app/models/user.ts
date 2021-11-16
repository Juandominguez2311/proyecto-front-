export interface Roles {
  client?: boolean;
  admin?: boolean;
}

export interface UserInterface {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  roles: Roles;
}