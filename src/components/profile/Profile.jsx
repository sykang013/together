import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

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
