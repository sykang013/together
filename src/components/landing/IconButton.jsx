import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '../../theme/utils';
import Svg from './Svg';

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
    justify-content: space-evenly;
    align-items: top;
    width: 100%;
    height: 100%;
  }
  h3 {
    line-height: 300%;
  }
`;

const IconButton = (props) => {
  return (
    <StIconButton role="group">
      <Link to={props.path}>
        <Svg id="symbol-logo" width={'15%'} height={'80%'}></Svg>
        <h3>새로워진 타잉을 만나보세요!</h3>
      </Link>
    </StIconButton>
  );
};

export default IconButton;

IconButton.propTypes = {
  /**
   * 문자로 된 라우팅 주소 값을 꼭 넣어주세요
   */
  path: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
  path: '/login',
};
