import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import gql from 'graphql-tag';
import { apolloClient } from '@/plugins/vue-apollo';
import { MoviesMutationKeys } from '../movies.mutations';

const moviesQuery = gql`
  {
    movies {
      title
      id
      director
    }
  }
`;
// const query = usersQuery({ query: userQuery });
export default async function fetchMyMovies({ commit }: ActionContext<MoviesState, RootState>) {
  const query = await apolloClient.query({ query: moviesQuery });

  commit(MoviesMutationKeys.setMovies, query.data);
  return 'succesfully loaded';
}
