import { store } from '../../store/index';
import { LocalStorageKeys } from '../../store/auth/auth.types';
import { AUTH_CONFIG } from '@/lib/auth/authConfig';
import auth0 from 'auth0-js';
import { AuthMutationKeys } from '@/store/auth/auth.mutations';

const authState = store.state.auth;

const webAuth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  redirectUri: `${window.location.origin}/callback`,
  clientID: AUTH_CONFIG.clientId,
  responseType: 'id_token',
  scope: 'openid profile email'
});

export default class AuthServiceHelper {
  idToken = null;

  static isAuthenticated() {
    return Date.now() < authState.tokenExpiry && localStorage.getItem(LocalStorageKeys.localStorageKey) === 'true';
  }

  static isIdTokenValid() {
    return authState.idToken && authState.tokenExpiry && Date.now() < authState.tokenExpiry;
  }

  static renewTokens(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem(LocalStorageKeys.localStorageKey) !== 'true') {
        return reject('Not logged in');
      }

      webAuth.checkSession({}, (err, authResult) => {
        if (err) {
          reject(err);
        } else {
          store.commit(AuthMutationKeys.localLogin, authResult);
          resolve(authResult);
        }
      });
    });
  }

  static getIdToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (AuthServiceHelper.isIdTokenValid()) {
        resolve(authState.idToken);
      } else if (this.isAuthenticated()) {
        this.renewTokens().then((authResult) => {
          resolve(authResult.idToken);
        }, reject);
      } else {
        resolve();
      }
    });
  }
}

// const service = new AuthService();

// service.setMaxListeners(5);

// export default service;
