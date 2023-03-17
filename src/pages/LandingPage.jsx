import { rem } from '@/theme/utils';
import styled from 'styled-components/macro';
import ScrollSectionTitle from '@/containers/ScrollSectionTitle';
import ScrollSectionOriginal from '@/containers/ScrollSectionOriginal';
import ScrollSectionAd from '@/containers/ScrollSectionAd';
// import TestSlider from '@/components/landing/TestSlider';

const StLandingPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* gap: ${rem(48)}; */
`;

const LandingPage = () => {
  return (
    <StLandingPage>
      <ScrollSectionTitle />
      <ScrollSectionOriginal />
      <ScrollSectionAd />
      {/* <TestSlider /> */}
    </StLandingPage>
  );
};

export default LandingPage;
