
<template>
  <modal name="CreateListItemModal" :width="400" :height="350">
    <vs-row class="p-md" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h1>Create List</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-select class="m-t-lg" label="Type" v-model="select1">
          <vs-select-item
            :key="item.id"
            :value="item.value"
            :text="item.text"
            v-for="item in selectOptions"
          />
        </vs-select>
      </vs-col>
      <vs-col vs-type="flex" class="m-t-sm" vs-justify="center" vs-align="center" vs-w="12">
        <vs-input class="inputx" placeholder="Name" v-model="name" />
      </vs-col>
      <vs-col class="m-t-md" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-textarea label="Description" v-model="textarea" />
      </vs-col>
    </vs-row>
    <div class="bottom-content p-md">
      <vs-button
        size="large"
        color="success"
        class="m-r-md"
        @click.prevent="createNewListItem()"
      >Add</vs-button>
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
import { store } from '@/store';
import { GlobalActionKeys } from '@/store/actions';

@Component({
  name: 'CreateListItemModal',
  components: {}
})
export default class CreateListItemModal extends BaseModal {
  modalName: string = 'CreateListItemModal';
  select1Normal: string = '';
  select1: string = '2';
  textarea: string = '';
  name: string = '';

  selectOptions: any = [{ text: 'Movies', value: 0 }, { text: 'Articles', value: 1 }, { text: 'Books', value: 3 }];

  createNewListItem() {
    store.dispatch(GlobalActionKeys.createNewListItem, this.selectOptions);
  }
}
</script>