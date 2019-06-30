import { MutationTree } from 'vuex';
import { IRootState } from './types';

export enum GlobalMutationKeys {
  setFrontPageText = 'setFrontPageText'
}

export const mutations: MutationTree<IRootState> = {
  setFrontPageText(state: IRootState, resp: string) {
    state.frontPageText = resp;
  }
};
