<template>
  <div id="parentx">
    <vs-button @click="isActive =! isActive" color="primary" type="filled">Sidebar</vs-button>
    <vs-icon icon="mood" class="hover">
      <span @click="isActive = !isActive"></span>
    </vs-icon>
    <vs-sidebar
      parent="body"
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="isActive"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />

        <h4>
          My Name
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>
      </div>

      <vs-sidebar-item index="1" icon="question_answer">Dashboard</vs-sidebar-item>

      <vs-sidebar-item index="2" icon="gavel">History</vs-sidebar-item>

      <vs-divider icon="person" position="left">User</vs-divider>

      <vs-sidebar-item index="3" icon="verified_user">Configurations</vs-sidebar-item>
      <vs-sidebar-item index="4" icon="account_box">Profile</vs-sidebar-item>
      <vs-sidebar-item index="5">Card</vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>
  </div>

  <!-- <div
          class="navbar-burger navbar-start is-pulled-left"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
  >-->
</template>

<style lang="scss" scoped>
.navbar-item {
  color: #4a4a4a !important;
}
</style>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

@Component({
  name: 'SideMenu'
})
export default class SideMenu extends Vue {
  @Provide() isActive: boolean = false;
  @Prop() isSideMenuActive!: boolean;
}
</script>
