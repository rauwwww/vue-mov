
<template>
  <modal name="CreateListItemModal" :width="400" :height="350">
    <vs-row class="p-md" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h1>Create List</h1>
      </vs-col>
      <vs-col class="m-t-lg" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-select label="Type" v-model="createListForm.type">
          <vs-select-item
            :key="item.id"
            :value="item.value"
            :text="item.text"
            v-for="item in selectOptions"
          />
        </vs-select>
      </vs-col>
      <vs-col
        vs-type="flex"
        class="m-t-sm input-width"
        vs-justify="center"
        vs-align="center"
        vs-w="12"
      >
        <vs-input class="inputx" placeholder="Name" name="name" v-model="createListForm.name" />
      </vs-col>
      <vs-col class="m-t-md" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-textarea label="Description" name="description" v-model="createListForm.description" />
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

.con-select {
  width: 100% !important;
}

.vs-input-primary {
  width: 100% !important;
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

  createListForm: any = {
    name: '',
    description: '',
    type: ''
  };

  selectOptions: any = [{ text: 'Movies', value: 'movies' }, { text: 'Articles', value: 'articles' }, { text: 'Books', value: 'books' }];

  createNewListItem() {
    store
      .dispatch(GlobalActionKeys.createNewListItem, this.createListForm)
      .then(() => {
        this.createListForm = {
          name: '',
          description: '',
          select: ''
        };
      })
      .finally(() => {
        this.$modal.hide(this.modalName);
      });
  }
}
</script>