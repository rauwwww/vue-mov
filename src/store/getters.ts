import RootState from './state';
import { GetterTree } from 'vuex';
import { IRootState } from './types';

export enum GlobalGetterKeys {
  frontPageText = 'frontPageText'
}

export const getters: GetterTree<RootState, IRootState> = {
  frontPageText: (state: IRootState) => state.frontPageText
};
