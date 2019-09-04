import { ActionTree } from 'vuex';
import fetchOemdbMovies from './_actions/fetchOemdbMovies';
import fetchPersonalMovies from './_actions/fetchPersonalMovies';
import MoviesState from './movies.state';
import RootState from '../state';

export enum MoviesActionKeys {
  fetchOemdbMovies = 'fetchOemdbMovies',
  fetchPersonalMovies = 'fetchPersonalMovies'
}

export const actions: ActionTree<MoviesState, RootState> = {
  fetchOemdbMovies,
  fetchPersonalMovies
};

export default actions;
