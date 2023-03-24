import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';
import { rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';

const CustomSlider = styled(Slider)`
  position: relative;

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
    align-items: center;
    bottom: ${rem(20)};
    left: ${rem(20)};
    margin-top: ${rem(20)};
  }

  .slick-dots button:before {
    color: #898989;
  }

  .slick-dots li.slick-active button:before {
    color: #ffffff;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export default function MainPage() {
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
    setIsPaused(false);
  };

  const pause = () => {
    sliderRef.current.slickPause();
    setIsPaused(true);
  };

  const togglePlayPause = () => {
    if (isPaused) {
      play();
    } else {
      pause();
    }
  };

  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div>
        <button className="slick-pause-button" onClick={togglePlayPause}>
          {isPaused ? (
            <Svg id="play-button" width={15} height={15} />
          ) : (
            <Svg id="pause-button" width={15} height={15} />
          )}
        </button>
        {dots}
      </div>
    ),
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrow: true,
    // prevArrow: (
    //   <button type="button" className="slick-prev">
    //     <Svg id="banner-arrow-left" width={15} height={15} />
    //   </button>
    // ),
    // nextArrow: (
    //   <button type="button" className="slick-next">
    //     <Svg id="banner-arrow-right" width={15} height={15} />
    //   </button>
    // ),
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
    <CustomSlider ref={sliderRef} {...settings}>
      <div>
        <img
          src="src/assets/landing-img/bg-mobile-modified.png"
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          src="src/assets/landing-img/bg-mobile-modified.png"
          alt="Slide 2"
        />
      </div>
      <div>
        <img
          src="src/assets/landing-img/bg-mobile-modified.png"
          alt="Slide 3"
        />
      </div>
    </CustomSlider>
  );
}
