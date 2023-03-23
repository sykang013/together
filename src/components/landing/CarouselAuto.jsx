import styled, { keyframes } from 'styled-components/macro';
import { string } from 'prop-types';
const StCarouselAuto = styled.section`
  position: relative;
  overflow: hidden;
  height: (102+8) px;
  width: 100%;
  @media (min-width: 1000px) {
    height: (264+16) px;
  }
`;

const autoPlayM = keyframes`
  0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-189px * 5));
    }
`;

const autoPlayL = keyframes`
  0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-486px * 5));
    }
`;

const StAutoContainer = styled.div`
  object-fit: contain;
  width: calc(189px * 10);
  display: flex;
  height: (102+8) px;
  position: relative;
  animation: ${autoPlayM} linear infinite;
  animation-duration: ${(props) => props.speed};
  @media (min-width: 1000px) {
    width: calc(486px * 10);
    min-height: (264+16) px;
    animation: ${autoPlayL} linear infinite;
  }
`;

const StImgItem = styled.picture`
  height: (102+8) px;
  min-width: 181px;
  margin: 8px 8px 0 0;
  img {
    border-radius: 4px;
  }
  @media (min-width: 1000px) {
    height: (264+16) px;
    min-width: 470px;
    margin: 16px 16px 0 0;
    img {
      border-radius: 8px;
    }
  }
`;

const CarouselAuto = ({ speed }) => {
  return (
    <StCarouselAuto className="landingElementAnimation">
      <StAutoContainer speed={speed} className="landingAutoContainerAnimation">
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

CarouselAuto.propTypes = {
  /**
   * 문자만 가능합니다. ex)'20s'
   */
  speed: string.isRequired,
};

CarouselAuto.defaultProps = {
  speed: '30s',
};
