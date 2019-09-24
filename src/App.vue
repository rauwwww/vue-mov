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
        <router-view class="m-t-lg p-l-sm p-r-sm" />
      </transition>
      <CreateListItemModal />
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopMenu from '@/components/TopMenu.vue';
import SideMenu from '@/components/SideMenu.vue';
import CreateListItemModal from './components/modals/CreateListItemModal.vue';

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

