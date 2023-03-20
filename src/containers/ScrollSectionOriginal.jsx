import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';

const StScrollSectionOriginal = styled.section`
  border: 1px solid orange;
  @media (min-width: 768px) {
  }
  @media (min-width: 1920px) {
  }
`;

const ScrollSectionOriginal = () => {
  return (
    <StScrollSectionOriginal>
      <MessageAd
        mainText="티빙에만 있는 재미"
        subText="오리지널 콘텐츠를 만나보세요!"
        detailText="차별화된 웰메이드 오리지널 콘텐츠"
      />
    </StScrollSectionOriginal>
  );
};

export default ScrollSectionOriginal;
