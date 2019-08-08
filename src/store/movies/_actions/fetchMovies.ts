import { ActionContext } from 'vuex';
import MoviesState from '../movies.state';
import RootState from '../../state';
import { oemdbReq } from '@/common/oemdbApiHelper';
import { IOemdbReq, IOemdbReqPrefix } from '../movies.types';

export default async function fetchMovies({  }: ActionContext<MoviesState, RootState>, title: string): Promise<any> {
  // const tempDataArr: any[] = [];
  const reqEx = new IOemdbReq();
  const payload: IOemdbReqPrefix = {
    movieTitle: title
  };
  // const apiQuery = '';
  const apiQuery = reqEx.generateReqParams(payload);
  console.log(reqEx.generateReqParams(payload));
  // `t=${title}`;
  try {
    await oemdbReq(apiQuery).then((res) => {
      // console.log(res);
      // console.log(tempDataArr);
    });

    return 'loaded cases';
  } catch {
    throw new Error(`error fetching movies`);
  }
}
