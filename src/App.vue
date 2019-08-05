<template>
  <div id="app">
    <MainMenu class="m-b-xl" />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue';

@Component({
  components: {
    MainMenu
  }
})
export default class App extends Vue {}
</script>

