import { GetterTree } from 'vuex';
import MoviesState from './movies.state';
import RootState from '../state';

export enum MoviesGetterKeys {
  moviesAll = 'moviesAll'
}

export const getters: GetterTree<MoviesState, RootState> = {
  moviesAll: (state: MoviesState) => state.movies
};

export default getters;
