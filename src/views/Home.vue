<template>
  <div>
    <ViewTitle />
    <NewsHeader />
    <vs-button class="m-t-lg m-r-lg" color="success">SomeCTA</vs-button>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewsHeader from '../components/NewsHeader.vue';
import ViewTitle from '../components/ViewTitle.vue';

@Component({
  name: 'Home',
  components: {
    NewsHeader,
    ViewTitle
  }
})
export default class Home extends Vue {}
</script>
