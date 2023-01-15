import { atom } from 'recoil';
import { SickTypes } from '../types/sick.type';

export const sickState = atom<SickTypes[]>({
  key: 'sickState',
  default: [],
});
