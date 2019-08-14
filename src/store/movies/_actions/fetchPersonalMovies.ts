import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
// import gql from 'graphql-tag';
import getMoviesQuery from '@/graphql/messages.gql';

export default async function fetchMyMovies({  }: ActionContext<MoviesState, RootState>): Promise<any> {
  const query = globalThis.$apollo.query({ query: getMoviesQuery });
  try {
    console.log(getMoviesQuery);
    console.log(query);

    return 'succesfully loaded';
  } catch {
    throw new Error(`error fetching movies`);
  }
}
