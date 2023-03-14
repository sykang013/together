import styled from 'styled-components/macro';
import { getColor, getFontStyle, rem } from '@/theme/utils';
import StA11yHidden from '../a11yhidden/A11yHidden';

const StLandingMainBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: ${getColor('--white')};
    background-color: pink;
  }
  h3 {
    background-color: yellow;
  }
  span {
    background-color: blue;
  }
  img {
    background-color: green;
  }
`;

const StIconButton = styled.div`
  width: ${rem(188)};
  height: ${rem(32)};
  border-radius: 0.25rem;
  background-color: ${getColor('--primary')};
  ${getFontStyle('LabelS')}//모바일
`;

const LandingMainBlock = () => {
  return (
    <StLandingMainBlock>
      <h3>
        타잉 오리지널 콘텐츠, 방송, 영화, 해외 시리즈까지! 재미를
        플레이해보세요.
      </h3>
      <span>간편하게 가입하고, 원하실 때 해지할 수 있어요.</span>
      <StIconButton role="group">
        <a href="/" target="self">
          <h3>새로워진 타잉을 만나보세요!</h3>
          <img src="" alt=""></img>
        </a>
      </StIconButton>
    </StLandingMainBlock>
  );
};

export default LandingMainBlock;
