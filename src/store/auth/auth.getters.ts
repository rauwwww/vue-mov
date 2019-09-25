import { GetterTree } from 'vuex';
import RootState from '../state';
import AuthState from './auth.state';
import { LocalStorageKeys } from './auth.types';
import { DateHelpers } from '@/utils/dateHelpers';

export enum AuthGetterKeys {
  isAuthenticated = 'isAuthenticated',
  idToken = 'idToken',
  isLoggedIn = 'isLoggedIn',
  authProfile = 'authProfile',
  authUserId = 'authUserId'
}

const DATEHELPER = new DateHelpers();

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: (state) => {
    const isTokenAlive = Date.now() < DATEHELPER.toUnixMillis(state.tokenExpiry);
    return isTokenAlive && localStorage.getItem(LocalStorageKeys.localStorageKey) === 'true';
  },
  isLoggedIn: (state) => state.isLoggedIn,
  idToken: (state) => state.idToken,
  authProfile: (state) => state.profile,
  authUserId: (state) => state.profile['https://hasura.io/jwt/claims']['x-hasura-user-id']
};

export default getters;
