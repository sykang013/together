import styled from 'styled-components/macro';
import MessageOriginal from '@/components/landing/MessageTitle';
import { rem } from '@/theme/utils';

const StScrollSectionOriginal = styled.section`
  background: orange;
  @media (min-width: 768px) {
  }
  @media (min-width: 1920px) {
  }
`;

const ScrollSectionOriginal = () => {
  return (
    <StScrollSectionOriginal>
      <MessageOriginal />
    </StScrollSectionOriginal>
  );
};

export default ScrollSectionOriginal;
