import { ActionTree, ActionContext } from 'vuex';
import RootState from './state';
import { GlobalMutationKeys } from './mutations';
import CollectionQueries from '@/graphql/collections/CollectionQueries';
import { ICollection } from '@/graphql/collections/CollectionTypes';
import { apolloClient } from '../plugins/vue-apollo';

const COLLECTION_QUERIES = new CollectionQueries();

export enum GlobalActionKeys {
  fetchRootData = 'fetchRootData',
  createNewListItem = 'createNewListItem',
  fetchUserCollections = 'fetchUserCollections'
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchRootData({ commit }: ActionContext<RootState, RootState>) {
    const apiRes = 'some api res';
    // tslint:disable-next-line: no-console

    // apiReq; // then... catch..

    commit(GlobalMutationKeys.setFrontPageText, apiRes);
    return 'succesfully fetched root action';
  },
  async createNewListItem({ commit, state }: ActionContext<RootState, RootState>, obj: ICollection) {
    const userId = state.auth.profile['https://hasura.io/jwt/claims']['x-hasura-user-id'];

    const collectionPayload: ICollection = {
      name: obj.name,
      type: obj.type,
      description: obj.description,
      user_id: userId
    };

    await CollectionQueries.addCollection(collectionPayload)
      .then(() => {
        commit(GlobalMutationKeys.setQuerySucces);
      })
      .catch((err) => {
        commit(GlobalMutationKeys.setQueryErr, err);
      });

    return;
  },
  async fetchUserCollections({ commit }: ActionContext<RootState, RootState>, userId: string) {
    apolloClient
      .query({
        query: COLLECTION_QUERIES.getUserCollections
      })
      .then((res) => {
        commit(GlobalMutationKeys.setUserCollections, res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }
};
