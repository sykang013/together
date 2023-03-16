import React from 'react';
import ModalPortal from '@/components/modal/ModalPortal';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import SearchBar from '@/components/search/SearchBar';
import SearchHistory from '@/components/search/SearchHistory';
import SearchPopular from './SearchPopular';

const StSearchModal = styled.div`
  background-color: var(--dark-bg1);
  color: var(--white);
  position: absolute;
  left: 0;
  width: 100%;
  height: ${rem(535)};
  padding: ${rem(20)} ${rem(47)};

  @media (min-width: 768px) {
    padding: ${rem(28)} ${rem(122)} ${rem(52)} ${rem(122)};
  }

  @media (min-width: 1920px) {
    height: ${rem(945)};
    padding: ${rem(52)} ${rem(220)} ${rem(93)} ${rem(220)};
    top: ${rem(100)};
  }
`;

const StSearchModalOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  @media (min-width: 1920px) {
    top: ${rem(100)};
  }
  div {
    background-color: rgba(0, 0, 0, 0.5);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StSearchContent = styled.div`
  margin-top: ${rem(40)};
  @media (min-width: 786px) {
    margin-top: ${rem(48)};
  }
  @media (min-width: 1920px) {
    margin-top: ${rem(98)};
  }
`;

const StKeyword = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const SearchModal = () => {
  return (
    <ModalPortal>
      <StSearchModalOverlay>
        <div></div>
      </StSearchModalOverlay>
      <StSearchModal>
        <SearchBar />
        <StSearchContent>
          <StKeyword>
            <SearchHistory />
            <SearchPopular />
          </StKeyword>
        </StSearchContent>
      </StSearchModal>
    </ModalPortal>
  );
};

export default SearchModal;
