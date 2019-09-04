<template>
  <div>
    <MoviesList />
    <h1 class="m-t-lg">CLICK API</h1>

    <vs-button
      class="m-t-lg m-r-lg"
      @click="moviesByTitle('test')"
      color="primary"
      type="filled"
    >Api with param test</vs-button>

    <MoviesAdd />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ModuleNames } from '@/store/types';
import { MoviesActionKeys } from '@/store/movies/movies.actions';
import { store } from '@/store';

import gql from 'graphql-tag';

import MoviesList from '@/components/movies/MoviesList.vue';
import MoviesAdd from '@/components/movies/MoviesAdd.vue';

const OEMDBAPIACTION = [ModuleNames.movies, MoviesActionKeys.fetchOemdbMovies].join('/');

@Component({
  components: {
    MoviesList,
    MoviesAdd
  }
})
export default class Home extends Vue {
  moviesByTitle(title: string) {
    store.dispatch(OEMDBAPIACTION, title);
  }
}
</script>
