import { ISearchHistory } from '@/types/search';
import { atom } from 'recoil';

export const searchHistoryState = atom<ISearchHistory[]>({
  key: 'searchHistoryState',
  default: JSON.parse(localStorage.getItem('keywords') || 'null') ?? [],
});
