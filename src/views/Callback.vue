<template>
  <div class="callback">Callback</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { ModuleNames } from '../store/types';
import { store } from '../store';
import { AuthActionKeys } from '../store/auth/auth.actions';

const HANDLEAUTH = [ModuleNames.movies, AuthActionKeys.handleAuthentication].join('/');

@Component({
  name: 'Callback',
  components: {}
})
export default class Callback extends Vue {
  mounted() {
    store.dispatch(HANDLEAUTH).then((data) => {
      this.$router.push({ name: 'home' });
    });
  }
}
</script>