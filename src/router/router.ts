import Vue from 'vue';
import Router from 'vue-router';

import { routes } from './routes';
import { store } from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// const waitForStorageToBeReady = async (to, from, next) => {
//   await store.restored;
//   next();
// };
// router.beforeEach(waitForStorageToBeReady);

export default router;
