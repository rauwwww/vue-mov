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

    <!-- <vs-button @click="addTag()" color="dark" class="m-b-xl" type="filled">GraphQL Button</vs-button> -->

    <!-- <ApolloQuery
      :query="gql => gql`
      query users ($name: String!) {
            id
            name
          }
      `"
    >
    The result will automatically updated-->
    <!-- <template v-slot="{ result: { loading, error, data } }">
    Loading-->
    <!-- <div v-if="loading" class="loading apollo">Loading...</div>

    Error-->
    <!--  <div v-else-if="error" class="error apollo">An error occurred</div>

    Result-->
    <!-- <div v-else-if="data" class="result apollo">{{ data }}</div>

    No result-->
    <!-- <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>-->
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

  async addTag() {
    // Call to the graphql mutation
    const result = await this.$apollo.query({
      // Query

      query: gql`
        query($label: String!) {
          users(order_by: { id: asc }) {
            id
            name
          }
        }
      `
    });
  }
}
</script>
