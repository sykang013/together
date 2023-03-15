import styled, { css } from 'styled-components/macro';
import { getColor, getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';
import StA11yHidden from '@/components/a11yhidden/A11yHidden';
import { useState } from 'react';
import SearchModal from '@/components/search/SearchModal';

const StHeader = styled.nav`
  position: relative;
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 38px;
  padding: ${rem(10)} 0;
  @media (min-width: ${rem(768)}) {
    height: 56px;
    padding: ${rem(16)} 0;
  }
  @media (min-width: ${rem(1920)}) {
    height: 100px;
    padding: ${rem(29)} 0;
  }
`;

const StGnb = styled.div`
  display: flex;
  gap: ${rem(14)};
  align-items: center;
  @media (min-width: ${rem(768)}) {
    gap: ${rem(28)};
  }
  @media (min-width: ${rem(1920)}) {
    gap: ${rem(52)};
  }
`;

const StLogo = styled(Link)`
  &::before {
    background: url('/src/assets/sprites.png') no-repeat -208px -282px;
    width: 46px;
    height: 13px;
    display: inline-block;
    content: '';
    @media (min-width: ${rem(768)}) {
      background-position: -208px -318px;
      width: 75px;
      height: 20px;
    }
    @media (min-width: ${rem(1920)}) {
      background-position: -208px -364px;
      width: 132px;
      height: 33px;
    }
  }
`;

const StTab = styled(Link)`
  ${getFontStyle('ParagraphS')}
  text-decoration: none;
  color: ${getColor('--gray200')};
  display: flex;
  align-items: center;
  gap: ${rem(4)};
  @media (min-width: ${rem(768)}) {
    ${getFontStyle('ParagraphM')}
  }
  @media (min-width: ${rem(1920)}) {
    ${getFontStyle('ParagraphL')}
    gap: ${rem(10)};
  }

  &:hover {
    color: ${getColor('--white')};
    ${(props) =>
      props.icon &&
      css`
        &:: before {
          background-position: ${(props) =>
            props.icon === 'live' ? '-98px -532px' : '-1270px -22px'};
          @media (min-width: ${rem(1920)}) {
            background-position: ${(props) =>
              props.icon === 'live' ? '-136px -574px' : '-702px -179px'};
          }
        }
      `}
  }

  ${(props) =>
    props.icon &&
    css`
      &::before {
        background: url('/src/assets/sprites.png') no-repeat;
        background-position: ${(props) =>
          props.icon === 'live' ? '-30px -532px' : '-569px -141px'};
        width: ${(props) => (props.icon === 'live' ? '20px' : '65px')};
        height: ${(props) => (props.icon === 'live' ? '17px' : '15px')};
        display: inline-block;
        content: '';

        @media (min-width: ${rem(1920)}) {
          background-position: ${(props) =>
            props.icon === 'live' ? '-30px -574px' : '-570px -179px'};
          width: ${(props) => (props.icon === 'live' ? '34px' : '111px')};
          height: ${(props) => (props.icon === 'live' ? '27px' : '26px')};
        }
      }
    `};
`;

const StSearch = styled.div`
  background: url('/src/assets/sprites.png') no-repeat -1180px -133px;
  width: 14px;
  height: 15px;
  cursor: pointer;
  @media (min-width: ${rem(768)}) {
    background-position: -584px -705px;
    width: 18px;
    height: 19px;
  }
  @media (min-width: ${rem(1920)}) {
    background-position: -587px -752px;
    width: 29px;
    height: 30px;
  }

  &:hover {
    background-position: -1216px -133px;
    @media (min-width: ${rem(768)}) {
      background-position: -628px -705px;
    }
    @media (min-width: ${rem(1920)}) {
      background-position: -647px -752px;
    }
  }
`;

const StProfile = styled(Link)`
  background: url('/src/assets/sprites.png') no-repeat -1086px -30px;
  width: 18px;
  height: 18px;
  @media (min-width: ${rem(768)}) {
    background-position: -1086px -68px;
    width: 24px;
    height: 24px;
  }
  @media (min-width: ${rem(1920)}) {
    background-position: -1085px -111px;
    width: 42px;
    height: 42px;
  }
`;

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const openSearchModal = () => {
    setIsModal(true);
  };
  return (
    <>
      <StHeader>
        <StGnb>
          <StLogo to="/">
            <StA11yHidden>타잉</StA11yHidden>
          </StLogo>
          <StTab icon="live">실시간</StTab>
          <StTab>TV프로그램</StTab>
          <StTab>영화</StTab>
          <StTab icon="paramount">
            <StA11yHidden>파라마운트</StA11yHidden>
          </StTab>
        </StGnb>
        <StGnb>
          <StSearch tabIndex={0} onClick={openSearchModal}>
            <StA11yHidden>검색</StA11yHidden>
          </StSearch>
          <StProfile>
            <StA11yHidden>프로필</StA11yHidden>
          </StProfile>
        </StGnb>
      </StHeader>
      {isModal && <SearchModal />}
    </>
  );
};

export default Header;
