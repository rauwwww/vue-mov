<template>
  <div id="parentx" class="m-t-xl">
    <vs-sidebar
      :reduce="reduce"
      :reduce-not-rebound="true"
      :hidden-background="true"
      parent="body"
      default-index="-1"
      color="success"
      class="sidebarx sidebarxcss m-t-xl"
      spacer
      v-model="isActive"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />
      </div>
      <vs-sidebar-group open title="Application">
        <vs-sidebar-item index="1" icon="menu" @click="reduce=!reduce">Toggle Sidebar</vs-sidebar-item>
        <vs-sidebar-item index="5" icon="verified_user">Configurations</vs-sidebar-item>
        <vs-sidebar-group title="Store">
          <vs-sidebar-item index="2.1" icon="store">Store</vs-sidebar-item>
          <vs-sidebar-item index="2.2" icon="nature_people">Nature</vs-sidebar-item>
          <vs-sidebar-item index="2.3" icon="style">Style</vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item index="2" icon="gavel">History</vs-sidebar-item>
        <vs-sidebar-item index="3" icon="https">Security</vs-sidebar-item>
        <vs-sidebar-item index="4" icon="help">Help</vs-sidebar-item>
      </vs-sidebar-group>

      <vs-divider icon="person" position="left">User</vs-divider>

      <vs-sidebar-item index="6" icon="account_box">Profile</vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<style lang="scss" scoped>
.navbar-item {
  color: #4a4a4a !important;
}

.sidebarxcss {
  position: fixed;
  margin-top: 60px;
  z-index: 9999999;
}

.vs-sidebar {
  position: fixed;
  margin-top: 60px;
  z-index: 9999999;
  top: 5 !important;
}
</style>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

@Component({
  name: 'SideMenu'
})
export default class SideMenu extends Vue {
  @Provide() isActive: boolean = true;
  @Provide() notExpand: boolean = false;
  @Provide() reduce: boolean = true;
  @Prop() isSideMenuActive!: boolean;
  // @Prob() activeItem;
}
</script>
