import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Svg from '@/components/svg/Svg';
import { getFontStyle, rem } from '@/theme/utils';
import {
  searchDataState,
  searchHistoryState,
  searchKeywordState,
} from '@/store/search/index';
import { useRecoilState, useSetRecoilState } from 'recoil';
import useDebounce from '@/hooks/useDebounce';
import useReadSearchData from '@/firebase/firestore/useReadSearchData';
import Modal from '@/components/modal/Modal';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { func } from 'prop-types';

const StSearchInput = styled.form`
  box-sizing: content-box;
  border-bottom: 3px solid var(--white);
  display: flex;
  justify-content: space-between;
  height: ${rem(24)};
  padding: ${rem(8.5)} 0;

  @media (min-width: 768px) {
    height: ${rem(32)};
    padding: ${rem(12)} 0;
  }

  @media (min-width: 1920px) {
    height: ${rem(57)};
    padding: ${rem(16)} 0;
  }

  input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    color: var(--white);
    border: 0;
    ${getFontStyle('LabelM')}

    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--gray700);
    }

    @media (min-width: 768px) {
      ${getFontStyle('LabelL')}
    }

    @media (min-width: 1920px) {
      ${getFontStyle('LabelXXL')}
    }
  }

  button {
    border: 0;
    background-color: transparent;
  }
`;

const SearchBar = ({ toggleModal }) => {
  const [keywords, setKeywords] = useRecoilState(searchHistoryState);
  const [keyword, setKeyword] = useRecoilState(searchKeywordState);
  const setSearchData = useSetRecoilState(searchDataState);
  const [isGuideModal, setIsGuideModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const toggleGuideModal = () => {
    setIsGuideModal((isGuideModal) => !isGuideModal);
  };

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!keyword) {
      toggleGuideModal();
      return;
    }

    let uuid = self.crypto.randomUUID();
    const newKeyword = {
      id: uuid,
      keyword: keyword,
    };
    setKeywords((keywords) => [...keywords, newKeyword]);
    setSearchData([]);
    toggleModal();
    navigate(`/search?keyword=${keyword}`);
  };

  const { readSearchData, isLoading, error } = useReadSearchData(
    'programs',
    keyword
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
      {isGuideModal && (
        <Modal
          message="검색어를 입력해주세요."
          onClickHandler={toggleGuideModal}
        />
      )}
      <StSearchInput>
        <input
          type="text"
          placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
          value={keyword}
          onChange={onChangeKeyword}
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

SearchBar.propTypes = {
  toggleModal: func,
};
