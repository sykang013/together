import { atom, selector } from 'recoil';

export const searchDataState = atom({
  key: 'searchDataState',
  default: [],
});

export const searchBarDataState = atom({
  key: 'searchBarDataState',
  default: [],
});

export const countSearchDataState = selector({
  key: 'countSearchDataState',
  get: ({ get }) => {
    const data = get(searchDataState);
    return data.length;
  },
});

export const searchTvProgramsState = selector({
  key: 'searchTvProgramsState',
  get: ({ get }) => {
    const searchData = get(searchDataState);

    const tvPrograms = searchData.filter(
      (data) => data.category === 'TV프로그램'
    );

    return tvPrograms;
  },
});

export const searchMoviesState = selector({
  key: 'searchMoviesState',
  get: ({ get }) => {
    const searchData = get(searchDataState);

    const movies = searchData.filter((data) => data.category === '영화');

    return movies;
  },
});
