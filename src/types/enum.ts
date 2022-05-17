export enum ButtonTypes {
  CLOSE = 'CLOSE',
  TOGGLE = 'TOGGLE',
}

export enum LOADING_STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
}

export enum REQUEST_STATUS {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export enum ROUTES {
  HOME = '/',
  AUTH = '/auth',
  RECOVERY = '/auth/recovery',
  REGISTRATION = '/auth/registration',
  NOT_FOUND = '*',
}
