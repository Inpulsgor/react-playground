export type UserData = {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
};
export interface LoginCredentials {
  email: string;
  password: string;
}
export interface LoginResponse {
  success: boolean;
  token: string;
  userData: UserData;
}
export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}
export interface RegisterResponse {
  success: boolean;
  token: string;
  userData: UserData;
}
export interface LogoutCredentials {
  id: string;
}

export interface LogoutResponse {
  success: boolean;
}

export interface CurrentUserResponse {
  success: boolean;
  userData: UserData;
}
