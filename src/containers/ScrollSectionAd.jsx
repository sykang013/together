import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import CarouselAd from '@/components/landing/CarouselAd';
import { rem } from '@/theme/utils';

const StScrollSectionAd = styled.section`
  background: orange;
  @media (min-width: 768px) {
  }
  @media (min-width: 1920px) {
  }
`;

const ScrollSectionAd = () => {
  return (
    <StScrollSectionAd>
      <MessageAd />
      <CarouselAd />
    </StScrollSectionAd>
  );
};

export default ScrollSectionAd;
