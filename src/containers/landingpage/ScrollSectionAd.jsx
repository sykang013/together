import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import CarouselAutoFirst from '@/components/landing/CarouselAutoFirst';
import CarouselAutoSecond from '@/components/landing/CarouselAutoSecond';

const StScrollSectionAd = styled.section`
  /* border: 1px solid yellow; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: var(--paddingL);
  overflow: hidden;
`;

const ScrollSectionAd = () => {
  return (
    <StScrollSectionAd className="landingSectionAnimation">
      <MessageAd />
      <CarouselAutoFirst speed="28s"></CarouselAutoFirst>
      <CarouselAutoSecond speed="26s"></CarouselAutoSecond>
    </StScrollSectionAd>
  );
};

export default ScrollSectionAd;
