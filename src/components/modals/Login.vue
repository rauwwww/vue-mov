<template>
  <!-- <div class="centerx">
    <vs-button @click="openConfirm()" color="success" type="gradient">Alert Primary</vs-button>
  </div>-->

  <vs-button v-if="!isAuthenticated" type="line" @click.prevent="login()">Login</vs-button>
  <vs-button v-else type="line" @click.prevent="logout()">Logout</vs-button>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ModuleNames } from '@/store/types';
import { store } from '@/store';

import { AuthActionKeys } from '@/store/auth/auth.actions';
import { AuthGetterKeys } from '@/store/auth/auth.getters';

const AUTH = namespace(ModuleNames.auth);
const AUTH_LOGIN = [ModuleNames.auth, AuthActionKeys.authLogin].join('/');
const AUTH_LOGOUT = [ModuleNames.auth, AuthActionKeys.logOut].join('/');

@Component({
  name: 'Login',
  components: {}
})
export default class Login extends Vue {
  @Provide() activeConfirm: boolean = false;
  @AUTH.Getter(AuthGetterKeys.isAuthenticated) isAuthenticated!: boolean;

  login() {
    store.dispatch(AUTH_LOGIN);
  }
  logout() {
    store.dispatch(AUTH_LOGOUT);
  }
  //    openConfirm(){
  //       this.$vs.dialog({
  //         type:'confirm',
  //         color: 'danger',
  //         title: `Confirm`,
  //         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  //          tempor incididunt ut labore et dolore magna aliqua.',
  //         accept:this.acceptAlert
  //       })
  //       },
}
</script>