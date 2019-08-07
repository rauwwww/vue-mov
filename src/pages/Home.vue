<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>CLICK API</h1>
    <button @click="moviesByTitle('test')">Get</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ModuleNames } from '@/store/types';
import { MoviesActionKeys } from '../store/movies/movies.actions';
import { store } from '../store';

const OEMDBAPIACTION = [ModuleNames.movies, MoviesActionKeys.fetchMovies].join('/');

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  moviesByTitle(title: string) {
    store.dispatch(OEMDBAPIACTION, title);
  }
}
</script>
