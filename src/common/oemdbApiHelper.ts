import axios from 'axios';

const oemdbBaseUrl = 'http://www.omdbapi.com/?apikey=57472c69&';

export async function oemdbReq(params?: any) {
  console.log(oemdbBaseUrl + params);

  axios
    .request<ServerData>({
      url: oemdbBaseUrl + params,
      transformResponse: (r: ServerResponse) => r.data
    })
    .then((response) => {
      // `response` is of type `AxiosResponse<ServerData>`
      const data = response;
      console.log(data);
      // `data` is of type ServerData, correctly inferred
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  foo: string;
  bar: number;
}
