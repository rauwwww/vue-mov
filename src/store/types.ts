import { IMoviesState } from './movies/movies.types';
import { IAuthState } from './auth/auth.types';

export interface IRootState {
  frontPageText: string;
  movies: IMoviesState;
  auth: IAuthState;
}

export enum ModuleNames {
  user = 'user',
  movies = 'movies',
  auth = 'auth'
}
