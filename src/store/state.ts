import { IRootState, IQueryResults } from './types';
import { IMoviesState } from './movies/movies.types';
import { IAuthState } from './auth/auth.types';

export default class RootState implements IRootState {
  frontPageText: string;
  movies!: IMoviesState;
  auth!: IAuthState;
  queryResult!: IQueryResults;

  constructor() {
    this.frontPageText = '';
    this.queryResult = {
      err: '',
      success: ''
    };
  }
}
