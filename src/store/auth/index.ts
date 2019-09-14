import { Module } from 'vuex';

import authState from './auth.state';
import actions from './auth.actions';
import getters from './auth.getters';
import mutations from './auth.mutations';

const adminDashModule: Module<authState, any> = {
  state: new authState(),
  getters,
  mutations,
  actions,
  namespaced: true
};

export default adminDashModule;
