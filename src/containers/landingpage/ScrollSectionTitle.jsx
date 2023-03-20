import styled from 'styled-components/macro';
import MessageTitle from '@/components/landing/MessageTitle';
import IconButton from '@/components/landing/IconButton';
import { rem } from '@/theme/utils';
import { gsap } from 'gsap';

const StScrollSectionTitle = styled.section`
  display: flex;
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
  height: ${rem(600)};
  @media (min-width: 768px) {
    height: ${rem(480)};
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1)
      ),
      url(src/assets/landing-img/bg-tablet.png);
  }
  @media (min-width: 1920px) {
    height: ${rem(980)};
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1)
      ),
      url(src/assets/landing-img/bg-desktop.png);
  }
`;

gsap.fromTo(
  'section',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.2, stagger: { each: 0.1, from: 'start' } }
);

gsap.fromTo(
  '.StMessageTitle span, a ',
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, stagger: { each: 0.1, from: 'start' } }
);

gsap.fromTo(
  '.StMessageAd span',
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, stagger: { each: 0.1, from: 'start' } }
);

const ScrollSectionTitle = () => {
  return (
    <StScrollSectionTitle>
      <MessageTitle />
      <IconButton />
    </StScrollSectionTitle>
  );
};

export default ScrollSectionTitle;
