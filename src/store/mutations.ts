import { MutationTree } from 'vuex';
import { IRootState, IQueryResults } from './types';

export enum GlobalMutationKeys {
  setFrontPageText = 'setFrontPageText',
  setQuerySucces = 'setQuerySucces',
  setQueryErr = 'setQueryErr'
}

export const mutations: MutationTree<IRootState> = {
  setFrontPageText(state: IRootState, resp: string) {
    state.frontPageText = resp;
  },
  setQuerySucces(state: IRootState) {
    console.log('got here');

    state.queryResult.success = 'sucess';
    state.queryResult.err = '';
  },
  setQueryErr(state: IRootState, resp: any) {
    console.log(resp);
    state.queryResult.success = '';
    state.queryResult.err = resp;
  }
};
