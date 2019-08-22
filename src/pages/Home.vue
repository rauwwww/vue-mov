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

    <vs-button @click="addTag('test')" color="dark" class="m-b-xl" type="filled">GraphQL Button</vs-button>
    <ApolloExample />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ModuleNames } from '@/store/types';
import { MoviesActionKeys } from '@/store/movies/movies.actions';
import { store } from '@/store';

import gql from 'graphql-tag';

import MoviesList from '@/components/movies/MoviesList.vue';
import ApolloExample from '@/components/ApolloExample.vue';

const OEMDBAPIACTION = [ModuleNames.movies, MoviesActionKeys.fetchOemdbMovies].join('/');

@Component({
  components: {
    MoviesList,
    ApolloExample
  }
})
export default class Home extends Vue {
  newTag: string = 'newTag';

  moviesByTitle(title: string) {
    store.dispatch(OEMDBAPIACTION, title);
  }

  // apollo: {
  //   // Simple query that will update the 'hello' vue property
  //   hello: gql`query {
  //     hello
  //   }`,
  // },

  async addTag() {
    // Call to the graphql mutation
    const result = await this.$apollo.mutate({
      // Query

      mutation: gql`
        mutation($label: String!) {
          addTag(label: $label) {
            id
            label
          }
        }
      `,
      // Parameters
      variables: {
        label: this.newTag
      }
    });
  }
}
</script>
