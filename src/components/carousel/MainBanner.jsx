import { useId, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components/macro';
import { rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';
import { func, string } from 'prop-types';

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

  .slick-dots {
    position: absolute;
    display: flex;
    width: ${rem(122)};
    justify-content: start;
    align-items: center;
    bottom: ${rem(60)};
    left: ${rem(60)};
    margin-top: ${rem(20)};
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

const StImage = styled.div`
  width: 100%;
  height: ${rem(800)};
  background: linear-gradient(to bottom, transparent, 90%, var(--black)),
    url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StDescription = styled.span`
  font-family: 'Noto Sans KR';
  font-size: 1.3rem;
  line-height: 1.44;
  color: var(--white);
  font-weight: 300;
  position: absolute;
  bottom: ${rem(100)};
  left: ${rem(65)};
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

  const data = [
    {
      id: useId(),
      imgUrl: `https://image.tving.com/upload/fe/highlight/2023/0324/20230324102359banner_image_url_u.jpg/dims/resize/F_webp,1920`,
      title: '서진이네',
      description: '설명입니다.',
    },
    {
      id: useId(),
      imgUrl: `https://image.tving.com/upload/fe/highlight/2023/0324/20230324102106banner_image_url_u.jpg/dims/resize/F_webp,1920`,
      title: '도시어부',
      description: '설명입니다.',
    },
    {
      id: useId(),
      imgUrl: `https://image.tving.com/upload/fe/highlight/2023/0324/20230324102314banner_image_url_u.jpg/dims/resize/F_webp,1920`,
      title: '거인',
      description: '설명입니다.',
    },
    {
      id: useId(),
      imgUrl: `https://image.tving.com/upload/fe/highlight/2023/0324/20230324102032banner_image_url_u.jpg/dims/resize/F_webp,1920`,
      title: '마더',
      description: '설명입니다.',
    },
  ];

  return (
    <StSlider ref={sliderRef} {...settings}>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <StImage url={data.imgUrl} alt={data.title} />
            <StDescription>{data.description}</StDescription>
          </div>
        );
      })}
    </StSlider>
  );
}
