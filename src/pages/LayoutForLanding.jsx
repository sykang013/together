import { getColor, rem } from '@/theme/utils';
import { Outlet } from 'react-router';
import styled from 'styled-components/macro';

const StBaseLayoutForLanding = styled.div`
  font-size: ${rem(16)};
  font-family: 'Pretendard Variable', Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  color: ${getColor('--white')};
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  @media (min-width: 768px) {
    padding: 0;
  }
  @media (min-width: 1900px) {
    padding: 0;
  }
`;

const BaseLayoutForLanding = () => {
  return (
    <StBaseLayoutForLanding>
      <Outlet />
    </StBaseLayoutForLanding>
  );
};

export default BaseLayoutForLanding;
