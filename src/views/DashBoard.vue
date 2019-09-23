<template>
  <div>
    <!-- WIP -->
    <ViewTitle />
    <DashboardInfoBoxes />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashboardInfoBoxes from '../components/DashboardInfoBoxes.vue';
import ViewTitle from '../components/ViewTitle.vue';

@Component({
  name: 'Dashboard',
  components: {
    DashboardInfoBoxes,
    ViewTitle
  }
})
export default class Dashboard extends Vue {}
</script>
