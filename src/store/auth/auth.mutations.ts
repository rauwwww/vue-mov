import { MutationTree } from 'vuex';
import AuthState from './auth.state';
import { IAuthState, IAuth0Responses } from './auth.types';

export enum AuthMutationKeys {
  logout = 'logout',
  logoutErr = 'logoutErr',
  loginErr = 'loginErr',
  localLogin = 'localLogin'
}

const mutations: MutationTree<IAuthState> = {
  localLogin(state: IAuthState, authResult: IAuth0Responses) {
    const tokenExp = new Date(authResult.idTokenPayload.exp * 1000);

    state.idToken = authResult.idToken;
    state.profile = authResult.idTokenPayload;
    state.tokenExpiry = tokenExp;
    state.isLoggedIn = true;
    state.authState = authResult.appState || {};
  },
  loginErr(state: IAuthState, resp: IAuth0Responses) {
    state.isLoggedIn = false;
    state.errorMsg = resp.error;
  },
  logout(state: IAuthState) {
    state.idToken = '';
    state.profile = {
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
    state.status = 'logged out';
    state.tokenExpiry = 0;
    state.isLoggedIn = false;
  },
  logoutErr(state: AuthState, resp: any) {
    state.errorMsg = `Error logging out: ${resp}`;
  }
};

export default mutations;
