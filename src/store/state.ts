import { IRootState } from './types';
import { IMoviesState } from './movies/movies.types';

export default class RootState implements IRootState {
  frontPageText: string;
  movies!: IMoviesState;

  constructor() {
    this.frontPageText = '';
  }
}
