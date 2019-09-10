<template>
  <div class="hello">
    <h1 class="m-t-lg">MoviesList</h1>

    <p class="m-t-lg" v-for="mov in movies" :key="mov.id">{{ mov }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import { GlobalActionKeys } from '../../store/actions';
import { store } from '../../store';

import { ModuleNames } from '../../store/types';
import { MoviesActionKeys } from '../../store/movies/movies.actions';
import { MoviesGetterKeys } from '../../store/movies/movies.getters';
import { IMovies } from '../../store/movies/movies.types';

const MOVIES_NAMESPACE = namespace(ModuleNames.movies);
const FETCH_MOVIES = [ModuleNames.movies, MoviesActionKeys.fetchUserMovies].join('/');

@Component({
  name: 'MoviesList'
})
export default class MoviesList extends Vue {
  @Getter frontPageText!: string;
  @MOVIES_NAMESPACE.Getter(MoviesGetterKeys.moviesAll) movies!: IMovies;

  users: any = [];
  director: string = '';
  composer: string = '';
  releaseDate: string = '';

  created() {
    store.dispatch(GlobalActionKeys.fetchRootData);
    store.dispatch(FETCH_MOVIES);
  }

  beforeRouteEnter(to: any, from: any, next: any) {
    console.log('fetched');
    store.dispatch(FETCH_MOVIES).then(() => {
      next();
    });
  }
}
</script>

