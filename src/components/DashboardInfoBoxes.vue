<template>
  <div>
    <vs-row>
      <vs-col class="p-l-lg p-r-lg" type="flex" vs-w="6">
        <vs-card actionable class="cardx" fixedHeight>
          <div slot="header">
            <h3>My Collections</h3>
          </div>
          <vs-row vs-w="12">
            <vs-col :key="index" v-for="index in 4" class="m-t-md p-l-md" vs-w="12">col - 3</vs-col>
          </vs-row>

          <div slot="footer">
            <vs-row>
              <h4>Some text</h4>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col class="p-l-lg p-r-lg" type="flex" vs-w="6">
        <vs-card actionable class="cardx" fixedHeight>
          <div slot="header">
            <h3>Wanted</h3>
          </div>
          <vs-row vs-w="12">
            <vs-col :key="index" v-for="index in 4" class="m-t-md p-l-md" vs-w="12">col - 3</vs-col>
          </vs-row>

          <div slot="footer">
            <vs-row>
              <h4>Some text</h4>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'DashboardInfoBoxes',
  components: {}
})
export default class DashboardInfoBoxes extends Vue {}
</script>
