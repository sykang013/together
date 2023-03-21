import styled from 'styled-components/macro';
import ScrollSectionTitle from '@/containers/landingpage/ScrollSectionTitle';
import ScrollSectionOriginal from '@/containers/landingpage/ScrollSectionOriginal';
import ScrollSectionAd from '@/containers/landingpage/ScrollSectionAd';
import gsap from 'gsap';
import ScrollSectionNow from '@/containers/landingpage/ScrollSectionNow';
import { useLayoutEffect } from 'react';

const StLandingPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const LandingPage = () => {
  // useLayoutEffect(() => {
  //   gsap.fromTo(
  //     'section',
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
    <StLandingPage>
      <ScrollSectionTitle />
      <ScrollSectionOriginal />
      <ScrollSectionAd />
      <ScrollSectionNow />
    </StLandingPage>
  );
};

export default LandingPage;
