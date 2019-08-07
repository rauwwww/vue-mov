import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import { oemdbReq } from '@/common/oemdbApiHelper';
import { IOemdbReq, IOemdbReqPrefixes } from '../movies.types';

export default async function fetchMovies({  }: ActionContext<MoviesState, RootState>, title: any): Promise<any> {
  const tempDataArr: any[] = [];
  const reqEx = new IOemdbReq();
  const apiQuery = reqEx.reqParam(IOemdbReqPrefixes.movieTitle, title);
  console.log(reqEx.reqParam(IOemdbReqPrefixes.movieTitle, title));
  // `t=${title}`;
  try {
    await oemdbReq(apiQuery).then((res) => {
      console.log(res);
      console.log(tempDataArr);
    });

    return 'loaded cases';
  } catch {
    throw new Error(`error fetching movies`);
  }
}
