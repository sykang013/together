import styled, { css } from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchModal from '@/components/search/SearchModal';
import Svg from '@/components/svg/Svg';
import useThrottle from '@/hooks/useThrottle';

const StHeader = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 38px;
  padding: ${rem(10)} ${rem(12)};
  z-index: 9999;
  background: linear-gradient(var(--black), 20%, rgba(0, 0, 0, 0.05));
  transition: backdrop-filter 0.1s ease;

  ${(props) =>
    props.backgroundColor === 'gradient' &&
    css`
      backdrop-filter: blur(100px) brightness(30%) opacity(0);
    `}

  ${(props) =>
    props.backgroundColor === 'black' &&
    css`
      backdrop-filter: blur(100px) brightness(30%) opacity(1);
    `}

  button {
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    height: 56px;
    padding: ${rem(16)} ${rem(40)};
  }
  @media (min-width: 1920px) {
    height: 100px;
    padding: ${rem(29)} ${rem(70)};
  }
`;

const StGnb = styled.div`
  display: flex;
  gap: ${(props) => (props.direction === 'left' ? rem(14) : rem(16))};
  align-items: center;
  @media (min-width: 768px) {
    gap: ${(props) => (props.direction === 'left' ? rem(28) : rem(24))};
  }
  @media (min-width: 1920px) {
    gap: ${(props) => (props.direction === 'left' ? rem(52) : rem(40))};
  }

  button {
    svg {
      color: var(--gray200);
      &:hover {
        color: var(--white);
      }
    }
  }
`;

const StTab = styled(Link)`
  ${getFontStyle('ParagraphS')}
  text-decoration: none;
  color: var(--gray200);
  display: flex;
  align-items: center;
  gap: ${rem(4)};

  &:hover {
    color: var(--white);
  }

  @media (min-width: 768px) {
    ${getFontStyle('ParagraphM')}
  }
  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphL')}
    gap: ${rem(10)};
  }
`;

const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const toggleSearchModal = () => {
    setIsModal((isModal) => !isModal);
  };

  const toggleBackgroundColor = () => {
    if (window.pageYOffset > 0) {
      setIsBlackBackground(true);
    } else {
      setIsBlackBackground(false);
    }
  };

  const throttleScroll = useThrottle(toggleBackgroundColor, 500);

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll);
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

  return (
    <>
      {isModal && <SearchModal toggleModal={toggleSearchModal} />}
      <StHeader backgroundColor={isBlackBackground ? 'black' : 'gradient'}>
        <StGnb direction="left">
          <h1>
            <StTab to="/">
              <Svg
                id="tving-logo"
                width={46}
                height={13}
                tabletW={77}
                tabletH={24}
                desktopW={132}
                desktopH={42}
              />
            </StTab>
          </h1>
          <StTab>
            <Svg
              id="live-default"
              width={20}
              height={20}
              desktopW={34}
              desktopH={34}
            />
            실시간
          </StTab>
          <StTab>TV프로그램</StTab>
          <StTab>영화</StTab>
          <StTab>
            <Svg
              id="paramount-default"
              width={60}
              height={20}
              desktopW={112}
              desktopH={34}
            />
          </StTab>
        </StGnb>
        <StGnb direction="right">
          <button onClick={toggleSearchModal} type="button">
            {!isModal && (
              <Svg
                id="search-default"
                width={18}
                height={18}
                tabletW={24}
                tabletH={24}
                desktopW={40}
                desktopH={40}
              />
            )}
            {isModal && (
              <Svg
                id="cancel-default"
                width={18}
                height={18}
                tabletW={24}
                tabletH={24}
                desktopW={40}
                desktopH={40}
              />
            )}
          </button>
          <button type="button">
            <Svg
              id="profile"
              width={18}
              height={18}
              tabletW={24}
              tabletH={24}
              desktopW={40}
              desktopH={40}
            />
          </button>
        </StGnb>
      </StHeader>
    </>
  );
};

export default Header;
