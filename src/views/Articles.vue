<template>
  <div>
    <ViewTitle />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ViewTitle from '../components/ViewTitle.vue';

@Component({
  name: 'Articles',
  components: {
    ViewTitle
  }
})
export default class Articles extends Vue {}
</script>
