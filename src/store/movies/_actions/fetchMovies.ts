import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';

export default async function fetchMovies({  }: ActionContext<MoviesState, RootState>): Promise<any> {
  const tempDataArr: any[] = [];
  try {
    await tempDataArr;
    return 'loaded cases';
  } catch {
    throw new Error(`error fetching movies`);
  }
}
