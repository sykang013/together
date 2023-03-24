import Slider from 'react-slick';
import styled, { css } from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getFontStyle, rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';
import { array, bool, func, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { number } from 'prop-types';

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
  .dots-css {
    visibility: hidden;
  }

  &:hover {
    .prev,
    .next,
    .dots-css {
      visibility: visible;
    }
  }

  .slick-track {
    /* padding-right: ${rem(8)};
    @media (min-width: 768px) {
      padding-right: ${rem(40)};
    }
    @media (min-width: 1920px) {
      padding-right: ${rem(70)};
    } */
  }

  h2 {
    ${getFontStyle('LabelS')}
    display: inline-block;
    margin-right: ${rem(10)};
    margin-left: ${rem(8)};
  }

  @media (min-width: 768px) {
    h2 {
      ${getFontStyle('headingL')}
      margin-left: ${rem(40)};
    }
  }

  @media (min-width: 1920px) {
    h2 {
      ${getFontStyle('headingXL')}
      margin-right: ${rem(15)};
      margin-left: ${rem(70)};
    }
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
    position: relative;

    svg {
      position: absolute;
      top: 5px;
      left: 5px;
    }

    img {
      border-radius: 5px;
    }

    figCaption {
      margin-top: ${rem(8)};
      color: var(--gray100);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      ${getFontStyle('CarouselS')};
      @media (min-width: 768px) {
        ${getFontStyle('CarouselM')}
      }

      @media (min-width: 1920px) {
        ${getFontStyle('CarouselL')}
      }
    }

    &:hover {
      transform: translateY(-10px);
      figCaption {
        color: var(--white);
      }
    }
  }

  .dots-css {
    position: absolute;
    padding: 0;
    top: ${rem(-30)};
    right: ${rem(8)};

    @media (min-width: 768px) {
      right: ${rem(40)};
    }
    @media (min-width: 1920px) {
      right: ${rem(70)};
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

const StInfo = styled.div`
  margin-top: ${rem(10)};
  ${(props) =>
    props.number &&
    css`
      position: relative;
      top: ${rem(-40)};
    `};
`;

const StTitle = styled.span`
  ${(props) =>
    props.number &&
    css`
      margin-left: ${rem(10)};
    `}
`;

const StCount = styled.span`
  ${getFontStyle('ParagraphS')}
  color: var(--gray200);

  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphM')}
  }
`;

const StNumber = styled.span`
  font-style: italic;
  ${getFontStyle('CarouselNumberS')};
  @media (min-width: 768px) {
    ${getFontStyle('CarouselNumberM')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('CarouselNumberL')};
  }
`;

const Carousel = ({
  title,
  count,
  data,
  mobileSlides = 3,
  tabletSlides = 5,
  desktopSlides = 7,
  vod,
  number,
}) => {
  const settings = {
    dots: true,
    dotsClass: 'dots-css',
    infinite: false,
    speed: 500,
    rows: 1,
    slidesToShow: desktopSlides,
    slidesToScroll: desktopSlides,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: tabletSlides,
          slidesToScroll: tabletSlides,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: mobileSlides,
          slidesToScroll: mobileSlides,
        },
      },
    ],
  };

  return (
    <StCarouselContainer>
      <h2>{title}</h2>
      {count && <StCount>{data.length}개</StCount>}
      <StSlider {...settings}>
        {data.slice(0, 20).map((data, index) => {
          return (
            <Link key={data.id}>
              <picture>
                <source srcSet={data.desktopUrl} media="(min-width:1920px)" />
                <source srcSet={data.tabletUrl} media="(min-width:768px)" />
                <img src={data.mobileUrl} alt={data.title} />
              </picture>
              <StInfo number={number}>
                {number && <StNumber>{index + 1}</StNumber>}
                {data.title && <StTitle number={number}>{data.title}</StTitle>}
              </StInfo>
              {vod && <Svg id="quick-vod" width={96} height={30} />}
            </Link>
          );
        })}
      </StSlider>
    </StCarouselContainer>
  );
};

export default Carousel;

Carousel.propTypes = {
  title: string,
  data: array,
  count: bool,
  mobileSlides: number,
  tabletSlides: number,
  desktopSlides: number,
  vod: bool,
  number: bool,
};
