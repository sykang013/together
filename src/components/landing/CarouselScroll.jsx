import styled from 'styled-components/macro';

const StCarouselScroll = styled.section`
  /* border: 1px solid red; */
  position: relative;
  overflow: hidden;
  height: 400px;
  @media (min-width: 1000px) {
    height: 501px;
  }
`;

const StScrollContainer = styled.div`
  /* border: 1px solid yellow;
  background-color: blue; */
  object-fit: contain;
  width: contain;
  display: flex;
  height: 400px;
  position: relative;
  left: 50vw;
  @media (min-width: 1000px) {
    height: 501px;
  }
`;

const StImgContainer = styled.div`
  object-fit: contain;
  width: contain;
  display: flex;
  height: 400px;
  position: absolute;
  left: -${278 / 2}px;
  @media (min-width: 1000px) {
    height: 501px;
    left: -${904 / 2}px;
  }
`;

const StImgItem = styled.picture`
  height: 400px;
  min-width: 278px;
  margin-right: 0.8rem;
  @media (min-width: 1000px) {
    height: 501px;
    min-width: 904px;
  }
  img {
    border-radius: 4px;
  }
`;
// const last = document.querySelector('.last')?.offsetLeft;

// console.log(last); //302일땐 857, 768일땐 862, 1200일땐 2746, 1920일땐 2754

// gsap.registerPlugin(ScrollTrigger); //스크롤트리거 플러그인 불러와야함

const CarouselScroll = () => {
  // useLayoutEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: '#landingScrollTrigger',
  //     // start: 'top 30%', //퍼센트도 됨
  //     start: 'top center', //스크롤트리거 대상의 top, 브라우저 뷰포트의 center
  //     end: 'bottom center', //스크롤트리거 대상의 bottom, 브라우저 뷰포트의 center
  //     animation: gsap.fromTo(
  //       '#landingScrollTrigger',
  //       { x: '50vw' },
  //       { x: 'last' }
  //     ),
  //     // pink: true,
  //     scrub: true,
  //     markers: true,
  //   });
  // }, []);
  return (
    <StCarouselScroll className="landingElementAnimation">
      <StScrollContainer>
        <StImgContainer>
          <StImgItem>
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
              src="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              alt="러브캐쳐"
            />
          </StImgItem>
          <StImgItem>
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
              src="src/assets/landing-img/contents-img/org-bomul-mob-and-tabl.png"
              alt="보물찾기"
            />
          </StImgItem>
          <StImgItem>
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-love-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
              src="src/assets/landing-img/contents-img/org-love-mob-and-tabl.png"
              alt="러브캐쳐"
            />
          </StImgItem>
          <StImgItem className="last">
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-mob-and-tabl.png"
              media="(max-width: 999px)"
            />
            <source
              srcSet="src/assets/landing-img/contents-img/org-bomul-desktop.png"
              media="(min-width: 1000px)"
            />
            <img
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
