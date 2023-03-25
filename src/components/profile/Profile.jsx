import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

export const StLayoutProfile = styled.div`
  width: 78.75%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 81.25%;
  }
  @media (min-width: 1920px) {
    width: 56.86%;
  }
`;

export const StProfileTitle = styled.h2`
  ${getFontStyle('headingM')};
  text-align: center;
  margin-top: ${rem(72)};
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
    margin-top: ${rem(130)};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXL')};
    margin-top: ${rem(130)};
  }
`;

export const StProfileSubTitle = styled.h3`
  ${getFontStyle('LabelS')};
  text-align: center;
  margin: ${rem(16)} ${rem(0)};
  color: var(--gray200);
  @media (min-width: 768px) {
    ${getFontStyle('LabelM')};
    margin-top: ${rem(8)};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('LabelXL')};
    margin-top: ${rem(20)};
  }
`;

export const StProfileItems = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: auto;
  margin-top: ${rem(20)};
  justify-content: ${(props) => {
    if (props.children.length > 3) return 'space-between';
    else return 'space-evenly';
  }};
  @media (min-width: 768px) {
  }
  @media (min-width: 1920px) {
    padding-top: ${rem(44)};
  }
  li {
    width: 45.24%;
    margin-top: ${rem(32)};
    @media (min-width: 768px) {
      width: 21.15%;
      margin: 0;
    }
    @media (min-width: 1920px) {
      width: 21.15%;
    }
    p {
      ${getFontStyle('ParagraphS')};
      text-align: center;
      margin-top: ${rem(12)};
      color: var(--gray300);
      @media (min-width: 768px) {
        ${getFontStyle('ParagraphM')};
      }
      @media (min-width: 1920px) {
        ${getFontStyle('ParagraphXL')};
        margin-top: ${rem(16)};
      }
    }
  }
`;

export const StProfileItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: auto 1/1;
  border-radius: 4px;
`;

export const StProfileImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    border: 4px solid var(--primary);
  }
`;

export const StProfileEditImage = styled.img`
  position: absolute;
  opacity: 0.3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: lime;
  cursor: pointer;
  &:hover {
    border: 4px solid var(--primary);
  }
`;

export const StProfileButton = styled.button`
  display: block;
  margin: ${rem(32)} auto 0 auto;
  width: 50%;
  aspect-ratio: auto 1/0.2;
  background-color: var(--black);
  color: var(--gray100);
  border: 1px solid var(--gray600);
  border-radius: 4px;
  padding: ${rem(12)} 0;
  ${getFontStyle('LabelS')};
  @media (min-width: 768px) {
    margin-top: ${rem(44)};
  }
  @media (min-width: 1920px) {
    margin-top: ${rem(66)};
    width: 75%;
    ${getFontStyle('LabelL')};
  }
  &:hover {
    background-color: var(--primary);
    color: var(--white);
    border: none;
  }
`;

export const StProfileInput = styled.input`
  padding: ${rem(16)};
  margin-top: ${rem(20)};
  border: none;
  border-radius: 4px;
  background-color: var(--dark-bg2);
  color: var(--white);
  width: 100%;
  height: 50%;
  ${getFontStyle('ParagraphM')};
  @media (min-width: 768px) {
    ${getFontStyle('ParagraphL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphXL')};
  }

  &:hover {
    border: 1px solid;
  }
`;

export const StProfileEditButton = styled.button`
  width: 100%;
  margin-top: ${rem(20)};
  background-color: var(--primary);
  color: var(--gray100);
  border-radius: 4px;
  ${getFontStyle('ParagraphM')};
  @media (min-width: 768px) {
    ${getFontStyle('ParagraphL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphXL')};
  }

  &:hover {
    background-color: var(--secondary);
    color: var(--white);
    border: none;
  }
`;
