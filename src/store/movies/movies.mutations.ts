import { MutationTree } from 'vuex';
import MoviesState from './movies.state';
import { IMoviesState } from './movies.types';

export enum AdminDashMutationKeys {
  setActivePackage = 'setActivePackage'
}

const mutations: MutationTree<IMoviesState> = {
  setMovies(state: MoviesState, data: any[]) {
    state.movies = data;
  }
};

export default mutations;
