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

export interface WindowStorage {
  readonly length: number;
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;
  setItem(key: string, data: string): void;
  [key: string]: any;
  [index: number]: string;
}

export interface LocalForage {
  _config?: {
    name: string;
  };
  getItem<T>(key: string): Promise<T>;
  setItem<T>(key: string, data: T): Promise<T>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
  length(): Promise<number>;
  key(keyIndex: number): Promise<string>;
}
