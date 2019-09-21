<template>
  <div>
    <vs-navbar class="nabarx p-md">
      <vs-navbar-item index="0">
        <router-link to="/home" v-slot="{ href, route, navigate, isActive }">
          <a :active="isActive" type="line" :href="href" @click="navigate">{{ route.name }}</a>
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/movies" v-slot="{ href, route, navigate, isActive }">
          <a class :active="isActive" :href="href" @click="navigate">{{ route.name }}</a>
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item class="p-l-lg p-r-lg" index="2">
        <login />
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

.checkbox-true {
  display: none;
}

@media screen and (max-width: 800px) {
  .vs-navbar {
    display: block;
    padding: 0.8rem;
  }
}
</style>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import SideMenu from './SideMenu.vue';
import Login from './modals/Login.vue';

@Component({
  name: 'TopMenu',
  components: {
    SideMenu,
    Login
  }
})
export default class TopMenu extends Vue {
  @Provide() search: string = '';
  isSideBarActive: boolean = false;
  colorx = '#1db952';
  indexActive = 0;
  @Provide() activeItem: number = 0;
  @Provide() isActive: boolean = true;

  toggleSideMenu() {
    console.log(this.isSideBarActive);
    return (this.isSideBarActive = !this.isSideBarActive);
  }
}
</script>

