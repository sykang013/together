import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import ModalPortal from '@/components/modal/ModalPortal';
import propTypes from 'prop-types';

const StPopUp = styled.div`
  width: ${rem(252)};
  height: ${rem(319.75)};
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
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

const StButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button:nth-child(2) {
    border-left: 1px solid var(--gray400);
  }
`;

const Popup = ({ closeModal }) => {
  const dayClose = () => {
    const expiry = new Date();
    const expiryTime = expiry.getTime() + 1000 * 60 * 60 * 24;
    localStorage.setItem('visitCookieExpiry', JSON.stringify(expiryTime));

    closeModal();
  };

  return (
    <ModalPortal>
      <StPopUp role="dialog">
        <picture>
          <source
            srcSet="src/assets/popup/desktop.png"
            media="(min-width:1920px)"
          />
          <source
            srcSet="src/assets/popup/tablet.png"
            media="(min-width:768px)"
          />
          <img
            src="src/assets/popup/mobile.png"
            alt="기대해 재미 가득한 라인업 광고 팝업"
          />
        </picture>
        <StButton>
          <button type="button" onClick={dayClose}>
            오늘 하루 보지 않기
          </button>
          <button type="button" onClick={closeModal}>
            닫기
          </button>
        </StButton>
      </StPopUp>
    </ModalPortal>
  );
};

export default Popup;

Popup.propTypes = {
  closeModal: propTypes.func,
};
