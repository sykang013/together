import React from 'react';
import styled from 'styled-components/macro';
import { getColor, getFontStyle, rem } from '@/theme/utils';
import ModalPortal from '@/components/modal/ModalPortal';

const StPopUp = styled.div`
  width: ${rem(252)};
  height: ${rem(319.75)};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: ${getColor('--white')};
  button {
    border: transparent;
    background-color: transparent;
    margin: auto;
    color: var(--white);
    ${getFontStyle('ParagraphS')};
    width: ${rem(252)};
  }
  button:nth-child(1) {
    width: ${rem(180)};
  }
  button:nth-child(2) {
    width: ${rem(82)};
  }
  @media (min-width: 768px) {
    width: ${rem(328)};
    height: ${rem(407)};
    button {
      height: ${rem(36)};
    }
  }
  @media (min-width: 1920px) {
    width: ${rem(588)};
    height: ${rem(782.29)};

    button {
      height: ${rem(66)};
      ${getFontStyle('ParagraphL')};
    }
    button:nth-child(1) {
      width: ${rem(326)};
    }
    button:nth-child(2) {
      width: ${rem(190)};
    }
  }
`;

const Stbutton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button:nth-child(2) {
    border-left: 1px solid ${getColor('--gray400')};
  }
`;

const Popup = () => {
  return (
    <ModalPortal>
      <StPopUp>
        <picture>
          <source srcSet="src/assets/desktop.png" media="(min-width:1920px" />
          <source srcSet="src/assets/tablet.png" media="(min-width:768px" />
          <img
            src="src/assets/mobile.png"
            alt="기대해 재미 가득 라인업 광고 팝업"
          />
        </picture>
        <Stbutton>
          <button type="button">오늘 하루 보지 않기</button>
          <button type="button">닫기</button>
        </Stbutton>
      </StPopUp>
    </ModalPortal>
  );
};

export default Popup;
