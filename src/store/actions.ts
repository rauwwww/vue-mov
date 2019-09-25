import { ActionTree, ActionContext } from 'vuex';
import RootState from './state';
import { GlobalMutationKeys } from './mutations';
import gql from 'graphql-tag';
import { apolloClient } from '../plugins/vue-apollo';

export enum GlobalActionKeys {
  fetchRootData = 'fetchRootData',
  createNewListItem = 'createNewListItem'
}

export interface CreateCol {
  name: string;
  description: string;
  user_id: any;
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchRootData({ commit }: ActionContext<RootState, RootState>) {
    const apiRes = 'some api res';
    // tslint:disable-next-line: no-console

    // apiReq; // then... catch..

    commit(GlobalMutationKeys.setFrontPageText, apiRes);
    return 'succesfully fetched root action';
  },
  async createNewListItem({ commit, state }: ActionContext<RootState, RootState>, obj: CreateCol) {
    const userId = state.auth.profile['https://hasura.io/jwt/claims']['x-hasura-user-id'];

    const name = 'movie';
    const type = 'movies';

    const insertCollectionItem = gql`
      mutation insert_collections($userId: String, $name: String!, $type: collection_types!) {
        insert_collections(objects: [{ user_id: $userId, name: $name, type: $type }]) {
          affected_rows
        }
      }
    `;
    await apolloClient.mutate({
      mutation: insertCollectionItem,
      variables: {
        userId,
        name,
        type
      }
    });

    return;
  }
};
