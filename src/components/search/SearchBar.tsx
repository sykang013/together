import React, { useEffect } from 'react';
import Svg from '@/components/svg/Svg';
import { StSearchInput } from '@/styles/SearchBarStyles';
import {
  searchBarDataState,
  searchHistoryState,
  searchKeywordState,
} from '@/store/search/index';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import useDebounce from '@/hooks/useDebounce';
import useReadSearchData from '@/firebase/firestore/useReadSearchData';
import Modal from '@/components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import useModal from '@/hooks/useModal';
import StA11yHidden from '../a11yhidden/A11yHidden';
import { modalAtomFamily } from '@/store/modalState';
import { ISearchHistory } from '@/types/search';

const SearchBar = () => {
  const [keywords, setKeywords] = useRecoilState(searchHistoryState);
  const [keyword, setKeyword] = useRecoilState(searchKeywordState);
  const setSearchData = useSetRecoilState(searchBarDataState);

  const isGuideModal = useRecoilValue(modalAtomFamily('search-guide'));
  const { openModal, closeModal } = useModal('search-guide');
  const { toggleModal } = useModal('search');
  const navigate = useNavigate();

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSubmitHandler = () => {
    if (!keyword) {
      openModal();
      return;
    }

    const uuid = self.crypto.randomUUID();
    const newKeyword = {
      id: uuid,
      keyword: keyword,
    };

    if (keywords.length === 10) {
      setKeywords((keywords: ISearchHistory[]) => keywords.slice(0, 9));
    }

    setKeywords((keywords: ISearchHistory[]) => [newKeyword, ...keywords]);
    setSearchData([]);
    toggleModal();
    navigate(`/search?keyword=${keyword}`);
  };

  const { readSearchData, isLoading, error } = useReadSearchData(
    'programs',
    keyword,
    'searchBarDataState'
  );

  useDebounce(
    () => {
      readSearchData();
    },
    300,
    keyword
  );

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  return (
    <>
      {isGuideModal.isOpen && (
        <Modal message="검색어를 입력해주세요." onClickHandler={closeModal} />
      )}
      <StA11yHidden as="label" htmlFor="search">
        검색 키워드
      </StA11yHidden>
      <StSearchInput>
        <input
          type="text"
          id="search"
          placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
          value={keyword || ''}
          onChange={onChangeKeyword}
          autoFocus
        />
        <button onClick={onSubmitHandler}>
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
    </>
  );
};

export default SearchBar;
