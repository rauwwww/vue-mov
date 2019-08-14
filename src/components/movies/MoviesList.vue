<template>
  <div>
    <h1 class="p-b-xl" vs-justify="center">Movies Comp</h1>
    <vs-row type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col
        v-for="mov in this.movies"
        :key="mov.id"
        vs-type="flex"
        vs-align="center"
        vs-w="4"
        vs-sm="5"
        vs-lg="2 m-r-xl"
      >
        <vs-card>
          <div slot="header">
            <h3>{{ mov.Title }}</h3>
          </div>
          <div>
            <span>{{ mov.Plot }}</span>
          </div>
          <div class="m-t-md">
            <span>
              <strong>{{ mov.ReleaseYear }}</strong>
            </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
              <vs-button color="primary" icon="turned_in_not"></vs-button>
              <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ModuleNames } from '@/store/types';
import { MoviesActionKeys } from '@/store/movies/movies.actions';
import { store } from '@/store';

const OEMDBAPIACTION = [ModuleNames.movies, MoviesActionKeys.fetchOemdbMovies].join('/');
const TITLETEST = 'Avatar';

@Component({
  name: 'MoviesList'
})
export default class MoviesList extends Vue {
  private movies: any = [
    {
      Title: 'Avatar',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'Batman',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'Superman',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'Something',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    }
  ];

  beforeCreated() {
    store.dispatch(OEMDBAPIACTION, TITLETEST);
  }
}
</script>
