import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Callback from '@/views/Callback.vue';

Vue.use(Router);

export const routeCatchall = {
  path: '*',
  redirect: '/home'
};

export const routeHome = {
  path: '/home',
  name: 'home',
  component: Home,
  meta: { display: 'Home', title: 'Frontpage' }
};

export const routeDashboard = {
  path: '/dashboard',
  name: 'dashboard',
  meta: { UserSideBar: true, display: 'Dashboard', title: 'Overview' },
  component: () => import(/* webpackChunkName: "Books" */ '@/views/DashBoard.vue')
};

export const routeUserBooks = {
  path: 'movies/:id',
  name: 'collectionBooks',
  meta: { sideBarUserCollection: true },
  component: () => import(/* webpackChunkName: "Books" */ '@/views/collectiontypes/CollectionBooks.vue')
};

export const routeAbout = {
  path: '/about',
  name: 'about',
  meta: { display: 'About', title: 'About' },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
};

export const routeMovies = {
  path: '/movies',
  name: 'movies',
  meta: { display: 'Movies', title: 'Movies' },
  component: () => import(/* webpackChunkName: "about" */ '@/views/Movies.vue')
};

export const routeCallBack = {
  path: '/callback',
  name: 'callback',
  component: Callback
};

export const routes = [routeHome, routeAbout, routeMovies, routeCallBack, routeCatchall, routeUserBooks, routeDashboard];
