<template>
  <div class="hello">
    <h1>{{ frontPageText }} - MoviesAdd</h1>
    <form @submit.prevent="submit">
      <!-- <input type="text" placeholder="Title" v-model="title" /> -->
      <button type="submit">Submit</button>
    </form>
    <p v-for="user in users" :key="user.id">{{ user }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { GlobalActionKeys } from '../../store/actions';
import { store } from '../../store';

import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ModuleNames } from '../../store/types';
import { MoviesActionKeys } from '../../store/movies/movies.actions';

const FETCH_MOVIES = [ModuleNames.movies, MoviesActionKeys.fetchPersonalMovies].join('/');

@Component
export default class MoviesAdd extends Vue {
  @Getter frontPageText!: string;

  users: any = [];
  director: string = '';
  composer: string = '';
  releaseDate: string = '';

  created() {
    store.dispatch(GlobalActionKeys.fetchRootData);
  }

  async submit() {
    const { users, director, composer, releaseDate } = this;

    const todoQuery = gql`
      {
        users(order_by: [{ id: desc }]) {
          id
          name
        }
      }
    `;

    const query1 = await this.$apollo.query({ query: todoQuery });

    // this.$apollo.query({
    //   query: ADD_MOVIE

    //   // options: {
    //   //   context: {
    //   //     headers: {
    //   //       "x-custom-header: "pancakes"  // this header will reach the server
    //   //     }
    //   //   },
    //   // },
    // });
    // store.dispatch(FETCH_MOVIES).then((res) => {
    //   console.log(res, 'res');
    // });
    console.log(query1);
    return 'success';
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
