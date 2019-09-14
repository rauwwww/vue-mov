import { MutationTree } from 'vuex';
import MoviesState from './movies.state';
import { IMoviesState } from './movies.types';

export enum MoviesMutationKeys {
  setMovies = 'setMovies'
}

const mutations: MutationTree<IMoviesState> = {
  setMovies(state: MoviesState, data: any[]) {
    state.movies = data;
  }
};

export default mutations;
