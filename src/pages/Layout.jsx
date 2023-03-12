import { getFontStyle, getColor, rem } from '@/theme/utils';
import { Outlet } from 'react-router';
import styled from 'styled-components/macro';

export const StBaseLayout = styled.div`
  font-size: ${rem(16)};
  font-family: 'Pretendard Variable', Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  background-color: ${getColor('--black')};
  color: ${getColor('--white')};
  max-width: ${rem(1920)};
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${rem(8)};

  @media (min-width: ${rem(768)}) {
    padding: 0 ${rem(40)};
  }
  @media (min-width: ${rem(1920)}) {
    padding: 0 ${rem(70)};
  }
`;

export default function BaseLayout() {
  return (
    <StBaseLayout>
      <Outlet />
    </StBaseLayout>
  );
}
