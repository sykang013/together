import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import CarouselScroll from '@/components/landing/CarouselScroll';

const StScrollSectionOriginal = styled.section`
  /* border: 1px solid pink; */
  padding: var(--paddingL);
`;

const ScrollSectionOriginal = () => {
  return (
    <StScrollSectionOriginal className="landingSectionAnimation">
      <MessageAd
        mainText="티빙에만 있는 재미"
        subText="오리지널 콘텐츠를 만나보세요!"
        detailText="차별화된 웰메이드 오리지널 콘텐츠"
      />
      <CarouselScroll></CarouselScroll>
    </StScrollSectionOriginal>
  );
};

export default ScrollSectionOriginal;
