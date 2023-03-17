import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StCarouselAd = styled.section`
  color: var(--black);
  background: beige;
  img {
    border-radius: 4px;
  }
`;

const CarouselAd = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    rows: 1,
  };
  return (
    <StCarouselAd>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-food-mob-and-tabl.png"
            alt="Slide 1"
          />
        </div>
        <div>
          <h3>2</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-letmein-mob-and-tabl.png"
            alt="Slide 2"
          />
        </div>
        <div>
          <h3>3</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-manager-mob-and-tabl.png"
            alt="Slide 3"
          />
        </div>
        <div>
          <h3>4</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-quiz-mob-and-tabl.png"
            alt="Slide 3"
          />
        </div>
        <div>
          <h3>5</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-shurup-mob-and-tabl.png"
            alt="Slide 3"
          />
        </div>
        <div>
          <h3>6</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-food-mob-and-tabl.png"
            alt="Slide 1"
          />
        </div>
        <div>
          <h3>7</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-letmein-mob-and-tabl.png"
            alt="Slide 2"
          />
        </div>
        <div>
          <h3>8</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-manager-mob-and-tabl.png"
            alt="Slide 3"
          />
        </div>
        <div>
          <h3>9</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-quiz-mob-and-tabl.png"
            alt="Slide 3"
          />
        </div>
        <div>
          <h3>10</h3>
          <img
            src="src/assets/landing-img/contents-img/fun-shurup-mob-and-tabl.png"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </StCarouselAd>
  );
};

export default CarouselAd;
