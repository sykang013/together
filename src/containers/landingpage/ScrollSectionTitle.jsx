import { useLayoutEffect } from 'react';
import styled from 'styled-components/macro';
import MessageTitle from '@/components/landing/MessageTitle';
import { rem } from '@/theme/utils';
import { gsap } from 'gsap';
import PrimaryButton from '@/components/landing/PrimaryButton';

const StScrollSectionTitle = styled.section`
  display: flex;
  padding: var(--paddingL);
  padding-top: 20vh;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: top no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    ),
    url(src/assets/landing-img/bg-mobile-modified.png);
  background-size: 100%;
  @media (min-width: 768px) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1)
      ),
      url(src/assets/landing-img/bg-tablet.png);
  }
  @media (min-width: 1920px) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1)
      ),
      url(src/assets/landing-img/bg-desktop.png);
  }
`;

const ScrollSectionTitle = () => {
  // useLayoutEffect(() => {
  //   gsap.fromTo(
  //     '.messageTitle > span, .primaryBtn', //클래스네임 변경 필요
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
    <StScrollSectionTitle>
      <MessageTitle />
      <PrimaryButton>새로워진 타잉을 만나보세요!</PrimaryButton>
    </StScrollSectionTitle>
  );
};

export default ScrollSectionTitle;
