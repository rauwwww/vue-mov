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
  aud: any;
  email_verified: boolean;
  email: string;
  exp: number | null;
  family_name: string;
  given_name: string;
  nickname: string;
  iat: string;
  iss: string;
  locale: string;
  name: string;
  nonce: string;
  picture: string;
  sub: string;
  updated_at: string;
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
