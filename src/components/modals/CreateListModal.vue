
<template>
  <modal name="CreateListModal" :width="300" :height="300">
    <vs-row class="p-md" vs-align="flex-end" vs-type="flex" vs-justify="space-between" vs-w="12">
      <a @click.prevent="closeDialog()">
        <h2>Create List</h2>
        <b>some form</b>
      </a>
    </vs-row>
    <div class="bottom-content p-md">
      <vs-button class="m-r-md">Add</vs-button>
      <vs-button color="danger" @click.prevent="closeModal()">Close</vs-button>
    </div>
  </modal>
</template>

<style lang="scss" scoped>
.bottom-content {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import BaseModal from './BaseModal';

@Component({
  name: 'CreateListModal',
  components: {}
})
export default class CreateListModal extends BaseModal {
  title: string = 'string';
  modalName: string = 'CreateListModal';
}
</script>