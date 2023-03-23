import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

const StMessageTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  ${getFontStyle('headingM')};
  span:last-child {
    ${getFontStyle('ParagraphS')};
    color: var(--gray400);
    margin-top: var(--spacingXXS);
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingL')};
    span:last-child {
      ${getFontStyle('ParagraphS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    span:last-child {
      ${getFontStyle('LabelXL')};
    }
  }
`;

function MessageTitle() {
  return (
    <StMessageTitle>
      <span>타잉 오리지널 콘텐츠,</span>
      <span>방송, 영화, 해외시리즈까지!</span>
      <span>재미를 플레이해보세요.</span>
      <span>간편하게 가입하고, 원하실 때 해지할 수 있어요.</span>
    </StMessageTitle>
  );
}

export default MessageTitle;
