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
// gsap.defaults({ ease: 'none', duration: 10 });

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
    gsap.to('.imgContainer', {
      scrollTrigger: {
        trigger: '.triggerOriginal',
        start: 'top top',
        end: 'bottom 75%',
        scrub: true,
        pin: '.triggerOriginal',
        markers: true,
      },
      x: -858,
    });
    // const tl = gsap.timeline();
    // tl.to('.imgContainer', { x: -286, duration: 5 })
    //   .to('.imgContainer', { x: -572, duration: 5 })
    //   .to('.imgContainer', { x: -858, duration: 5 });

    // ScrollTrigger.create({
    //   animation: tl,
    //   //애니메이션 스타트포인트의 트리거오리지널 기준으로 계산되는듯...??
    //   //
    //   trigger: '.triggerOriginal',
    //   //
    //   start: 'top top',
    //   end: '+=2000',
    //   // end: 'bottom 75%',
    //   //
    //   scrub: true,
    //   //
    //   pin: '.triggerOriginal',
    //   anticipatePin: 1,
    //   markers: true,
    // });
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
