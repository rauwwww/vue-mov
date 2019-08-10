<template>
  <div>
    <MoviesList />
    <h1>CLICK API</h1>
    <button @click="moviesByTitle('test')">Api with param test</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MoviesList from '@/components/movies/MoviesList.vue';
import { ModuleNames } from '@/store/types';
import { MoviesActionKeys } from '../store/movies/movies.actions';
import { store } from '../store';

const OEMDBAPIACTION = [ModuleNames.movies, MoviesActionKeys.fetchMovies].join('/');

@Component({
  components: {
    MoviesList
  }
})
export default class Home extends Vue {
  moviesByTitle(title: string) {
    store.dispatch(OEMDBAPIACTION, title);
  }
}
</script>
