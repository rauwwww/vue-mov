export interface IAuthState {
  status: string;
  errorMsg: string;
  profile: IProfile;
  idToken: string;
  tokenExpiry: any;
  isLoggedIn: boolean;
  authState: any;
}

export interface IProfile {
  something: any;
  exp: number | null;
}

export interface IAuth0Responses {
  err: IErrorResponse;
  idToken: any;
  idTokenPayload: any;
  appState: any;
}

export enum LocalStorageKeys {
  localStorageKey = 'loggedIn',
  loginEvent = 'loginEvent'
}

export interface IErrorResponse {
  statusText: string;
}
