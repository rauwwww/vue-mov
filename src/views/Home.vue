<template>
  <div>
    <h1 class="m-b-lg">Home</h1>
    <NewsHeader />
    <vs-button class="m-t-lg m-r-lg" color="primary" type="filled">SomeCTA</vs-button>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewsHeader from '../components/NewsHeader.vue';

@Component({
  name: 'Home',
  components: {
    NewsHeader
  }
})
export default class Home extends Vue {}
</script>
