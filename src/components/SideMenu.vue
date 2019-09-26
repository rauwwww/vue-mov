<template>
  <div v-if="userActiveCollections" id="parentx">
    <vs-sidebar
      :hidden-background="true"
      parent="body"
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="isActive"
    >
      <div class="header-sidebar" slot="header" style="display:block">
        <vs-avatar size="medium" :src="hasProfilePicture" />
      </div>

      <CreateListButton class="padding-temp-fix" />

      <vs-sidebar-group open title="My Lists">
        <vs-sidebar-item
          v-for="item in userMenuTopType"
          :key="item.id"
          :index="item.index"
          :icon="MenuIcons(item)"
          :to="item"
        >{{item}}</vs-sidebar-item>

        <!-- <vs-sidebar-item index="2" icon="menu_book">History</vs-sidebar-item>
        <vs-sidebar-item index="3" icon="subject">Security</vs-sidebar-item>
        <vs-sidebar-item index="4" icon="subject">Code</vs-sidebar-item>-->
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

.con-vs-avatar {
  margin-left: 50px !important;
}

.padding-temp-fix {
  margin-top: -10px !important;
}
</style>


<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import { namespace, Getter } from 'vuex-class';
import { ModuleNames } from '@/store/types';
import { AuthGetterKeys } from '@/store/auth/auth.getters';
import { IAuthProfile } from '@/store/auth/auth.types';
import CreateListButton from './buttons/CreateListButton.vue';
import { store } from '../store';
import { GlobalActionKeys } from '../store/actions';
import { GlobalGetterKeys } from '../store/getters';
import { ICollection } from '../graphql/collections/CollectionTypes';

import _uniq from 'lodash/uniq';
import _map from 'lodash/map';

const AUTH = namespace(ModuleNames.auth);

@Component({
  name: 'SideMenu',
  components: {
    CreateListButton
  }
})
export default class SideMenu extends Vue {
  @AUTH.Getter(AuthGetterKeys.isAuthenticated) isAuthenticated!: boolean;
  @AUTH.Getter(AuthGetterKeys.authProfile) authProfile!: IAuthProfile;
  @AUTH.Getter(AuthGetterKeys.authUserId) authUserId!: IAuthProfile;
  @Getter(GlobalGetterKeys.userCollections) userCollection!: ICollection[];
  @Provide() isActive: boolean = true;
  @Provide() notExpand: boolean = false;
  @Provide() reduce: boolean = true;
  @Provide() userMenuTopType: any = [];
  @Prop() isSideMenuActive!: boolean;

  get hasProfilePicture() {
    const { isAuthenticated, authProfile } = this;

    return isAuthenticated && authProfile.picture ? authProfile.picture : '@/assets/images/profilePh.png';
  }

  get userActiveCollections() {
    this.userMenuTopType = _uniq(_map(this.userCollection, 'type'));

    return true;
  }

  MenuIcons(type: any) {
    switch (type) {
      case 'movies': {
        return 'movie_creation';
      }
      case 'articles': {
        return 'subject';
      }
      case 'books': {
        return 'menu_book';
      }
    }
    // movie_creation
  }
  created() {
    store.dispatch(GlobalActionKeys.fetchUserCollections, this.authUserId);
  }

  // Todo add watcher to append body with the correct with related to sidebar
  // @Watch('reduce')
  // onChildChanged(val: string, oldVal: string) {
  //   console.log(val, oldVal);
  // }
}
</script>
