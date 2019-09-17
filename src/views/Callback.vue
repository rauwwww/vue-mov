<template>
  <div class="callback">Callback</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { ModuleNames } from '../store/types';
import { store } from '../store';
import { AuthActionKeys } from '../store/auth/auth.actions';

const HANDLEAUTH = [ModuleNames.auth, AuthActionKeys.handleAuthentication].join('/');
const AUTH_DB_INSERT = [ModuleNames.auth, AuthActionKeys.authToDb].join('/');

@Component({
  name: 'Callback',
  components: {}
})
export default class Callback extends Vue {
  async mounted() {
    store
      .dispatch(HANDLEAUTH)
      .then(() => {
        store.dispatch(AUTH_DB_INSERT);
      })
      .catch((err) => {
        console.log(err);
      });

    this.$router.push({ name: 'home' });
  }
}
</script>