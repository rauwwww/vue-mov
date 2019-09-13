<template>
  <div class="centerx">
    <vs-button @click="openConfirm()" color="success" type="gradient">Alert Primary</vs-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({
  name: 'Login',
  components: {}
})
export default class Login extends Vue {
  @Provide() activeConfirm: boolean = false;

  //    openConfirm(){
  //       this.$vs.dialog({
  //         type:'confirm',
  //         color: 'danger',
  //         title: `Confirm`,
  //         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  //          tempor incididunt ut labore et dolore magna aliqua.',
  //         accept:this.acceptAlert
  //       })
  //       },
}
</script>