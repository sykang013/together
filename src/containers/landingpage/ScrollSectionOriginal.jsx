import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import CarouselScroll from '@/components/landing/CarouselScroll';

const StScrollSectionOriginal = styled.section`
  border: 1px solid orange;
  padding: var(--paddingL);
  //스크롤트리거를 주려면 실제 스크롤이 길어야함
  padding-bottom: 90vw;
`;

const ScrollSectionOriginal = () => {
  return (
    <StScrollSectionOriginal className="landingSectionAnimation triggerOriginal">
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
