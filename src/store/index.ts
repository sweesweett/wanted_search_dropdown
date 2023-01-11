import { atom, selector } from 'recoil';
import { SearchData } from '../types/search.type';

export const searchData = atom<SearchData[]>({
  key: 'searchData',
  default: [],
});
export const keyword = atom({
  key: 'keyword',
  default: '',
});
