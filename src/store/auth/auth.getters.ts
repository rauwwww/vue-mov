import { GetterTree } from 'vuex';
import RootState from '../state';
import AuthState from './auth.state';
import { LocalStorageKeys } from './auth.types';

export enum AuthGetterKeys {
  isAuthenticated = 'isAuthenticated',
  fullAuth = 'fullAuth'
}

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: (state) => {
    return Date.now() < state.tokenExpiry && localStorage.getItem(LocalStorageKeys.localStorageKey) === 'true';
  },
  fullAuth: (state) => state.idToken
};

export default getters;
