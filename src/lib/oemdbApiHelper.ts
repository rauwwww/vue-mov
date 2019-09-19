import axios from 'axios';

const apiKey = process.env.VUE_APP_OEMDB_APIKEY;
const oemdbBaseUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`;

export class OemdbApi {
  private apiParamPrefix: any = {
    imdbId: '&i=',
    movieTitle: '&t=',
    type: '&type=',
    releaseYear: '&y=',
    plot: '&plot=',
    page: '&page='
  };

  public async oemdbGet(payload: any) {
    const apiString = await this.generateReqParams(payload);
    const res = await axios.get(oemdbBaseUrl + apiString);
    return res;
  }

  public generateReqParams(payload: any) {
    // Entries replace keys with Entries
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

      if (el.searchFor === IOemdbReqTypes.type) {
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
  type?: 'movies' | 'series' | 'episodes';
  releaseYear?: number;
  plot?: string;
  dataReturnType?: 'json' | 'xml';
  page?: number;
}

export enum IOemdbReqTypes {
  imdbId = 'imdbId',
  movieTitle = 'movieTitle',
  type = 'type',
  releaseYear = 'releaseYear',
  plot = 'plot',
  page = 'page'
}
