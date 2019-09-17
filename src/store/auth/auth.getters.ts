import { GetterTree } from 'vuex';
import RootState from '../state';
import AuthState from './auth.state';
import { LocalStorageKeys } from './auth.types';

export enum AuthGetterKeys {
  isAuthenticated = 'isAuthenticated',
  idToken = 'idToken',
  isLoggedIn = 'isLoggedIn'
}

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: (state) => {
    return Date.now() < state.tokenExpiry && localStorage.getItem(LocalStorageKeys.localStorageKey) === 'true';
  },
  isLoggedIn: (state) => state.isLoggedIn,
  idToken: (state) => state.idToken
};

export default getters;
