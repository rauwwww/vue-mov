export interface IMoviesState {
  movies: IMovies[];
}

export interface IMovies {
  title: string;
}

export class IOemdbReq {
  private apiParamPrefix: any = {
    imdbId: 'i=',
    movieTitle: 't=',
    type: 'type=',
    releaseYear: 'y=',
    plot: 'plot='
  };

  // constructor() {
  //   this.imdbId = `?i=`;
  //   this.movieTitle = `?t=`;
  //   //   this.reqPrefixes.movieTitle = 't';
  //   //   (this.reqPrefixes.type = {
  //   //     type: 'type',
  //   //     typeOf: 'movies'
  //   //   }),
  //   //     (this.reqPrefixes.releaseYear = 'y'),
  //   //     (this.reqPrefixes.plot = 'plot'),
  //   //     (this.reqPrefixes.dataReturnType = 'json'),
  //   //     (this.reqPrefixes.page = 10);
  //   // }
  // }

  public generateReqParams(payload: IOemdbReqFor) {
    // return this.apiReqTypes.keys((el: IOemdbReqPrefix) => el.movieTitle === payload);

    if (payload.movieTitle) {
      return this.apiParamPrefix.movieTitle + payload.movieTitle;
    }
  }
  // /**
  //  *
  //  * @param type movieTitle, imdbId, releaseYear, plot
  //  * @param searchString
  //  */
  reqParam(payload: IOemdbReqFor) {
    switch (payload) {
      case payload.movieTitle: {
        return this.apiParamPrefix.movieTitle + payload.movieTitle;
      }
      case payload.imdbId: {
        return this.apiParamPrefix.imdbId + payload.imdbId;
      }
      case payload.page: {
        return this.apiParamPrefix.page + payload.page;
      }
      default: {
        return this.apiParamPrefix.imdbId + payload.imdbId;
      }
    }
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

export interface IOemdbReqTypes {
  type: 'type';
  typeOf: 'movies' | 'series' | 'episodes';
}
