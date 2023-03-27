import styled from 'styled-components/macro';
import ScrollSectionTitle from '@/containers/landingpage/ScrollSectionTitle';
import ScrollSectionOriginal from '@/containers/landingpage/ScrollSectionOriginal';
import ScrollSectionAd from '@/containers/landingpage/ScrollSectionAd';
import ScrollSectionNow from '@/containers/landingpage/ScrollSectionNow';
import { Helmet } from 'react-helmet-async';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 10 });

const StLandingPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* overflow-y: hidden; */
  /* .pin-spacer {
    display: flex;
  } */
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
        onComplete: () => carouselScrollAnimation(),
      }
    );
    const carouselScrollAnimation = () => {
      gsap.to('.imgContainer', {
        scrollTrigger: {
          trigger: '.triggerOriginal',
          start: 'top top',
          end: 'bottom 80%',
          scrub: true,
          pin: '.triggerOriginal',
          anticipatePin: 1,
          // markers: true,
        },
        x: -858,
      });
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>타잉</title>
        <meta name="description" content="타잉을 소개하는 랜딩 페이지입니다." />
      </Helmet>
      <StLandingPage>
        <ScrollSectionTitle />
        <ScrollSectionOriginal />
        <ScrollSectionAd />
        <ScrollSectionNow />
      </StLandingPage>
    </>
  );
};

export default LandingPage;
