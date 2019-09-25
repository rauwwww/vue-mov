import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'BaseModal',
  components: {}
})
export default class BaseModal extends Vue {
  modalName!: string;

  onClose() {
    //
  }

  closeModal() {
    this.$modal.hide(this.modalName);
    this.onClose();
  }

  beforeClose() {
    this.onClose();
  }
}
