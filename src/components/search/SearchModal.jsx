import React, { useEffect } from 'react';
import ModalPortal from '@/components/modal/ModalPortal';
import styled from 'styled-components/macro';
import { rem } from '@/theme/utils';
import SearchBar from '@/components/search/SearchBar';
import SearchHistory from '@/components/search/SearchHistory';
import SearchPopular from './SearchPopular';
import { func } from 'prop-types';
import { searchDataState } from '@/store/searchDataState';
import { useRecoilValue } from 'recoil';
import SearchResult from '@/components/search/SearchResult';

const StSearchModal = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: var(--dark-bg1);
  color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  padding: ${rem(58)} ${rem(47)};

  @media (min-width: 768px) {
    padding: ${rem(84)} ${rem(122)} ${rem(52)} ${rem(122)};
  }

  @media (min-width: 1920px) {
    padding: ${rem(152)} ${rem(220)} ${rem(93)} ${rem(220)};
  }
`;

const StSearchModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  justify-content: center;
  height: 100%;
`;

const SearchModal = ({ toggleModal }) => {
  const searchData = useRecoilValue(searchDataState);

  useEffect(() => {
    document.body.style.cssText = `
    overflow:hidden;`;
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, []);
  return (
    <ModalPortal>
      <StSearchModalOverlay onClick={toggleModal} />
      <StSearchModal>
        <SearchBar />
        {searchData.length === 0 && (
          <StSearchContent>
            <StKeyword>
              <SearchHistory />
              <SearchPopular />
            </StKeyword>
          </StSearchContent>
        )}
        {searchData.length > 0 && <SearchResult />}
      </StSearchModal>
    </ModalPortal>
  );
};

export default SearchModal;

SearchModal.propTypes = {
  toggleModal: func,
};
