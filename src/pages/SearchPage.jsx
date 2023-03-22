import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  countSearchDataState,
  searchKeywordState,
  searchTvProgramsState,
  searchMoviesState,
} from '@/store/search/index';
import useModal from '@/hooks/useModal';
import Carousel from '@/components/search/Carousel';
import useReadSearchData from '@/firebase/firestore/useReadSearchData';
import { StSearchInput } from '@/styles/SearchBarStyles';
import Svg from '@/components/svg/Svg';

const StLayout = styled.div`
  padding: ${rem(20)} ${rem(47)} 0;

  @media (min-width: 768px) {
    padding: ${rem(28)} ${rem(122)} 0;
  }

  @media (min-width: 1920px) {
    padding: ${rem(52)} ${rem(158)} 0;
  }
`;

const StMessage = styled.p`
  text-align: center;
  margin-top: ${rem(50)};
  ${getFontStyle('ParagraphXL')};
`;

const StCarouselLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(30)};
`;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countSearchData = useRecoilValue(countSearchDataState);
  const tvPrograms = useRecoilValue(searchTvProgramsState);
  const movies = useRecoilValue(searchMoviesState);
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  const { openModal } = useModal('search');

  const { readSearchData, isLoading, error } = useReadSearchData(
    'programs',
    searchParams.get('keyword'),
    'searchDataState'
  );

  useEffect(() => {
    setSearchKeyword(searchParams.get('keyword'));
    readSearchData();
  }, [searchParams.get('keyword')]);

  const resultMessage = `'${searchParams.get(
    'keyword'
  )}' 검색 결과가 ${countSearchData}개
        있습니다.`;

  const noMessage = `'${searchParams.get('keyword')}' 검색 결과가 없습니다.`;

  return (
    <>
      <StLayout>
        <StSearchInput onClick={openModal}>
          <input
            type="text"
            placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
            defaultValue={searchKeyword}
          />
          <button>
            <Svg
              id="search-hover"
              width={22}
              height={22}
              tabletW={28}
              tabletH={28}
              desktopW={50}
              desktopH={50}
            />
          </button>
        </StSearchInput>
      </StLayout>
      <StMessage>{countSearchData > 0 ? resultMessage : noMessage}</StMessage>
      <StCarouselLayout>
        {tvPrograms.length > 0 && (
          <Carousel genre="TV프로그램" data={tvPrograms} />
        )}
        {movies.length > 0 && <Carousel genre="영화" data={movies} />}
      </StCarouselLayout>
    </>
  );
};

export default SearchPage;
