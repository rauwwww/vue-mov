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
  error: string;
  errorDescription: string;
  state: string;
  idToken: any;
  idTokenPayload: any;
  appState: any;
}

export enum LocalStorageKeys {
  localStorageKey = 'loggedIn',
  loginEvent = 'loginEvent'
}
