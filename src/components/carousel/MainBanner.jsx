import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components/macro';
import { rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';
import { func, string } from 'prop-types';
import { useReadData } from '@/firebase/firestore';

const StArrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props) =>
    props.direction === 'prev' &&
    css`
      left: 0;
      z-index: 1;
      svg {
        color: var(--gray200);
      }
    `}

  ${(props) =>
    props.direction === 'next' &&
    css`
      right: 0;
      svg {
        color: var(--gray200);
        &:hover {
          color: var(--white);
        }
      }
    `}
  transform: translateY(-50%);
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Arrow = ({ onClick, direction }) => {
  return (
    <StArrow onClick={onClick} direction={direction} className={direction}>
      <Svg
        id={direction === 'prev' ? 'banner-arrow-left' : 'banner-arrow-right'}
        width="3.8rem"
        height="3.8rem"
      />
    </StArrow>
  );
};

Arrow.propTypes = {
  onClick: func,
  direction: string,
};

const StSlider = styled(Slider)`
  .slick-slider {
    position: relative;
  }

  .slick-slide {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      background: linear-gradient(to bottom, transparent, 70%, var(--black));
    }
  }

  .slick-dots {
    position: absolute;
    display: flex;
    width: ${rem(122)};
    justify-content: start;
    align-items: center;
    bottom: 5%;
    left: 4%;
    @media (min-width: 1920px) {
      bottom: 10%;
      left: 5%;
    }
  }

  .slick-dots li {
    margin: 0;
    @media (min-width: 768px) {
      margin: auto;
    }
  }

  .slick-dots button:before {
    color: var(--gray400);
    font-size: 0.8rem;
  }

  .slick-dots li.slick-active button:before {
    color: var(--white);
    opacity: 1;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

const StImage = styled.img`
  object-fit: cover;
`;

const StDescription = styled.span`
  font-family: 'Noto Sans KR';
  font-size: 1.3rem;
  line-height: 1.44;
  color: var(--white);
  font-weight: 300;
  position: absolute;
  bottom: 15%;
  left: 5%;
`;

const MainBanner = () => {
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
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
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

  const { readData, data } = useReadData('banner');

  useEffect(() => {
    readData();
  }, []);

  return (
    <StSlider ref={sliderRef} {...settings}>
      {data?.map((data) => {
        return (
          <div key={data.id}>
            <StImage src={data.imgUrl} alt={data.title} />
            <StDescription>{data.description}</StDescription>
          </div>
        );
      })}
    </StSlider>
  );
};

export default MainBanner;
