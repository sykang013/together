import styled from 'styled-components/macro';
import React from 'react';
import { getColor, getFontStyle, rem } from '@/theme/utils';
import ModalPortal from '../modalpotal/ModalPortal';

const StLogoutModal = styled.div`
  width: ${rem(196)};
  height: ${rem(91)};
  background-color: ${getColor('--dark-bg2')};
  border-radius: ${rem(4)};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  p {
    ${getFontStyle('ParagraphS')};
    color: ${getColor('--white')};
    height: ${rem(51)};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: ${rem(73)};
    height: ${rem(19)};
    margin-top: ${rem(10.5)};
    border: transparent;
    background-color: transparent;
    color: ${getColor('--gray300')};
    ${getFontStyle('ParagraphS')};
  }
  @media (min-width: 768px) {
    width: ${rem(295)};
    height: ${rem(110)};
    p {
      height: ${rem(63)};
    }
  }
  @media (min-width: 1920px) {
    width: ${rem(526)};
    height: ${rem(192)};
    p {
      ${getFontStyle('ParagraphL')};
      height: ${rem(110)};
    }
    button {
      ${getFontStyle('ParagraphL')};
      width: ${rem(173)};
      height: ${rem(34)};
    }
  }
`;

const Stbutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button:nth-child(2) {
    border-left: 1px solid ${getColor('--gray400')};
  }
`;

const StOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`;
const LogoutModal = () => {
  return (
    <ModalPortal>
      <StOverlay />
      <StLogoutModal role="dialog">
        <p>로그아웃 하시겠습니까?</p>
        <Stbutton>
          <button>확인</button>
          <button>취소</button>
        </Stbutton>
      </StLogoutModal>
    </ModalPortal>
  );
};

export default LogoutModal;
