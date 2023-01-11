import axios from 'axios';
import { FetchData } from '../types/search.type';

class HttpClient {
  constructor(public baseUrl: string) {
    this.baseUrl = baseUrl;
    console.log(this.baseUrl);
  }
  fetchData(url: string, options: object = {}): Promise<FetchData> {
    console.log(this.baseUrl);
    return axios(`${this.baseUrl}${url}`, options);
  }
}
export const httpClient = new HttpClient('http://localhost:4000/');
