<template>
  <!-- <div class="centerx">
    <vs-button @click="openConfirm()" color="success" type="gradient">Alert Primary</vs-button>
  </div>-->
  <div>
    <vs-button v-if="!isAuthenticated" type="line" @click.prevent="login()">Login</vs-button>
    <!-- TODO add login icon?? -->
    <!-- <span>
        <vs-icon class="hover p-t-md" icon="vpn_key" size="small" round></vs-icon>
    </span>-->

    <vs-button v-else type="line" @click.prevent="logout()">Logout</vs-button>
  </div>
</template>

<style lang="scss" scoped>
.hover:hover {
  cursor: pointer;
}
</style>

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
}
</script>