export type AuthTypeKeys = "username";

export interface ILogin {
  CLIENT_PASSWORD: string;
  CLIENT_USERNAME: string;
}

export interface ILoginSyncAction {
  type: string;
  payload: ILogin;
}

export interface ILoginInfo {
  failLoginDate: string;
  memberId?: string;
}

export interface IAuthState {
  login: ILogin;
  logout: boolean;
  loading: boolean;
  error: null;
  resultObject?: any;
}