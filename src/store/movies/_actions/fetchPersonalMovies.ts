import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import gql from 'graphql-tag';
import { apolloClient } from '@/plugins/vue-apollo';
import { MoviesMutationKeys } from '../movies.mutations';

const userQuery = gql`
  {
    users(order_by: [{ id: desc }]) {
      id
      name
    }
  }
`;
// const query = usersQuery({ query: userQuery });
export default async function fetchMyMovies({ commit }: ActionContext<MoviesState, RootState>) {
  const query = await apolloClient.query({ query: userQuery });
  console.log(query.data);
  console.log(query);

  commit(MoviesMutationKeys.setMovies, query);
  return 'succesfully loaded';
}
