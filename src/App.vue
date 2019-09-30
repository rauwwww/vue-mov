<template>
  <div id="app">
    <SideMenu />
    <div class="m-l-xxxl" id="content-body">
      <TopMenu />
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view class="m-t-lg m-l-xl m-r-xl page" />
      </transition>
      <CreateListItemModal />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopMenu from '@/components/TopMenu.vue';
import SideMenu from '@/components/SideMenu.vue';
import CreateListItemModal from './components/modals/CreateListItemModal.vue';
import '@/assets/styles/app.scss';

@Component({
  components: {
    TopMenu,
    SideMenu,
    CreateListItemModal
  }
})
export default class App extends Vue {
  prevHeight: any = 0;

  beforeLeave(element: any) {
    this.prevHeight = getComputedStyle(element).height;
  }
  enter(element: any) {
    const { height } = getComputedStyle(element);

    element.style.height = this.prevHeight;

    setTimeout(() => {
      element.style.height = height;
    });
  }
  afterEnter(element: any) {
    element.style.height = 'auto';
  }
}
</script>

