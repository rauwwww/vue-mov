<template>
  <div id="app">
    <SideMenu />
    <div class="m-l-lgg" id="content-body">
      <MainMenu />
      <router-view />
    </div>
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
import SideMenu from '@/components/SideMenu.vue';

@Component({
  components: {
    MainMenu,
    SideMenu
  }
})
export default class App extends Vue {}
</script>

