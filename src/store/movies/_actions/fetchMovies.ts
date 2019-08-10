import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import { IOemdbApi, IOemdbReqFor } from '@/common/oemdbApiHelper';

export default async function fetchMovies({  }: ActionContext<MoviesState, RootState>, title: IOemdbReqFor): Promise<any> {
  const oemdbReq = new IOemdbApi();
  const testTitle = 'Avatar';

  const payload: IOemdbReqFor = {
    movieTitle: testTitle,
    page: 1
  };
  const generateApiReq = oemdbReq.generateReqParams(payload);

  try {
    await oemdbReq.oemdbGet(generateApiReq);

    return 'succesfully loaded';
  } catch {
    throw new Error(`error fetching movies`);
  }
}
