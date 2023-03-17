import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import styled from 'styled-components/macro';
import { rem } from '@/theme/utils';

const CustomSlider = styled(Slider)`
  .slick-slider {
    position: relative;
  }
  .slick-next {
    color: #898989;
    width: ${rem(18.26)};
  }
  .slick-dots {
    position: absolute;
    display: flex;
    width: ${rem(122)};
    justify-content: center;
    top: ${rem(665)};
    left: ${rem(70)};
    margin-top: ${rem(20)};
  }
  .slick-dots button:before {
    color: #898989;
  }
  .slick-dots li.slick-active button:before {
    color: #ffffff;
  }
  .slick-play-button {
    position: absolute;
    bottom: ${rem(20)};
    right: ${rem(20)};
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rem(40)};
    height: ${rem(40)};
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: ${rem(20)};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  .slick-play-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const TestSlider = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="src/assets/landing-img/contents-img/fun-food-mob-and-tabl.png"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="src/assets/landing-img/contents-img/fun-manager-mob-and-tabl.png"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="src/assets/landing-img/contents-img/fun-quiz-mob-and-tabl"
            alt="Slide 3"
          />
        </div>
        {/* 추가적인 슬라이드 */}
      </Slider>
    </div>
  );
};

export default TestSlider;
