import { IMoviesState } from './movies/movies.types';

export interface IRootState {
  frontPageText: string;
  movies: IMoviesState;
}

export enum ModuleNames {
  user = 'user',
  movies = 'movies'
}
