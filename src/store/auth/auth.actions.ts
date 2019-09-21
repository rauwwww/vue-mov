import { ActionTree, ActionContext } from 'vuex';
import RootState from '../state';
import AuthState from './auth.state';
import { AuthMutationKeys } from './auth.mutations';
import { LocalStorageKeys } from './auth.types';

import auth0 from 'auth0-js';
import gql from 'graphql-tag';
import { apolloClient } from '../../plugins/vue-apollo';

export enum AuthActionKeys {
  authLogin = 'authLogin',
  authToDb = 'authToDb',
  logOut = 'authLogOut',
  handleAuthentication = 'handleAuthentication'
}
/**
 * TODO add webauth to env vars
 */
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
      webAuth.authorize({
        appState: customState
      });
    } catch (err) {
      return err;
    }
  },
  async authToDb({ state }: ActionContext<AuthState, RootState>) {
    const claimsUrl = 'https://hasura.io/jwt/claims';
    const hasuraUserId = 'x-hasura-user-id';
    const userId = state.profile[claimsUrl][hasuraUserId];
    const nickname = state.profile.nickname;

    const upsertUser = gql`
      mutation upsert_user($userId: String!, $nickname: String) {
        insert_users(
          objects: [{ auth0_id: $userId, name: $nickname }]
          on_conflict: { constraint: users_pkey, update_columns: [last_seen, name] }
        ) {
          affected_rows
        }
      }
    `;

    /**
     * TODO when host in prod, run the insert on auth0 service rules
     */
    if (process.env.NODE_ENV === 'dev') {
      console.log('running env is dev adding auth0 userId to local db instance');
      await apolloClient.mutate({
        mutation: upsertUser,
        variables: {
          userId: userId,
          nickname: nickname
        }
      });
    }

    return;
  },
  async authLogOut({ commit }: ActionContext<AuthState, RootState>) {
    // localStorage.removeItem(localStorageKey);
    try {
      webAuth.logout({
        returnTo: `${window.location.origin}/home`
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
          commit(AuthMutationKeys.loginErr, err);
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
