import { ActionTree, ActionContext } from 'vuex';
import RootState from './state';
import { GlobalMutationKeys } from './mutations';

export enum GlobalActionKeys {
  fetchRootData = 'fetchRootData'
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchRootData({ commit }: ActionContext<RootState, RootState>): Promise<any> {
    const apiRes = 'some api res';
    // tslint:disable-next-line: no-console

    // apiReq; // then... catch..

    commit(GlobalMutationKeys.setFrontPageText, apiRes);
    return 'succesfully fetched root action';
  }
};
