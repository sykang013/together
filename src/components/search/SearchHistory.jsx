import React from 'react';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';

const StRecent = styled.div`
  width: 50%;
  padding-right: ${rem(30)};
  border-right: 1px solid var(--gray800);

  button {
    border: 0;
    background-color: transparent;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: ${rem(12)};
  }

  h2 {
    ${getFontStyle('LabelM')};
    color: var(--gray200);
  }

  ul {
    padding-top: ${rem(16)};
    color: var(--gray300);
  }

  li {
    margin-top: ${rem(8)};
    display: flex;
    align-items: center;
    gap: ${rem(16)};
  }

  @media (min-width: 768px) {
    div:first-child {
      flex-direction: row;
      align-items: center;
      gap: ${rem(24)};
    }
  }

  @media (min-width: 1920px) {
    height: ${rem(613)};

    h2 {
      ${getFontStyle('LabelXL')};
    }

    ul {
      padding-top: ${rem(4)};
    }

    li {
      margin-top: ${rem(16)};
    }
  }
`;

const StRemoveAll = styled.button`
  ${getFontStyle('LabelS')};
  color: var(--gray600);
  display: flex;
  align-items: center;
  gap: ${rem(4)};

  @media (min-width: 1920px) {
    ${getFontStyle('LabelL')};
    gap: ${rem(12)};
  }
`;

const StRemove = styled.button`
  display: flex;
  align-items: center;
`;

const StKeyword = styled.button`
  color: inherit;
  ${getFontStyle('LabelS')};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    color: var(--white);
  }

  @media (min-width: 1920px) {
    ${getFontStyle('LabelL')};
  }
`;

const SearchHistory = () => {
  const searchKeyword = ['검색어1', '검색어2', '검색어3'];
  return (
    <StRecent>
      <div>
        <h2>최근 검색어</h2>
        <StRemoveAll>
          모두 지우기
          <Svg
            id="delete-filled"
            desktopW={20}
            desktopH={20}
            width={12}
            height={12}
          />
        </StRemoveAll>
      </div>
      <ul>
        {searchKeyword.map((keyword, index) => (
          <li key={index}>
            <StKeyword>{keyword}</StKeyword>
            <StRemove>
              <Svg
                id="delete-not-filled"
                desktopW={20}
                desktopH={20}
                width={12}
                height={12}
              />
            </StRemove>
          </li>
        ))}
      </ul>
    </StRecent>
  );
};

export default SearchHistory;
