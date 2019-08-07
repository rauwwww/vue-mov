import { ActionTree } from 'vuex';
import fetchMovies from './_actions/fetchMovies';
import MoviesState from './movies.state';
import RootState from '../state';

export enum MoviesActionKeys {
  fetchMovies = 'fetchMovies'
}

export const actions: ActionTree<MoviesState, RootState> = {
  fetchMovies
};

export default actions;
