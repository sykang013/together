import { Link } from 'react-router-dom'; //Link를 사용하려면 리액트 라우터 돔에서 불러와야한다
import styled from 'styled-components/macro'; //스타일드 컴포넌트 macro
import { getColor, getFontStyle, rem } from '../../theme/utils'; //절대경로@(src) 사용
import { PropTypes } from 'prop-types';

const StMessageTitle = styled.div`
  ${getFontStyle('headingM')}
  span {
    ${getFontStyle('paragraphS')}
  }
  @media (min-width: 768px) {
    width: ${rem(283)};
    height: ${rem(48)};
    ${getFontStyle('headingL')}
    span {
      ${getFontStyle('headingL')}
    }
  }
  @media (min-width: 1920px) {
    width: ${rem(500)};
    height: ${rem(80)};
    ${getFontStyle('headingXXXL')}
  }
`

const MessageTitle = () => {
  return (
    <StMessageTitle>
      <h3>
        타잉 오리지널 콘텐츠, 방송, 영화, 해외시리즈까지! 재미를 플레이해보세요.
      </h3>
      <span>간편하게 가입하고, 원하실 때 해지할 수 있어요.</span>
    </StMessageTitle>
  );
};

export default MessageTitle;
