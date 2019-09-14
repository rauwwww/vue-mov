import { Module } from 'vuex';

import moviesState from './movies.state';
import actions from './movies.actions';
import getters from './movies.getters';
import mutations from './movies.mutations';

const adminDashModule: Module<moviesState, any> = {
  state: new moviesState(),
  getters,
  mutations,
  actions,
  namespaced: true
};

export default adminDashModule;
