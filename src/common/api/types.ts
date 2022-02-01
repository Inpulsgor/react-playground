export interface FailurePayload {
  code?: string;
  message: string;
}

export interface MetamaskSignResponse {
  nonce: string;
  signature: string;
}

export type ShowError = (message?: any) => void;
