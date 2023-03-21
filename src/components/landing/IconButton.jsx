import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import Svg from '@/components/landing/Svg';

const StIconButton = styled(Link)`
  &:hover {
    background-color: var(--secondary);
  }
  background-color: var(--primary);
  border-radius: 4px;
  display: flex;
  flex-flow: column wrap;
  justify-content: top;
  align-items: center;
  margin-top: ${rem(16)};
  ${getFontStyle('LabelS')};
  width: ${rem(240)};
  height: ${rem(38)};
  @media (min-width: 768px) {
    ${getFontStyle('LabelM')};
    width: ${rem(283)};
    height: ${rem(48)};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('LabelXL')};
    width: ${rem(506)};
    height: ${rem(80)};
  }
  h3 {
    transform: translateY(0.6em);
    padding-right: 1.5vw;
  }
`;

const IconButton = (props) => {
  return (
    <StIconButton to={props.path}>
      <Svg id="symbol-logo" width="15%" height="80%" />
      <h3>새로워진 타잉을 만나보세요!</h3>
    </StIconButton>
  );
};

export default IconButton;

IconButton.propTypes = {
  /**
   * 문자로 된 라우팅 주소 값을 꼭 넣어주세요.
   */
  path: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
  path: '/login',
};
