<template>
  <div>
    <vs-navbar class="nabarx p-md">
      <div slot="title">
        <vs-navbar-title>Hello world</vs-navbar-title>

        <SideMenu class="p-t-sm" />
      </div>
      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
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
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import SideMenu from './SideMenu.vue';

@Component({
  name: 'MainMenu',
  components: {
    SideMenu
  }
})
export default class MainMenu extends Vue {
  @Provide() search: string = '';
  @Provide() showNav: boolean = false;
  @Provide() isActive: boolean = false;

  get isSideMenuActive() {
    console.log(this.isActive);
    return this.isActive != this.isActive;
  }
}
</script>