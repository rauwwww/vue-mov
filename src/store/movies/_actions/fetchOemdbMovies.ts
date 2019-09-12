import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import { IOemdbApi, IOemdbReqFor } from '@/lib/oemdbApiHelper';

export default async function fetchMovies({  }: ActionContext<MoviesState, RootState>, title: IOemdbReqFor): Promise<any> {
  const oemdbReq = new IOemdbApi();
  const testTitle = 'Avatar';

  const payload: IOemdbReqFor = {
    movieTitle: testTitle,
    page: 1,
    type: 'episodes'
  };

  try {
    await oemdbReq.oemdbGet(payload);

    return 'succesfully loaded';
  } catch {
    throw new Error(`error fetching movies`);
  }
}
