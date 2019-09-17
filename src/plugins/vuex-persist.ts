import Vue from 'vue';
import Vuex from 'vuex';

import RootState from '../store/state';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

export const vuexLocalStorage = new VuexPersistence<RootState>({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: (state) => ({
    auth: state.auth
    // keepThisModuleToo: state.keepThisModuleToo
    // getRidOfThisModule: state.getRidOfThisModule (No one likes it.)
  })
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});
