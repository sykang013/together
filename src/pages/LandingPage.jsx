import styled from 'styled-components/macro';
import ScrollSectionTitle from '@/containers/landingpage/ScrollSectionTitle';
import ScrollSectionOriginal from '@/containers/landingpage/ScrollSectionOriginal';
import ScrollSectionAd from '@/containers/landingpage/ScrollSectionAd';
import ScrollSectionNow from '@/containers/landingpage/ScrollSectionNow';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

//-------GSAP 스크롤트리거 불러옴
gsap.registerPlugin(ScrollTrigger);
//기본값 설정
gsap.defaults({ ease: 'none', duration: 10 });

const tl = gsap.timeline();
tl.to('.imgContainer', { x: -286 })
  .to('.imgContainer', { x: -572 })
  .to('.imgContainer', { x: -858 });

ScrollTrigger.create({
  animation: tl,
  trigger: '.triggerOriginal',
  start: 'top top',
  end: 'bottom 75%',
  scrub: true,
  // snap: 1,
  pin: true,
  //빠른스크롤시 지연되어보이는것 방지
  anticipatePin: 1,
  markers: true,
});
// gsap.to('.imgContainer', {
//   scrollTrigger: {
//     trigger: '.triggerOriginal',
//     start: 'top top',
//     end: 'bottom 75%',
//     scrub: true,
//     pin: true,
//     markers: true,
//   },
//   x: -231,
//   ease: 'none',
//   duration: 3,
// });

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
