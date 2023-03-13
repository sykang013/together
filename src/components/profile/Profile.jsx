import styled from 'styled-components/macro';
import { getFontStyle, rem, getColor } from '@/theme/utils';

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
