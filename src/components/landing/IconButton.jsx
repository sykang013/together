import { PropTypes } from 'prop-types'; //프롭타입스 불러오기
import { Link as ReactRouterLink } from 'react-router-dom'; //Link를 사용하려면 리액트 라우터 돔에서 불러와야한다
import styled from 'styled-components/macro'; //스타일드 컴포넌트 macro
import { getColor, getFontStyle, rem } from '../../theme/utils'; //절대경로@(src) 사용불가(?)
// import './IconButton.css'; //css 불러오기

const StIconButton = styled.div`
  background-color: var(--primary);
  border-radius: 4px;
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
  .mobile {
    width: ${rem(188)};
    height: ${rem(34)};
    ${getFontStyle('LabelS')}
  }
  .tablet {
    background-color: red;
    width: ${rem(283)};
    height: ${rem(48)};
    ${getFontStyle('LabelM')}
  }
  .desktop {
    width: ${rem(500)};
    height: ${rem(80)};
    ${getFontStyle('LabelXL')}
  }
`;

/**
 * Primary UI component for user interaction
 */
export const IconButton = (size) => {
  // const StSprite = styled.div`
  //   height: 80%;
  //   svg {
  //     height: 100%;
  //     padding: 0 ${rem(4)} 0 0;
  //   }
  // `;
  // const Sprite = ({ id, viewBox }) => (
  //   <svg viewBox={`${viewBox}`}>
  //     <use href={`src/assets/sprites.svg#${id}`} />
  //   </svg>
  // );
  return (
    <StIconButton role="group" className={`${size}`}>
      <ReactRouterLink to="/login">
        {/* <StSprite>
          <Sprite id="symbol-logo" viewBox="0 0 63 63" />
        </StSprite> */}
        <h3>새로워진 타잉을 만나보세요!</h3>
      </ReactRouterLink>
    </StIconButton>
  );
};

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
