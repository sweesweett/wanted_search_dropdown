import axios from 'axios';
import { FetchData } from '../types/search.type';

class HttpClient {
  constructor(public baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  async fetchData(url: string, options: object): Promise<FetchData | undefined> {
    const { data, status } = await axios(`${this.baseUrl}${url}`, options);
    return { data, status };
  }
}
export const httpClient = new HttpClient('http://localhost:4000/');
