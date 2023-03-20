import styled from 'styled-components/macro';
import { getFontStyle, rem, getColor } from '@/theme/utils';

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

export const StProfileTitle = styled.h3`
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

export const StProfileSubTitle = styled.h4`
  ${getFontStyle('LabelS')};
  text-align: center;
  margin: ${rem(16)} ${rem(0)};
  color: ${getColor('--gray200')};
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
  }
  p {
    ${getFontStyle('ParagraphS')};
    text-align: center;
    margin-top: ${rem(12)};
    color: ${getColor('--gray300')};
    @media (min-width: 768px) {
    }
    @media (min-width: 1920px) {
      ${getFontStyle('ParagraphXL')};
      margin-top: ${rem(16)};
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
    border: 8px solid ${getColor('--primary')};
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
    border: 8px solid ${getColor('--primary')};
  }
`;

export const StProfileButton = styled.button`
  display: block;
  margin: ${rem(32)} auto 0 auto;
  width: 25%;
  aspect-ratio: auto 1/0.2;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.select) return `${getColor('--black')}`;
    else return `${getColor('--gray100')}`;
  }};
  color: ${(props) => {
    if (props.select) return `${getColor('--gray100')}`;
    else return `${getColor('--black')}`;
  }};
  border: 1px solid ${getColor('--gray600')};
  border-radius: 4px;
  padding: ${rem(12)} 0;
  ${getFontStyle('LabelS')};
  @media (min-width: 768px) {
    margin-top: ${rem(44)};
  }
  @media (min-width: 1920px) {
    margin-top: ${rem(66)};
    ${getFontStyle('LabelXL')};
  }
  &: active;
  &:hover {
    background-color: ${(props) => {
      if (props.select) return `${getColor('--gray100')}`;
      else return `${getColor('--black')}`;
    }};
    color: ${(props) => {
      if (props.select) return `${getColor('--black')}`;
      else return `${getColor('--gray100')}`;
    }};
  }
`;
