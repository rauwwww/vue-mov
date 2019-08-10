export interface IMoviesState {
  movies: IMovies[];
}

export interface IMovies {
  title: string;
}

export class IOemdbApi {
  private apiParamPrefix: any = {
    imdbId: '&i=',
    movieTitle: '&t=',
    type: '&type=',
    releaseYear: '&y=',
    plot: '&plot=',
    page: '&page='
  };

  public generateReqParams(payload: any) {
    const payloadToArr = Object.keys(payload).map((key) => {
      const arrayValues = { searchFor: key, val: payload[key] };
      return arrayValues;
    });

    return this.assignApiPrefix(payloadToArr);
  }

  private assignApiPrefix(arr: any) {
    const returnString: any = [];
    arr.forEach((el: any) => {
      if (el.searchFor === IOemdbReqTypes.movieTitle) {
        returnString.push(this.apiParamPrefix.movieTitle + el.val);
      }

      if (el.searchFor === IOemdbReqTypes.imdbId) {
        returnString.push(this.apiParamPrefix.imdbId + el.val);
      }

      if (el.searchFor === IOemdbReqTypes.plot) {
        returnString.push(this.apiParamPrefix.plot + el.val);
      }

      if (el.searchFor === IOemdbReqTypes.page) {
        returnString.push(this.apiParamPrefix.page + el.val);
      }
    });
    return returnString.join('');
  }
}

/**
 * @imdbId string
 * @movieTitle string
 * @type 'movies' | 'series' | 'episodes'
 * @releaseYear number
 * @plot 'short' | 'full'
 * @page number range 1-100
 * @dataReturnType 'json' | 'xml'
 */
export interface IOemdbReqFor {
  imdbId?: string;
  movieTitle?: string;
  type?: IOemdbReqTypes;
  releaseYear?: number;
  plot?: string;
  dataReturnType?: 'json' | 'xml';
  page?: number;
}

export interface IOemdbReqType {
  type: 'type';
  typeOf: 'movies' | 'series' | 'episodes';
}

export enum IOemdbReqTypes {
  imdbId = 'imdbId',
  movieTitle = 'movieTitle',
  type = 'type',
  releaseYear = 'releaseYear',
  plot = 'plot',
  page = 'page'
}
