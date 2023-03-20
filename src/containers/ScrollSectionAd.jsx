import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import CarouselAd from '@/components/landing/CarouselAd';

const StScrollSectionAd = styled.section`
  border: 1px solid green;
  @media (min-width: 768px) {
  }
  @media (min-width: 1920px) {
  }
`;

const ScrollSectionAd = () => {
  return (
    <StScrollSectionAd>
      <MessageAd />
      <CarouselAd speed={5000} startImgIndex={0} />
      <CarouselAd speed={4500} startImgIndex={2} />
    </StScrollSectionAd>
  );
};

export default ScrollSectionAd;
