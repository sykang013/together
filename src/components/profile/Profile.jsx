import styled from 'styled-components/macro';
import { getFontStyle, rem, getColor } from '@/theme/utils';
import { Link } from 'react-router-dom';

export const StProfileTitle = styled.h3`
  ${getFontStyle('headingM')};
  text-align: center;
  padding-top: ${rem(72)};
  @media (min-width: ${rem(768)}) {
    ${getFontStyle('headingXL')};
    padding-top: ${rem(130)};
  }
  @media (min-width: ${rem(1920)}) {
    ${getFontStyle('headingXXL')};
    padding-top: ${rem(130)};
  }
`;

export const StProfileSubTitle = styled.h4`
  ${getFontStyle('LabelS')};
  text-align: center;
  padding: ${rem(16)} ${rem(0)};
  color: ${getColor('--gray200')};
  @media (min-width: ${rem(768)}) {
    ${getFontStyle('LabelM')};
    padding-top: ${rem(8)};
  }
  @media (min-width: ${rem(1920)}) {
    ${getFontStyle('LabelXL')};
    padding-top: ${rem(20)};
  }
`;

export const StProfileItems = styled.ul`
  display: grid;
  padding: ${rem(16)} ${rem(0)};
  margin: 0 auto;
  width: ${rem(252)};
  height: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${rem(32)};
  @media (min-width: ${rem(768)}) {
    width: ${rem(624)};
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: ${rem(32)};
  }
  @media (min-width: ${rem(1920)}) {
    width: ${rem(1092)};
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: ${rem(52)};
  }
`;

export const StProfileItem = styled.li`
  p {
    ${getFontStyle('ParagraphS')};
    text-align: center;
    margin-top: ${rem(12)};
    color: ${getColor('--gray300')};
    @media (min-width: ${rem(768)}) {
      margin-bottom: ${rem(44)};
    }
    @media (min-width: ${rem(1920)}) {
      ${getFontStyle('ParagraphXL')};
      margin-top: ${rem(16)};
    }
  }
`;

export const StProfileImage = styled(Link)`
  display: block;
  width: ${rem(114)};
  height: ${rem(114)};
  max-width: 100%;
  border-radius: ${rem(4)};
  background-color: white;
  @media (min-width: ${rem(768)}) {
    width: ${rem(132)};
    height: ${rem(132)};
  }
  @media (min-width: ${rem(1920)}) {
    width: ${rem(234)};
    height: ${rem(234)};
  }
  &:hover {
    border: 5px solid ${getColor('--secondary')};
    cursor: pointer;
  }
`;

export const StProfileButton = styled.button`
  display: block;
  margin: ${rem(32)} auto 0 auto;
  width: ${rem(135)};
  height: ${rem(42)};
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
  @media (min-width: ${rem(768)}) {
    margin: 0 auto;
    width: ${rem(156)};
    height: ${rem(50)};
  }
  @media (min-width: ${rem(1920)}) {
    margin: 0 auto;
    width: ${rem(272)};
    height: ${rem(86)};
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
