<template>
  <div>
    <vs-navbar class="nabarx p-md">
      <div slot="title">
        <vs-navbar-title>Hello world</vs-navbar-title>

        <!-- <SideMenu class="p-t-sm" /> -->
      </div>
      <vs-navbar-item index="0">
        <router-link to="/home" v-slot="{ href, route, navigate, isActive }">
          <a :active="isActive" :href="href" @click="navigate">{{ route.name }}</a>
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/movies" v-slot="{ href, route, navigate, isActive }">
          <a :active="isActive" :href="href" @click="navigate">{{ route.name }}</a>
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item class="p-l-lg" index="1">
        <!-- <router-link to="/login" v-slot="{ href, route, navigate, isActive }">
          <a :active="isActive" :href="href" @click="navigate">{{ route.name }}</a>
        </router-link>-->
        <li class="nav-item">
          <button id="qsLoginBtn" class="btn btn-primary btn-margin" @click.prevent="login">Login</button>
        </li>
      </vs-navbar-item>

      <vs-input icon="search" placeholder="search" v-model="search" />
    </vs-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar-item {
  color: #4a4a4a !important;
}
.is-active {
  display: block;
}
.hover:hover {
  cursor: pointer;
}
</style>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import SideMenu from './SideMenu.vue';
import { AuthActionKeys } from '../store/auth/auth.actions';
import { ModuleNames } from '../store/types';
import { store } from '../store';

const AUTHLOGIN = [ModuleNames.auth, AuthActionKeys.authLogin].join('/');

@Component({
  name: 'MainMenu',
  components: {
    SideMenu
  }
})
export default class MainMenu extends Vue {
  @Provide() search: string = '';

  login() {
    console.log(AUTHLOGIN);
    store.dispatch(AUTHLOGIN).then((res) => {
      console.log('success', res);
    });
  }
}
</script>