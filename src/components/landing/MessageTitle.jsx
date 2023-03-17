import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

const StMessageTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  ${getFontStyle('headingM')};
  span {
    ${getFontStyle('ParagraphS')};
    color: var(--gray400);
    margin-top: ${rem(4)};
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
      <h2>
        타잉 오리지널 콘텐츠,
        <br />
        방송, 영화, 해외시리즈까지!
        <br />
        재미를 플레이해보세요.
      </h2>
      <span>간편하게 가입하고, 원하실 때 해지할 수 있어요.</span>
    </StMessageTitle>
  );
};

export default MessageTitle;
