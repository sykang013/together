import styled from 'styled-components/macro';
import IconButton from '@/components/landing/IconButton';
import MessageTitle from '@/components/landing/MessageTitle';

const StScrollSectionTitle = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 100px 0 20px 0;
`;

const ScrollSectionTitle = () => {
  return (
    <StScrollSectionTitle>
      <MessageTitle />
      <IconButton />
    </StScrollSectionTitle>
  );
};

export default ScrollSectionTitle;
