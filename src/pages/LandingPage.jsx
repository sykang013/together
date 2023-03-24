import styled from 'styled-components/macro';
import ScrollSectionTitle from '@/containers/landingpage/ScrollSectionTitle';
import ScrollSectionOriginal from '@/containers/landingpage/ScrollSectionOriginal';
import ScrollSectionAd from '@/containers/landingpage/ScrollSectionAd';
import gsap from 'gsap';
import ScrollSectionNow from '@/containers/landingpage/ScrollSectionNow';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

//-------GSAP 영역: 타임라인 설정
gsap.registerPlugin(ScrollTrigger);
const slides = gsap.utils.toArray('.imgContainer');
console.log(slides);

const tl = gsap
  .timeline({
    scrollTrigger: {
      //왠지 배열아이템을 포함하고있는 애가 대상이어야할거 같아서 일단 이렇게.
      trigger: '.triggerOriginal',
      start: 'top top',
      //5가 왜 들어가는지 모르겠네 어쨌든 속도인듯
      //이렇게 하면 어쨌든 중첩은 안돼
      end: 'bottom 90%',
      // end: '+=' + 100 * (slides.length - 1) + '5',
      pin: '.triggerOriginal',
      scrub: true,
      markers: true,
    },
  })
  .to(slides, {
    xPercent: -(100 * (slides.length - 1)),
    //왠진 모르겠으나 이게 있어야한다함
    ease: 'none',
  });
//-------GSAP 영역: 한장씩 옆으로 넘겨지는 애니메이션
const images = gsap.utils.toArray('.imgContainer');

const StLandingPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const LandingPage = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      '.landingSectionAnimation',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: { each: 0.1, from: 'start' },
      }
    );
  }, []);
  useLayoutEffect(() => {
    gsap.fromTo(
      '.landingElementAnimation',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: { each: 0.1, from: 'start' },
      }
    );
  }, []);
  //최초 1번 아니고 스크롤 내릴때마다 적용되어야함
  useLayoutEffect(() => {
    images.forEach((image, index) => {
      gsap.from(image, {
        opacity: 0.2,
        scale: 1,
        //왠진 모르겠으나 있어서 넣음
        transformOrigin: 'center center',
        ease: 'none',
        scrollTrigger: {
          //몇번째 인덱스의 슬라이드가 트리거
          trigger: slides[index],
          containerAnimation: tl,
          start: 'left 75%',
          end: 'left 25%',
          markers: { startColor: 'yellow', endColor: 'fuchsia' },
          scrub: true,
        },
      });
    });

    tl.progress(1).progress(0);
  });
  return (
    <StLandingPage>
      <ScrollSectionTitle />
      <ScrollSectionOriginal />
      <ScrollSectionAd />
      <ScrollSectionNow />
    </StLandingPage>
  );
};

export default LandingPage;
