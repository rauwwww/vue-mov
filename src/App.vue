<template>
  <div id="app">
    <MainMenu class="m-b-xl" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/spacing.scss';
@import '@/assets/styles/material-icons.scss';
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

