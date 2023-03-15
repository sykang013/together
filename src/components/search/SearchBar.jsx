import React from 'react';
import styled from 'styled-components/macro';

import { getFontStyle, rem } from '@/theme/utils';

const StSearchInput = styled.div`
  box-sizing: content-box;
  border-bottom: 3px solid var(--white);
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: ${rem(56)};
    padding: ${rem(12)} 0;
  }
  @media (min-width: 1920px) {
    height: ${rem(57)};
    padding: ${rem(16)} 0;
  }

  div {
    width: ${rem(50)};
    height: ${rem(50)};
  }

  use {
    cursor: pointer;
  }

  input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    color: var(--white);
    border: 0;

    :focus {
      outline: none;
    }

    @media (min-width: 768px) {
    }
    @media (min-width: 1920px) {
      ${getFontStyle('LabelXXL')}
      ::placeholder {
        color: var(--gray700);
      }
    }
  }
`;

const SearchBar = () => {
  return (
    <StSearchInput>
      <input
        type="text"
        placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
      />
      <div>
        <svg viewBox="0 0 40 40">
          <use href="/src/assets/sprite.svg#search-hover" />
        </svg>
      </div>
    </StSearchInput>
  );
};

export default SearchBar;
