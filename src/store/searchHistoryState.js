import { atom } from 'recoil';

export const searchHistoryState = atom({
  key: 'searchHistoryState',
  default: [],
});
