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

@Component({
  name: 'MainMenu',
  components: {
    SideMenu
  }
})
export default class MainMenu extends Vue {
  @Provide() search: string = '';
}
</script>