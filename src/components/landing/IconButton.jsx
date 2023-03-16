import { Link } from 'react-router-dom'; //Link를 사용하려면 리액트 라우터 돔에서 불러와야한다
import styled from 'styled-components/macro'; //스타일드 컴포넌트 macro
import { getColor, getFontStyle, rem } from '../../theme/utils'; //절대경로@(src) 사용
import { PropTypes } from 'prop-types';

const StIconButton = styled.div`
  background-color: var(--primary);
  border-radius: 4px;
  width: ${rem(188)};
  height: ${rem(34)};
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

//프롭타입스 정하기
IconButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * 사용할 배경색 선택
   */
  backgroundColor: PropTypes.string,
  /**
   * 버튼 크기 선택
   */
  size: PropTypes.oneOf(['mobile', 'tablet', 'desktop']),
  /**
   * 버튼입니다
   */
  label: PropTypes.string.isRequired,
  /**
   * 옵셔널 클릭 핸들러 Optional click handler
   */
  onClick: PropTypes.func,
};

//기본프롭 정하기
IconButton.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: 'mobile',
  onClick: undefined,
};
