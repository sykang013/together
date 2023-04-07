import styled from 'styled-components/macro';
import { getFontStyle } from '@/theme/utils';
interface IMessageProps {
  mainText: string;
  subText?: string;
  detailText?: string;
}

const StMessageAd = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  padding-bottom: var(--spacingM);
  ${getFontStyle('headingL')};
  span:nth-child(2) {
    ${getFontStyle('ParagraphS')};
    margin-top: var(--spacingXXS);
    color: var(--gray200);
  }
  span:nth-child(3) {
    ${getFontStyle('ParagraphS')};
    margin-top: 0;
    color: var(--gray200);
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
    span:nth-child(2) {
      ${getFontStyle('LabelM')};
    }
    span:nth-child(3) {
      ${getFontStyle('LabelS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    span:nth-child(2) {
      ${getFontStyle('LabelXL')};
    }
    span:nth-child(3) {
      ${getFontStyle('ParagraphL')};
    }
  }
`;

const MessageAd = (props: IMessageProps) => {
  return (
    <StMessageAd>
      <h2 className="landingElementAnimation">{props.mainText}</h2>
      <span className="landingElementAnimation">{props.subText}</span>
      <span className="landingElementAnimation">{props.detailText}</span>
    </StMessageAd>
  );
};

export default MessageAd;

MessageAd.defaultProps = {
  mainText: '메인텍스트 ',
  subText: '서브텍스트를 입력하세요',
  detailText: '자세한 사항을 입력하세요!',
};
