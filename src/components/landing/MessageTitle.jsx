import { Link } from 'react-router-dom'; //Link를 사용하려면 리액트 라우터 돔에서 불러와야한다
import styled from 'styled-components/macro'; //스타일드 컴포넌트 macro
import { getColor, getFontStyle, rem } from '../../theme/utils'; //절대경로@(src) 사용
import { PropTypes } from 'prop-types';

const StMessageTitle = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  ${getFontStyle('headingM')};
  span {
    ${getFontStyle('ParagraphS')};
    color: var(--gray400);
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingL')};
    span {
      ${getFontStyle('ParagraphS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    span {
      ${getFontStyle('LabelXL')};
    }
  }
`;

const MessageTitle = () => {
  return (
    <StMessageTitle>
      <h3>
        타잉 오리지널 콘텐츠,<br/>방송, 영화, 해외시리즈까지!<br/>재미를 플레이해보세요.
      </h3>
      <span>간편하게 가입하고, 원하실 때 해지할 수 있어요.</span>
    </StMessageTitle>
  );
};

export default MessageTitle;
