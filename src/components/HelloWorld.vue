<template>
  <div class="hello">
    <h1>{{ frontPageText }}</h1>
    <h2>HELLO WORLD COMP</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { GlobalActionKeys } from '../store/actions';
import { store } from '../store';

@Component
export default class HelloWorld extends Vue {
  @Getter frontPageText!: string;

  created() {
    store.dispatch(GlobalActionKeys.fetchRootData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
