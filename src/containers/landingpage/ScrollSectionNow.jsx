import styled from 'styled-components/macro';
import Svg from '@/components/svg/Svg';
import { getFontStyle, rem } from '@/theme/utils';
import PrimaryButton from '@/components/landing/PrimaryButton';

const StScrollSectionNow = styled.section`
  border: 1px solid orange;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: ${rem(160)};
  ${getFontStyle('headingM')}; //추후 클램프 함수로 바꿔보기
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
  }
  .wow {
    width: clamp(${rem(83)}, 50vw, ${rem(279)});
  }
`;

const ScrollSectionNow = () => {
  return (
    <StScrollSectionNow>
      <Svg className="wow" id="logo2" width="100%" height="100%" />
      <span>지금 시작해보세요</span>
      <PrimaryButton>새로워진 타잉을 만나보세요!</PrimaryButton>
    </StScrollSectionNow>
  );
};

export default ScrollSectionNow;
