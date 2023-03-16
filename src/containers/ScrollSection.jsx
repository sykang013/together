import styled from 'styled-components/macro'; //스타일드 컴포넌트 macro
import { getColor, getFontStyle, rem } from '../theme/utils'; //절대경로@(src) 사용
import IconButton from '../components/landing/IconButton';
import MessageTitle from '../components/landing/MessageTitle';
import { PropTypes } from 'prop-types';

const StScrollSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const ScrollSection = () => {
  return(
    <StScrollSection>
    <MessageTitle/>
    <IconButton/>
    </StScrollSection>
  )
}

export default ScrollSection;

//프롭타입스 정하기
ScrollSection.propTypes = {
  /**
   * 프라이머리한 값인지(T or F)
   */
  primary: PropTypes.bool,
  /**
   * 크기설정(택1)
   */
  size: PropTypes.oneOf(['mobile', 'tablet', 'desktop']),
};

//기본프롭 정하기
ScrollSection.defaultProps = {
  primary: true,
  size: 'mobile',
};