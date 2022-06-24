export interface DocumentResult {
  _doc: any;
}

export interface UserModelTypes extends DocumentResult {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}
