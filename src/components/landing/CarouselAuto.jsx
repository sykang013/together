import styled from 'styled-components/macro';

const StCarouselAuto = styled.section`
  /* border: 1px solid red; */
  position: relative;
  overflow: hidden;
  height: 102px+0.8rem;
  @media (min-width: 1000px) {
    height: 264px+0.8rem;
  }
`;

const StAutoContainer = styled.div`
  /* border: 1px solid yellow; */
  /* background-color: blue; */
  object-fit: contain;
  width: contain;
  display: flex;
  height: 102px+0.8rem;
  position: relative;
  @media (min-width: 1000px) {
    height: 264px+0.8rem;
  }
`;

const StImgItem = styled.picture`
  height: 102px+0.8rem;
  min-width: 181px;
  margin: 0.8rem 0.8rem 0 0;
  @media (min-width: 1000px) {
    height: 264px+0.8rem;
    min-width: 470px+0.8rem;
  }
  img {
    border-radius: 4px;
  }
`;

const CarouselAuto = () => {
  // const tl = gsap.timeline(); //gsap의 타임라인을 실행해서 객체를 tl에 할당
  // //타임라인에 스크롤트리거 엮어쓰기 가능
  // useLayoutEffect(() => {
  //   gsap.to('.landingStAutoContainer', { x: 100 });
  // }, []);
  return (
    <StCarouselAuto className="landingElementAnimation">
      <StAutoContainer>
        <StImgItem>
          <source
            srcSet="src/assets/landing-img/contents-img/fun-food-mob-and-tabl.png"
            media="(max-width: 999px)"
          />
          <source
            srcSet="src/assets/landing-img/contents-img/fun-food-desktop.png"
            media="(min-width: 1000px)"
          />
          <img
            src="src/assets/landing-img/contents-img/fun-food-mob-and-tabl.png"
            alt="푸드크로니클"
          />
        </StImgItem>
        <StImgItem>
          <source
            srcSet="src/assets/landing-img/contents-img/fun-letmein-mob-and-tabl.png"
            media="(max-width: 999px)"
          />
          <source
            srcSet="src/assets/landing-img/contents-img/fun-letmein-desktop.png"
            media="(min-width: 1000px)"
          />
          <img
            src="src/assets/landing-img/contents-img/fun-letmein-mob-and-tabl.png"
            alt="렛미인"
          />
        </StImgItem>
        <StImgItem>
          <source
            srcSet="src/assets/landing-img/contents-img/fun-manager-mob-and-tabl.png"
            media="(max-width: 999px)"
          />
          <source
            srcSet="src/assets/landing-img/contents-img/fun-manager-desktop.png"
            media="(min-width: 1000px)"
          />
          <img
            src="src/assets/landing-img/contents-img/fun-manager-mob-and-tabl.png"
            alt="연예인 매니저로 살아남기"
          />
        </StImgItem>
        <StImgItem>
          <source
            srcSet="src/assets/landing-img/contents-img/fun-quiz-mob-and-tabl.png"
            media="(max-width: 999px)"
          />
          <source
            srcSet="src/assets/landing-img/contents-img/fun-quiz-desktop.png"
            media="(min-width: 1000px)"
          />
          <img
            src="src/assets/landing-img/contents-img/fun-quiz-mob-and-tabl.png"
            alt="유퀴즈온더블럭"
          />
        </StImgItem>
        <StImgItem>
          <source
            srcSet="src/assets/landing-img/contents-img/fun-shurup-mob-and-tabl.png"
            media="(max-width: 999px)"
          />
          <source
            srcSet="src/assets/landing-img/contents-img/fun-shurup-desktop.png"
            media="(min-width: 1000px)"
          />
          <img
            src="src/assets/landing-img/contents-img/fun-shurup-mob-and-tabl.png"
            alt="슈룹"
          />
        </StImgItem>
      </StAutoContainer>
    </StCarouselAuto>
  );
};

export default CarouselAuto;
