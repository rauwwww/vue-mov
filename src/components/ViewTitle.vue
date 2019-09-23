<template>
  <div class="m-b-xl">
    <h1>{{routeTitle}}</h1>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'ViewTitle',
  components: {}
})
export default class ViewTitle extends Vue {
  @Prop() title!: string;

  get routeTitle() {
    return this.$router.currentRoute.meta.title;
  }
}
</script>
