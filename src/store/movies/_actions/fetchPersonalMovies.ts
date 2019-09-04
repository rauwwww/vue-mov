import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import gql from 'graphql-tag';
import usersQuery from '@/graphql/Users.gql';

const todoQuery = gql`
  {
    users(order_by: [{ id: desc }]) {
      id
      name
    }
  }
`;

export default async function fetchMyMovies({  }: ActionContext<MoviesState, RootState>) {
  const query1 = await this.$apollo.query({ query: todoQuery });
  console.log(query1);
  console.log(query1);
  console.log(query1);

  return 'succesfully loaded';
}
