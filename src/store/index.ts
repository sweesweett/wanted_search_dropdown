import { atom, selector } from 'recoil';
import { sickState } from './sickState';

export const searchValueState = atom<string>({
  key: 'searchValueState',
  default: '',
});
const searchIdx = atom<number>({
  key: 'searchIdx',
  default: 0,
});

export const searchIdxState = selector<number>({
  key: 'searchIdxState',
  get: ({ get }) => {
    const curr = get(searchIdx);
    return curr;
  },
  set: ({ get, set }, value) => {
    const { length } = get(sickState);
    if (value >= 0 && value < length) {
      set(searchIdx, value);
    }
  },
});
