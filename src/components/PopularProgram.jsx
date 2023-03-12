import { getFontStyle, getColor, rem } from '@/theme/utils'; //유틸함수 불러오기
import styled from 'styled-components/macro'; //스타일드컴포넌츠 모듈에서 styled 불러오기(import)
import Slider from 'react-slick'; //슬라이드를 위한 리액트 슬릭 불러오기
import 'slick-carousel/slick/slick.css'; //리액트 슬릭 css 파일 임포트
import 'slick-carousel/slick/slick-theme.css'; //리액트 슬릭 css 파일 임포트

const StPopularProgram = styled.div`
  h2 {
    color: ${getColor('--white')};
    ${getFontStyle('LabelS')};
  }
`;

const StSlider = styled.div`
  button {
    background-color: yellow;
  }
  .slick-slide {
    margin: 0 0.25rem;
    background-color: pink;
    width: 92px;
    height: 133px;
    border-radius: ${rem(4)};
  }
`;

export default function PopularProgram() {
  const settings = {
    infinite: false,
    speed: 1800,
    slidesToShow: 4,
    // slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  // dots: true,
  // infinite: false,
  // speed: 500,
  // slidesToShow: 3,
  // slidesToScroll: 3,
  // arrows: true,
  // responsive: [
  //   {
  //     breakpoint: 1920,
  //     settings: {
  //       slidesToShow: 7,
  //       slidesToScroll: 7,
  //       infinite: false,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 5,
  //       slidesToScroll: 5,
  //       infinite: false,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 320,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: false,
  //       dots: true,
  //     },
  //   },
  // ],
  return (
    <StPopularProgram>
      <h2>실시간 인기 프로그램</h2>
      <StSlider>
        <Slider {...settings}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
        </Slider>
      </StSlider>
    </StPopularProgram>
  );
}
