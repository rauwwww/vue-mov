import axios from 'axios';

const oemdbBaseUrl = 'http://www.omdbapi.com/?apikey=57472c69&';

export async function oemdbReq(params?: any) {
  console.log(oemdbBaseUrl + params);
  const res = await axios.get(oemdbBaseUrl + params);
  console.log(res);
  return res;
}
