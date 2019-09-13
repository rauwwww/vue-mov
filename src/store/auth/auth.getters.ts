import { GetterTree } from 'vuex';
import RootState from '../state';
import AuthState from './auth.state';

export enum AuthGetterKeys {}

export const getters: GetterTree<AuthState, RootState> = {};

export default getters;
