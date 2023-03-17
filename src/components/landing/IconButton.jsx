import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

const StIconButton = styled.div`
  &:hover {
    background-color: var(--secondary);
  }
  background-color: var(--primary);
  border-radius: 4px;
  width: ${rem(188)};
  height: ${rem(34)};
  margin-top: ${rem(16)};
  ${getFontStyle('LabelS')}
  @media (min-width: 768px) {
    width: ${rem(283)};
    height: ${rem(48)};
    ${getFontStyle('LabelM')}
  }
  @media (min-width: 1920px) {
    width: ${rem(500)};
    height: ${rem(80)};
    ${getFontStyle('LabelXL')}
  }
  a {
    display: flex;
    justify-content: center;
    align-items: top;
    width: 100%;
    height: 100%;
  }
  h3 {
    line-height: 300%;
  }
`;

const IconButton = () => {
  const StSprite = styled.div`
    height: 80%;
    svg {
      height: 100%;
      padding: 0 ${rem(4)} 0 0;
    }
  `;
  const Sprite = ({ id, viewBox }) => (
    <svg viewBox={`${viewBox}`}>
      <use href={`src/assets/sprites.svg#${id}`} />
    </svg>
  );
  return (
    <StIconButton role="group">
      <Link to="/login">
        <StSprite>
          <Sprite id="symbol-logo" viewBox="0 0 63 63" />
        </StSprite>
        <h3>새로워진 타잉을 만나보세요!</h3>
      </Link>
    </StIconButton>
  );
};

export default IconButton;
