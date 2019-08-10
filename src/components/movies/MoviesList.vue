<template>
  <div>
    <h1 class="p-b-xl" vs-justify="center">Movies Comp</h1>
    <vs-row type="flex" vs-justify="center" vs-align="center" vs-w="10">
      <vs-col
        v-for="mov in this.movies"
        class="m-r-xl"
        :key="mov.id"
        vs-type="flex"
        vs-align="center"
        vs-w="3"
      >
        <vs-card>
          <div slot="header">
            <h3>Hello world !</h3>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
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

const OEMDBAPIACTION = [ModuleNames.movies, MoviesActionKeys.fetchMovies].join('/');
const TITLETEST = 'Avatar';

@Component({
  name: 'MoviesList'
})
export default class MoviesList extends Vue {
  private movies: any = [
    {
      Title: 'something',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'something2',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'something',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'something',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'something',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    },
    {
      Title: 'something',
      ReleaseYear: 1982,
      Plot: 'A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help '
    }
  ];

  beforeCreated() {
    store.dispatch(OEMDBAPIACTION, TITLETEST);
  }
}
</script>
