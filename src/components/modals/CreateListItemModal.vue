
<template>
  <modal name="CreateListItemModal" :width="300" :height="300">
    <vs-row class="p-md" vs-align="flex-end" vs-type="flex" vs-justify="space-between" vs-w="12">
      <b>some form</b>
      <h1>HELLO</h1>
      <vs-select class="selectExample" label="Figuras" v-model="select1">
        <vs-select-item
          :key="item.id"
          :value="item.value"
          :text="item.text"
          v-for="item in options1"
        />
      </vs-select>
      <vs-select class="selectExample" label="Figuras" v-model="select2">
        <vs-select-item
          :key="item.id"
          :value="item.value"
          :text="item.text"
          v-for="item in options2"
        />
      </vs-select>
    </vs-row>
    <div class="bottom-content p-md">
      <vs-button size="large" class="m-r-md">Add</vs-button>
      <vs-button size="large" color="danger" @click.prevent="closeModal()">Close</vs-button>
    </div>
  </modal>
</template>

<style lang="scss" scoped>
.bottom-content {
  position: absolute;
  right: 0;
  bottom: 0;
}

.selectExample {
  margin: 10px;
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-select .vs-select {
  width: 100%;
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vs-select {
    width: 100%;
  }
}
</style>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import BaseModal from './BaseModal';

@Component({
  name: 'CreateListItemModal',
  components: {}
})
export default class CreateListItemModal extends BaseModal {
  title: string = 'string';
  modalName: string = 'CreateListItemModal';
  select1Normal: string = '';
  select1: string = '2';

  options1: any = [{ text: 'IT', value: 0 }, { text: 'Blade Runner', value: 2 }, { text: 'Thor Ragnarok', value: 3 }];
  options2: any = [{ text: 'IT', value: 0 }, { text: 'Blade Runner', value: 2 }, { text: 'Thor Ragnarok', value: 3 }];
}
</script>