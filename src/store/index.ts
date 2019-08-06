import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import RootState from './state';
import movies from './movies';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: new RootState(),
  mutations,
  actions,
  getters,
  modules: {
    movies
  }
});

export default module.exports;
