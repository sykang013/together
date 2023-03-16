import React from 'react';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

const StRecent = styled.div`
  width: 100%;
  padding-right: ${rem(30)};
  border-right: 1px solid var(--gray800);

  h2 {
    ${getFontStyle('LabelM')};
    color: var(--gray200);
  }

  div {
    margin-top: ${rem(12)};
    ${getFontStyle('ParagraphS')};
    color: var(--gray300);
  }

  @media (min-width: 1920px) {
    height: ${rem(613)};

    h2 {
      ${getFontStyle('LabelXL')};
    }

    div {
      margin-top: ${rem(20)};
      ${getFontStyle('ParagraphL')};
    }
  }
`;

const SearchHistory = () => {
  return (
    <StRecent>
      <h2>최근 검색어</h2>
      <div>검색 내역이 없습니다.</div>
    </StRecent>
  );
};

export default SearchHistory;
