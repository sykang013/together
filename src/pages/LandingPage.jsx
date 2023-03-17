import Header from '@/components/header/Header';
import ScrollSectionTitle from '@/containers/ScrollSectionTitle';
import MessageTitle2 from '@/components/landing/MessageTitle2';
import styled from 'styled-components/macro';

const StLandingPage = styled.div`
  .landingImg {
    background-color: pink;
    width: 200px;
    height: 200px;
    display: inline-block;
  }
`;
const LandingPage = () => {
  return (
    <StLandingPage className="landingImg">
      <Header />
      <ScrollSectionTitle />
      <MessageTitle2 />
    </StLandingPage>
  );
};

export default LandingPage;
