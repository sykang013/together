import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

const StMessageTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  ${getFontStyle('headingM')};
  .sub {
    ${getFontStyle('ParagraphS')};
    color: var(--gray400);
    margin-top: ${rem(4)};
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingL')};
    .sub {
      ${getFontStyle('ParagraphS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    .sub {
      ${getFontStyle('LabelXL')};
    }
  }
`;

const MessageTitle = () => {
  return (
    <StMessageTitle>
      <span className="main">타잉 오리지널 콘텐츠,</span>
      <span className="main">방송, 영화, 해외시리즈까지!</span>
      <span className="main">재미를 플레이해보세요.</span>
      <span className="sub">
        간편하게 가입하고, 원하실 때 해지할 수 있어요.
      </span>
    </StMessageTitle>
  );
};

export default MessageTitle;
