import { IRootState } from './types';
import { IMoviesState } from './movies/movies.types';
import { IAuthState } from './auth/auth.types';

export default class RootState implements IRootState {
  frontPageText: string;
  movies!: IMoviesState;
  auth!: IAuthState;

  constructor() {
    this.frontPageText = '';
  }
}
