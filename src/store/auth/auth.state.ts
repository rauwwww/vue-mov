import { IAuthState, IProfile } from './auth.types';

export default class AuthState implements IAuthState {
  status: string;
  errorMsg: string;
  profile: IProfile;
  idToken: string;
  tokenExpiry: any;
  isLoggedIn: boolean;
  authState: any;

  constructor() {
    this.status = '';
    this.errorMsg = '';
    this.profile = {
      something: '',
      exp: null
    };
    this.authState = '';
    this.idToken = '';
    this.tokenExpiry = 0;
    this.isLoggedIn = false;
  }
}
