<template>
  <div>
    <ViewTitle />
    <CollectionTable />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ViewTitle from '../components/ViewTitle.vue';
import CollectionTable from '../components/CollectionTable.vue';

@Component({
  name: 'Articles',
  components: {
    ViewTitle,
    CollectionTable
  }
})
export default class Articles extends Vue {}
</script>
