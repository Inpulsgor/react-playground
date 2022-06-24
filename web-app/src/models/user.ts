export interface UserUpdated {
  email: string;
  name: string;
  phone_number: string;
  avatar: string;
  accepted_gtc: boolean;
  accepted_pp: boolean;
  is_pep: boolean;
}

export interface User extends UserUpdated {
  id: number;
  username: string;
  reg_datetime: string;
  status: string;
  eth_address: string;
  role: string;
}

export enum userTypes {
  GET_USER_REQUEST = 'GET_USER_REQUEST',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAILURE = 'GET_USER_FAILURE',
  UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',
}

export interface GetUserRequest {
  type: typeof userTypes.GET_USER_REQUEST;
}

export interface UpdateUserRequest {
  type: typeof userTypes.UPDATE_USER_REQUEST;
  payload: UserUpdated;
}

export interface UserService {
  getUserRequest: () => GetUserRequest;
  updateUserRequest: (user: UserUpdated) => UpdateUserRequest;
}
