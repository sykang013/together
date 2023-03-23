import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import { rem } from '@/theme/utils';
import CarouselAuto from '@/components/landing/CarouselAuto';

const StScrollSectionAd = styled.section`
  /* border: 1px solid green; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: var(--paddingL);
  overflow: hidden;
`;

const ScrollSectionAd = () => {
  return (
    <StScrollSectionAd>
      <MessageAd
        mainText="내가 찾던 재미"
        subText="보고 싶은 콘텐츠를 발견하세요!"
        detailText="최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점"
      />
      <CarouselAuto></CarouselAuto>
      <CarouselAuto></CarouselAuto>
    </StScrollSectionAd>
  );
};

export default ScrollSectionAd;
