import { ActionTree, ActionContext } from 'vuex';
import RootState from '../state';
import AuthState from './auth.state';
import { AuthMutationKeys } from './auth.mutations';
import { LocalStorageKeys } from './auth.types';

import auth0 from 'auth0-js';
// import authConfig from '../../auth-conf.json';

// import { clientId, domain } from '../../auth-conf.json';
// import json = require('../static/calls.json');
// // tslint:disable-next-line:no-var-requires
// const authConfig = require('../../auth-conf.json');

export enum AuthActionKeys {
  authLogin = 'authLogin',
  logOut = 'authLogOut',
  handleAuthentication = 'handleAuthentication'
}

// const webAuth = new auth0.WebAuth({
//   domain: authConfig.domain,
//   redirectUri: `${window.location.origin}/callback`,
//   clientID: authConfig.clientId,
//   responseType: 'id_token',
//   scope: 'openid profile email'
// });

const webAuth = new auth0.WebAuth({
  domain: 'dev-wge1osgt.eu.auth0.com',
  redirectUri: `${window.location.origin}/callback`,
  clientID: 'fCtTi5j6g1oORsHmYpc3eArFjclcQDO0',
  responseType: 'id_token',
  scope: 'openid profile email'
});

export const actions: ActionTree<AuthState, RootState> = {
  async authLogin({  }: ActionContext<AuthState, RootState>, customState: any) {
    try {
      return webAuth.authorize({
        appState: customState
      });
    } catch (err) {
      return err;
    }
  },
  async authLogOut({ commit }: ActionContext<AuthState, RootState>) {
    // localStorage.removeItem(localStorageKey);
    try {
      webAuth.logout({
        returnTo: `${window.location.origin}`
      });
      commit(AuthMutationKeys.logout);
    } catch (err) {
      commit(AuthMutationKeys.logoutErr, err);
    }
  },

  handleAuthentication({ commit }: ActionContext<AuthState, RootState>): Promise<any> {
    return new Promise((resolve, reject) => {
      webAuth.parseHash((err, authResult) => {
        if (err) {
          commit(AuthMutationKeys.loginErr);
          reject(err);
        } else if (authResult) {
          commit(AuthMutationKeys.localLogin, authResult);
          localStorage.setItem(LocalStorageKeys.localStorageKey, 'true');
          resolve(authResult.idToken);
        }
        reject('err while logging in');
      });
    });
  }
};
export default actions;
