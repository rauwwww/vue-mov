import { IMoviesState, IMovies } from './movies.types';

export default class MoviesState implements IMoviesState {
  movies: IMovies[];

  constructor() {
    this.movies = [];
  }
}
