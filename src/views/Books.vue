<template>
  <div>
    <ViewTitle />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ViewTitle from '../components/ViewTitle.vue';

@Component({
  name: 'Books',
  components: {
    ViewTitle
  }
})
export default class Books extends Vue {}
</script>
