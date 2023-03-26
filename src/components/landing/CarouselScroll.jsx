import styled from 'styled-components/macro';

const StCarouselScroll = styled.section`
  /* border: 1px dashed blue; */
  position: relative;
  overflow: hidden;
  height: 400px;
  @media (min-width: 1000px) {
    height: 510px;
  }
  display: flex;
  min-width: 100%;
`;

const StScrollContainer = styled.div`
  /* border: 1px dashed violet; */
  width: 100%;
  display: flex;
  height: 400px;
  position: relative;
  left: 50vw;
  @media (min-width: 1000px) {
    height: 510px;
  }
`;

const StImgContainer = styled.div`
  /* border: 1px dashed yellow; */
  object-fit: contain;
  width: contain;
  display: flex;
  height: 400px;
  position: absolute;
  left: -${(278 + 8) / 2}px;
  @media (min-width: 1000px) {
    height: 510px;
    left: -${(907 + 16) / 2}px;
  }
`;

const StImgItem = styled.picture`
  /* border: 1px solid yellow; */
  height: 400px;
  min-width: 278px;
  margin-right: 8px;
  img {
    border-radius: 4px;
  }
  @media (min-width: 1000px) {
    height: 510px;
    min-width: 907px;
    margin-right: 16px;
    img {
      border-radius: 8px;
    }
  }
`;
const CarouselScroll = () => {
  return (
    <StCarouselScroll className="landingElementAnimation sliderSection">
      <StScrollContainer className="landingScrollContainerAnimation">
        <StImgContainer className="landingImgContainerAnimation">
          <StImgItem className="imgContainer">
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
              className="imgSelf"
              src="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              alt="러브캐쳐"
            />
          </StImgItem>
          <StImgItem className="imgContainer">
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
              className="imgSelf"
              src="src/assets/landing-img/contents-img/org-bomul-mob-and-tabl.png"
              alt="보물찾기"
            />
          </StImgItem>
          <StImgItem className="imgContainer">
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
              className="imgSelf"
              src="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              alt="러브캐쳐"
            />
          </StImgItem>
          <StImgItem className="imgContainer">
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
              className="imgSelf"
              src="src/assets/landing-img/contents-img/org-bomul-mob-and-tabl.png"
              alt="보물찾기"
            />
          </StImgItem>
        </StImgContainer>
      </StScrollContainer>
    </StCarouselScroll>
  );
};

export default CarouselScroll;
