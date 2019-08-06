import { ActionContext, ActionTree } from 'vuex';
import MoviesState from './movies.state';
import RootState from '../state';

export enum HomeActionKeys {
  fetchMovies = 'fetchMovies'
}

export const actions: ActionTree<MoviesState, RootState> = {};

export default actions;
