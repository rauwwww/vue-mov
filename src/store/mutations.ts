import { MutationTree } from 'vuex';
import { IRootState } from './types';

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
    state.queryResponse.success = 'success';
    state.queryResponse.err = '';
  },
  setQueryErr(state: IRootState, resp: any) {
    state.queryResponse.success = '';
    state.queryResponse.err = resp.Error;
  }
};
