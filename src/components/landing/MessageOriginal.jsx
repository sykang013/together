import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

const StMessageOriginal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  ${getFontStyle('headingL')};
  span {
    ${getFontStyle('ParagraphS')};
    color: var(--gray200);
    margin-top: ${rem(4)};
  }
  .detail {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
    span {
      ${getFontStyle('LabelM')};
    }
    .detail {
      ${getFontStyle('LabelS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    span {
      ${getFontStyle('LabelXL')};
    }
    .detail {
      ${getFontStyle('ParagraphL')};
    }
  }
`;

const MessageOriginal = () => {
  return (
    <StMessageOriginal>
      <h2>티빙에만 있는 재미</h2>
      <span>오리지널 콘텐츠를 만나보세요!</span>
      <span className="detail">차별화된 웰메이드 오리지널 콘텐츠</span>
    </StMessageOriginal>
  );
};

export default MessageOriginal;
