import React from 'react';
import styled from 'styled-components/macro';
import Svg from '@/components/svg/Svg';
import { getFontStyle, rem } from '@/theme/utils';

const StSearchInput = styled.div`
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

const SearchBar = () => {
  return (
    <StSearchInput>
      <input
        type="text"
        placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
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
  );
};

export default SearchBar;
