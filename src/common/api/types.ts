export interface FailurePayload {
  code?: string;
  message: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export type ShowError = (message?: unknown) => void;
