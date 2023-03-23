import Slider from 'react-slick';
import styled, { css } from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getFontStyle, rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';
import { array, func, string } from 'prop-types';
import { Link } from 'react-router-dom';

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
        color: var(--white);
      }
    `}
  transform: translateY(-50%);
  background: radial-gradient(
    circle at center,
    var(--black) 10%,
    transparent 70%
  );
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

const StCarouselContainer = styled.div`
  position: relative;

  .prev,
  .next,
  .dots-css,
  > a {
    visibility: hidden;
  }

  &:hover {
    .prev,
    .next,
    .dots-css,
    > a {
      visibility: visible;
    }
  }

  .slick-track {
    margin: 0;
  }

  h2 {
    ${getFontStyle('LabelS')}
    display: inline-block;
    margin-right: ${rem(10)};
    margin-left: ${rem(8)};
  }

  span {
    ${getFontStyle('ParagraphS')}
    color: var(--gray200);
  }

  @media (min-width: 768px) {
    h2 {
      ${getFontStyle('headingM')}
      margin-left: ${rem(40)};
    }
  }

  @media (min-width: 1920px) {
    h2 {
      ${getFontStyle('headingXL')}
      margin-right: ${rem(15)};
      margin-left: ${rem(70)};
    }

    span {
      ${getFontStyle('ParagraphM')}
    }
  }
`;

const StViewAll = styled(Link)`
  position: absolute;
  top: 0;
  right: ${rem(8)};
  color: var(--gray200);

  &:hover {
    color: var(--white);
  }

  @media (min-width: 768px) {
    right: ${rem(40)};
  }
  @media (min-width: 1920px) {
    right: ${rem(70)};
  }
`;

const StSlider = styled(Slider)`
  .slick-list {
    padding: ${rem(20)} ${rem(8)} 0;
    @media (min-width: 768px) {
      padding: ${rem(20)} ${rem(40)} 0;
    }
    @media (min-width: 1920px) {
      padding: ${rem(20)} ${rem(70)} 0;
    }
  }

  .slick-slide {
    padding-right: ${rem(8)};
    transition: transform 0.3s ease-in-out;

    img {
      border-radius: 5px;
    }

    figCaption {
      margin-top: ${rem(8)};
      ${getFontStyle('ParagraphM')}

      @media (min-width: 1920px) {
        ${getFontStyle('LabelL')}
      }
    }

    &:hover {
      transform: translateY(-10px);
    }
  }

  .dots-css {
    position: absolute;
    padding: 0;
    top: ${rem(-40)};
    right: ${rem(68)};

    @media (min-width: 768px) {
      right: ${rem(100)};
    }
    @media (min-width: 1920px) {
      top: ${rem(-53)};
      right: ${rem(130)};
    }
  }

  .dots-css li {
    position: relative;
    display: inline-block;
    width: ${rem(15)};
    height: ${rem(15)};
    padding: 0;
    cursor: pointer;
  }

  .dots-css li button {
    font-size: 0;
    line-height: 0;
    display: block;
    border: 0;
    background: 0 0;
  }

  .dots-css li button:before {
    font-size: 1.2rem;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    content: '•';
    color: var(--gray300);
  }

  .dots-css li.slick-active button:before {
    color: var(--white);
  }
`;

const Carousel = ({ genre, data }) => {
  const settings = {
    dots: true,
    dotsClass: 'dots-css',
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <StCarouselContainer>
      <h2>{genre}</h2>
      <span>{data.length}개</span>
      <StViewAll>전체보기</StViewAll>
      <StSlider {...settings}>
        {data.map((data) => {
          return (
            <Link key={data.id}>
              <figure>
                <picture>
                  <source srcSet={data.desktopUrl} media="(min-width:1920px)" />
                  <source srcSet={data.tabletUrl} media="(min-width:768px)" />
                  <img src={data.mobileUrl} alt={data.title} />
                </picture>
                <figcaption>{data.title}</figcaption>
              </figure>
            </Link>
          );
        })}
      </StSlider>
    </StCarouselContainer>
  );
};

export default Carousel;

Carousel.propTypes = {
  genre: string,
  data: array,
};
