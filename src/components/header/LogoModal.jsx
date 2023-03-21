import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';

const StModalContainer = styled.div`
  width: ${rem(159)};
  height: ${rem(101)};
  border: 1px solid var(--gray800);
  border-radius: 2px;
  background: var(--dark-bg1);
  top: 100%;
  right: 0;
  z-index: 99;
  position: absolute;
`;

const StProfileBox = styled(Link)`
  width: ${rem(156)};
  height: ${rem(61)};
  padding: ${rem(8)};
  border-bottom: 1px solid var(--dark-bg2);
  display: flex;
  flex-flow: row nowrap;
`;

const StProfileIcon = styled.div`
  width: ${rem(45)};
  height: ${rem(45)};
  border-radius: 2px;
  background: var(--black);
`;

const StProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StProfileName = styled.div`
  ${getFontStyle('LabelS')};
  color: var(--gray200);
  margin-left: ${rem(8)};
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
  p {
    ${getFontStyle('ParagraphS')};
    color: var(--gray400);
  }
`;

const StLogoutBox = styled.div`
  display: flex;
  width: ${rem(159)};
  height: ${rem(40)};
`;

const StLogoutLink = styled(Link)`
  ${getFontStyle('ParagraphS')};
  color: var(--gray200);
  margin-left: ${rem(13)};
  margin-top: auto;
  margin-bottom: auto;
`;

const LogoModal = () => {
  return (
    <StModalContainer>
      <StProfileBox aria-label="프로필 페이지로 이동합니다.">
        <StProfileIcon>
          <StProfileImage src="src/assets/profile_4.png" />
        </StProfileIcon>
        <StProfileName>
          강수영님
          <p>프로필 전환</p>
        </StProfileName>
      </StProfileBox>
      <StLogoutBox>
        <StLogoutLink aria-label="로그아웃 페이지로 이동합니다.">
          로그아웃
        </StLogoutLink>
      </StLogoutBox>
    </StModalContainer>
  );
};

export default LogoModal;
