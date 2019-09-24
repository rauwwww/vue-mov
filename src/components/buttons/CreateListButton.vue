<template>
  <div vs-align="center" vs-type="flex" vs-justify="center">
    <vs-button @click.prevent="showCreateList()">
      <vs-icon class="hover p-t-md" icon="playlist_add" size="small" round></vs-icon>
      <h4>New list</h4>
    </vs-button>
  </div>
</template>
<style lang="scss" scoped>
.vs-button {
  border-radius: 0px !important;
  width: 144px !important;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'CreateListButton',
  components: {}
})
export default class CreateListButton extends Vue {
  showCreateList() {
    this.$modal.show('CreateListModal');
  }
}
</script>