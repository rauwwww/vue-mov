<template>
  <div>
    <vs-row vs-justify="center">
      <vs-col class="p-l-lg p-r-lg" type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-card actionable class="cardx" fixedHeight>
          <div slot="header">
            <h3>Lorem ipsum</h3>
          </div>
          <div slot="media">
            <img src="@/assets/images/card.png" />
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="primary" type="gradient">View</vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col class="p-r-lg" type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-card actionable class="cardx" fixedHeight>
          <div slot="header">
            <h3>Lorem ipsum</h3>
          </div>
          <div slot="media">
            <img src="@/assets/images/card.png" />
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="primary" type="gradient">View</vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col class="p-r-lg" type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-card actionable class="cardx" fixedHeight>
          <div slot="header">
            <h3>Lorem ipsum!</h3>
          </div>
          <div slot="media">
            <img src="@/assets/images/card.png" />
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="primary" type="gradient">View</vs-button>
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
  name: 'NewsHeader',
  components: {}
})
export default class NewsHeader extends Vue {}
</script>
