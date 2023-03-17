import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

const StMessageAd = styled.div`
  background: pink;
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

const MessageAd = () => {
  return (
    <StMessageAd>
      <h2>내가 찾던 재미</h2>
      <span>보고 싶은 콘텐츠를 발견하세요!</span>
      <span className="detail">
        최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점
      </span>
    </StMessageAd>
  );
};

export default MessageAd;
