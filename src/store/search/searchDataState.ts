import { IPrograms } from '@/types/programs';
import { atom, selector } from 'recoil';

export const searchDataState = atom<IPrograms[]>({
  key: 'searchDataState',
  default: [],
});

export const searchBarDataState = atom<IPrograms[]>({
  key: 'searchBarDataState',
  default: [],
});

export const countSearchDataState = selector<number>({
  key: 'countSearchDataState',
  get: ({ get }) => {
    const data = get(searchDataState);
    return data.length;
  },
});

export const searchTvProgramsState = selector<IPrograms[]>({
  key: 'searchTvProgramsState',
  get: ({ get }) => {
    const searchData = get(searchDataState);

    const tvPrograms = searchData.filter(
      (data) => data.category === 'TV프로그램'
    );

    return tvPrograms;
  },
});

export const searchMoviesState = selector<IPrograms[]>({
  key: 'searchMoviesState',
  get: ({ get }) => {
    const searchData = get(searchDataState);

    const movies = searchData.filter((data) => data.category === '영화');

    return movies;
  },
});
