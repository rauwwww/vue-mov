import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import { oemdbReq } from '@/common/oemdbApiHelper';

export default async function fetchMovies({  }: ActionContext<MoviesState, RootState>, title: string): Promise<any> {
  const tempDataArr: any[] = [];
  try {
    await oemdbReq(title).then((res) => {
      console.log(res);
    });

    return 'loaded cases';
  } catch {
    throw new Error(`error fetching movies`);
  }
}
