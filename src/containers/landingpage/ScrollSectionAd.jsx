import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import CarouselAd from '@/components/landing/CarouselAd';
import { rem } from '@/theme/utils';

const StScrollSectionAd = styled.section`
  border: 1px solid green;
  margin-top: ${rem(160)};
  @media (min-width: 768px) {
  }
  @media (min-width: 1920px) {
  }
`;

const ScrollSectionAd = () => {
  return (
    <StScrollSectionAd>
      <MessageAd
        mainText="내가 찾던 재미"
        subText="보고 싶은 콘텐츠를 발견하세요!"
        detailText="최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점"
      />
      <CarouselAd speed={5000} startImgIndex={0} />
      <CarouselAd speed={4500} startImgIndex={2} />
    </StScrollSectionAd>
  );
};

export default ScrollSectionAd;
