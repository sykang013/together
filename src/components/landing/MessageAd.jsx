import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import { PropTypes } from 'prop-types';

const StMessageAd = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  ${getFontStyle('headingL')};
  .sub {
    ${getFontStyle('ParagraphS')};
    color: var(--gray200);
    margin-top: ${rem(4)};
  }
  .detail {
    margin-top: 0;
    color: var(--gray200);
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
    .sub {
      ${getFontStyle('LabelM')};
    }
    .detail {
      ${getFontStyle('LabelS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    .sub {
      ${getFontStyle('LabelXL')};
    }
    .detail {
      ${getFontStyle('ParagraphL')};
    }
  }
`;

const MessageAd = (props) => {
  return (
    <StMessageAd
      title={props.mainText}
      sub={props.subText}
      detail={props.detailText}
    >
      <span>{props.mainText}</span>
      <span className="sub">{props.subText}</span>
      <span className="detail">{props.detailText}</span>
    </StMessageAd>
  );
};

export default MessageAd;

MessageAd.propTypes = {
  /**
   * 메인, 서브, 디테일 텍스트는 모두 문자열이어야합니다.
   */
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
  detailText: PropTypes.string,
};

MessageAd.defaultProps = {
  mainText: '내가 찾던 재미',
  subText: '보고 싶은 콘텐츠를 발견하세요!',
  detailText:
    '최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점',
};
