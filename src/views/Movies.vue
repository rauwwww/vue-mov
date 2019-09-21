<template>
  <div>
    <h1>Movies</h1>

    <vs-button
      class="m-t-lg m-r-lg"
      @click="moviesByTitle('test')"
      color="primary"
      type="filled"
    >Api with param test</vs-button>

    <MoviesList />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ModuleNames } from '@/store/types';
import { MoviesActionKeys } from '@/store/movies/movies.actions';
import { store } from '@/store';

import MoviesList from '@/components/movies/MoviesList.vue';

const OEMDBAPIACTION = [ModuleNames.movies, MoviesActionKeys.fetchOemdbMovies].join('/');

@Component({
  name: 'Movies',
  components: {
    MoviesList
  }
})
export default class Movies extends Vue {
  moviesByTitle(title: string) {
    store.dispatch(OEMDBAPIACTION, title);
  }
}
</script>
