<template>
  <div class="hello">
    <h1>{{ frontPageText }} - MoviesAdd</h1>
    <form @submit.prevent="submit">
      <input type="text" placeholder="Title" v-model="title" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { GlobalActionKeys } from '../../store/actions';
import { store } from '../../store';

import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';

const ADD_MOVIE = gql`
  mutation addMovie($title: String!, $director: String!, $composer: String!, $release_date: date!) {
    insert_movies(objects: [{ title: $title, director: $director, composer: $composer, release_date: $release_date }]) {
      returning {
        id
      }
    }
  }
`;
@Component
export default class MoviesAdd extends Vue {
  @Getter frontPageText!: string;

  title: string = '';

  created() {
    store.dispatch(GlobalActionKeys.fetchRootData);
  }

  submit() {
    const title = this.title;
    this.$apollo.mutate({
      mutation: ADD_MOVIE,
      variables: {
        title
      },
      refetchQueries: ['getMovies']
    });
    this.title = '';
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
