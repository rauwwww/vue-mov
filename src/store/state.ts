import { IRootState } from './types';

export default class RootState implements IRootState {
  frontPageText: string;

  constructor() {
    this.frontPageText = '';
  }
}
