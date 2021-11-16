export interface Roles {
    client?: boolean;
    admin?: boolean;
  }

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
}
