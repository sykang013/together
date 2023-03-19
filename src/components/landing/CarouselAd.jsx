import { PropTypes } from 'prop-types';
import styled from 'styled-components/macro';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StSlider = styled(Slider)`
  background: tomato;
  .slick-slide div {
    outline: none;
    margin: 0 ${`0.5vw`};
  }
`;

const ImageContainer = styled.li`
  list-style: none;
  width: 100%;
`;

const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  margin-top: 1vw;
`;

const ListItem = (props) => {
  const imagePath =
    'src/assets/landing-img/contents-img/' + props.image + '.png';
  return (
    <ImageContainer>
      <Image src={imagePath} alt={props.alt} />
    </ImageContainer>
  );
};

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const CarouselAd = (props) => {
  const settings = {
    pauseOnHover: false,
    swipe: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: props.speed,
    autoplaySpeed: 0,
    initialSlide: props.startImgIndex,
    cssEase: 'linear',
    rows: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <Container>
      <StSlider {...settings}>
        <ListItem image="fun-food-mob-and-tabl" alt="푸드크로니클" />
        <ListItem image="fun-letmein-mob-and-tabl" alt="렛미인" />
        <ListItem
          image="fun-manager-mob-and-tabl"
          alt="연예인 매니저로 살아남기"
        />
        <ListItem image="fun-quiz-mob-and-tabl" alt="유퀴즈 온더 블럭" />
        <ListItem image="fun-shurup-mob-and-tabl" alt="슈룹" />
      </StSlider>
    </Container>
  );
};

export default CarouselAd;

CarouselAd.propTypes = {
  /**
   * 캐러셀 자동재생 속도: 숫자만 입력가능
   */
  speed: PropTypes.number.isRequired,
  /**
   * 시작점에 위치할 이미지 인덱스: 숫자만 입력가능
   */
  startImgIndex: PropTypes.number.isRequired,
};
