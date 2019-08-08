export interface IMoviesState {
  movies: IMovies[];
}

export interface IMovies {
  title: string;
}

// export enum IOEM {
//   prefix = IOemdbReqPrefix.movieTitle,
// }

export class IOemdbReq {
  private apiReqTypes: IOemdbReqPrefixes = {
    movieTitle: '?t=',
    imdbId: '?i='
  };
  // imdbId: string;
  // movieTitle: string;
  // type,
  // releaseYear,
  // plot,
  // dataReturnType,
  // page

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

  public generateReqParams(payload: IOemdbReqPrefix) {
    // return this.apiReqTypes.keys((el: IOemdbReqPrefix) => el.movieTitle === payload);
    if (payload) {
      if (payload.movieTitle) {
        return this.apiReqTypes.movieTitle + payload.movieTitle;
      }
    }
  }
  // /**
  //  *
  //  * @param type movieTitle, imdbId, releaseYear, plot
  //  * @param searchString
  //  */
  // reqParam(type: IOemdbReqPrefixes, searchString: string) {
  //   switch (type) {
  //     case 'movieTitle': {
  //       return this.movieTitle + searchString;
  //     }
  //     case 'imdbId': {
  //       return this.imdbId + searchString;
  //     }
  //     default: {
  //       return this.imdbId + searchString;
  //     }
  //   }
  // }
}

/**
 * @IOemdbReqParams page range 1-100
 */
export interface IOemdbReqPrefix {
  imdbId?: string;
  movieTitle?: string;
  type?: IOemdbReqTypes;
  releaseYear?: string;
  plot?: string;
  dataReturnType?: 'json' | 'xml';
  page?: number;
}

export enum IOemdbReqPrefixes {
  imdbId = '?i=',
  movieTitle = '?t=',
  // type?: IOemdbReqTypes;
  releaseYear = '?y=',
  plot = '?plot='
  // dataReturnType = 'json' | 'xml',
  // page ?: number;
}

// export interface IOemdbReqPrefix {
//   imdbId?: 'i';
//   movieTitle?: 't';
//   type?: IOemdbReqTypes;
//   releaseYear?: 'y';
//   plot?: 'plot';
//   dataReturnType?: 'json' | 'xml';
//   page?: number;
// }

export interface IOemdbReqTypes {
  type: 'type';
  typeOf: 'movies' | 'series' | 'episodes';
}
