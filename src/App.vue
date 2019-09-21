<template>
  <div id="app">
    <SideMenu />
    <div class="m-l-xxxl" id="content-body">
      <TopMenu />
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

.vs-sidebar {
  max-width: 9rem !important;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopMenu from '@/components/TopMenu.vue';
import SideMenu from '@/components/SideMenu.vue';

@Component({
  components: {
    TopMenu,
    SideMenu
  }
})
export default class App extends Vue {}
</script>

