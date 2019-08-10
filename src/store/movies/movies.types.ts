export interface IMoviesState {
  movies: IMovies[];
}

export interface IMovies {
  title: string;
}

export class IOemdbReq {
  private apiParamPrefix: any = {
    imdbId: '&i=',
    movieTitle: '&t=',
    type: '&type=',
    releaseYear: '&y=',
    plot: '&plot=',
    page: '&page='
  };

  public generateReqParams(payload: any) {
    const returnString: any = [];
    // return this.apiReqTypes.keys((el: IOemdbReqPrefix) => el.movieTitle === payload);
    console.log(payload, 'payload');

    const result = Object.keys(payload).map((key) => {
      const reutn = { searchFor: key, val: payload[key] };
      return reutn;
    });

    result.forEach((el) => {
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
    console.log(result, 'mapped obj');
    console.log(returnString.join(''));
  }
  // /**
  //  *
  //  * @param type movieTitle, imdbId, releaseYear, plot
  //  * @param searchString
  //  */
  // reqParam(payload: IOemdbReqFor) {
  //   switch (payload) {
  //     case payload.movieTitle: {
  //       return this.apiParamPrefix.movieTitle + payload.movieTitle;
  //     }
  //     case payload.imdbId: {
  //       return this.apiParamPrefix.imdbId + payload.imdbId;
  //     }
  //     case payload.page: {
  //       return this.apiParamPrefix.page + payload.page;
  //     }
  //     default: {
  //       return this.apiParamPrefix.imdbId + payload.imdbId;
  //     }
  //   }
  // }
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
