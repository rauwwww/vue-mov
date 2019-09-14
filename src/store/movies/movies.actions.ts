import { ActionTree } from 'vuex';
import fetchOemdbMovies from './_actions/fetchOemdbMovies';
import fetchUserMovies from './_actions/fetchUserMovies';
import MoviesState from './movies.state';
import RootState from '../state';

export enum MoviesActionKeys {
  fetchOemdbMovies = 'fetchOemdbMovies',
  fetchUserMovies = 'fetchUserMovies'
}

export const actions: ActionTree<MoviesState, RootState> = {
  fetchOemdbMovies,
  fetchUserMovies
};

export default actions;
