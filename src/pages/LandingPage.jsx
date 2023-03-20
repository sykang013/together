import styled from 'styled-components/macro';
import ScrollSectionTitle from '@/containers/landingpage/ScrollSectionTitle';
import ScrollSectionOriginal from '@/containers/landingpage/ScrollSectionOriginal';
import ScrollSectionAd from '@/containers/landingpage/ScrollSectionAd';
import gsap from 'gsap';

const StLandingPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

// 아래는 아직은 필요한 주석입니다.
// gsap.fromTo(
//   'section',
//   { y: 100, opacity: 0 },
//   { y: 0, opacity: 1, duration: 1.2, stagger: { each: 0.1, from: 'start' } }
// );

// gsap.fromTo(
//   '.StMessageTitle span, a ',
//   { y: 20, opacity: 0 },
//   { y: 0, opacity: 1, duration: 0.8, stagger: { each: 0.1, from: 'start' } }
// );

// gsap.fromTo(
//   '.StMessageAd span',
//   { y: 20, opacity: 0 },
//   { y: 0, opacity: 1, duration: 0.8, stagger: { each: 0.1, from: 'start' } }
// );

const LandingPage = () => {
  return (
    <StLandingPage>
      <ScrollSectionTitle />
      <ScrollSectionOriginal />
      <ScrollSectionAd />
    </StLandingPage>
  );
};

export default LandingPage;
