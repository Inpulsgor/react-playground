export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface FailurePayload {
  code?: string;
  message: string;
}

export type ShowError = (message?: string) => void;
