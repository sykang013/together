import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import CarouselScroll from '@/components/landing/CarouselScroll';

const StScrollSectionOriginal = styled.section`
  border: 1px solid pink;
  @media (min-width: 768px) {
  }
  @media (min-width: 1920px) {
  }
`;

const ScrollSectionOriginal = () => {
  // useLayoutEffect(() => {
  //   gsap.fromTo(
  //     '.messageTitle > span, .primaryBtn', //클래스 네임 변경 필요
  //     { y: 100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.2,
  //       stagger: { each: 0.1, from: 'start' },
  //     }
  //   );
  // }, []);
  return (
    <StScrollSectionOriginal>
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
