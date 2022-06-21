export interface FailurePayload {
  code?: string;
  message: string;
}

export type ShowError = (message?: string) => void;
