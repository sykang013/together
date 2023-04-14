import { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore';
import styled from 'styled-components/macro';
import { ICarouselAutoData } from '@/types/carousel';

const StCarouselScroll = styled.section`
  position: relative;
  overflow: hidden;
  height: 400px;
  @media (min-width: 1000px) {
    height: 504px;
  }
  display: flex;
  min-width: 100%;
`;

const StScrollContainer = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  position: relative;
  left: 50vw;
  @media (min-width: 1000px) {
    height: 504px;
  }
`;

const StImgContainer = styled.div`
  object-fit: contain;
  width: contain;
  display: flex;
  height: 400px;
  position: absolute;
  left: -${(278 + 8) / 2}px;
  @media (min-width: 1000px) {
    height: 504px;
    left: -${(900 + 16) / 2}px;
  }
`;

const StImgItem = styled.picture`
  height: 400px;
  min-width: 278px;
  margin-right: 8px;
  img {
    border-radius: 4px;
  }
  @media (min-width: 1000px) {
    height: 504px;
    min-width: 900px;
    margin-right: 16px;
    img {
      border-radius: 8px;
    }
  }
`;
const CarouselScroll = () => {
  const { readData, data } = useReadData('landing-originals');
  useEffect(() => {
    readData();
  }, []);

  return (
    <StCarouselScroll className="landingElementAnimation sliderSection">
      <StScrollContainer className="landingScrollContainerAnimation">
        <StImgContainer className="landingImgContainerAnimation">
          {(data as ICarouselAutoData[])?.map((data) => {
            return (
              <StImgItem key={data.id} className="imgContainer">
                <source srcSet={data.mobileUrl} media="(max-width: 999px)" />
                <source srcSet={data.desktopUrl} media="(min-width: 1000px)" />
                <img className="imgSelf" src={data.mobileUrl} alt={data.alt} />
              </StImgItem>
            );
          })}
        </StImgContainer>
      </StScrollContainer>
    </StCarouselScroll>
  );
};

export default CarouselScroll;
