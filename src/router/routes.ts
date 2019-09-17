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
  component: Home
};

export const routeAbout = {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
};

export const routeMovies = {
  path: '/movies',
  name: 'movies',
  component: () => import(/* webpackChunkName: "about" */ '@/views/Movies.vue')
};

export const routeCallBack = {
  path: '/callback',
  name: 'callback',
  component: Callback
};

export const routes = [routeHome, routeAbout, routeMovies, routeCallBack, routeCatchall];
