import { IAuthState, IAuthProfile } from './auth.types';

export default class AuthState implements IAuthState {
  errorMsg: string;
  profile: IAuthProfile;
  idToken: string;
  tokenExpiry: any;
  isLoggedIn: boolean;
  authState: any;

  constructor() {
    this.errorMsg = '';
    this.profile = {
      aud: '',
      email: '',
      email_verified: false,
      exp: null,
      family_name: '',
      given_name: '',
      iat: '',
      iss: '',
      locale: '',
      name: '',
      nickname: '',
      nonce: '',
      picture: '',
      sub: '',
      updated_at: ''
    };
    this.authState = '';
    this.idToken = '';
    this.tokenExpiry = 0;
    this.isLoggedIn = false;
  }
}
