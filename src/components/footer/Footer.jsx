import { getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Svg from '@/components/svg/Svg';

const StContainer = styled.footer`
  color: var(--gray500);
  border-top: 1px solid var(--gray800);
  padding-top: ${rem(13)};
  padding-bottom: ${rem(100)};
  @media (min-width: 768px) {
    ${getFontStyle('ParagraphS')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphM')};
  }
`;

const StUtil = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(10)};
  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${rem(20)};
    ${getFontStyle('ParagraphM')};
  }
  @media (min-width: 1920px) {
    flex-direction: row;
    gap: ${rem(36)};
    ${getFontStyle('ParagraphL')};
  }
`;

const StUtilList = styled.p`
  color: var(--gray200);
  &:hover {
    color: var(--white);
  }
`;

const StCopyrightUl = styled.ul`
  margin-top: ${rem(12)};
  display: none;
  color: var(--gray500);
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1920px) {
    display: block;
  }
`;

const StLink = styled(Link)`
  text-decoration: underline;
  &:hover {
    color: var(--gray300);
  }
`;

const StCopyrightli = styled.li`
  span:after {
    content: '';
    border: 1px solid;
    color: var(--gray800);
    margin: 0 ${rem(8)};
  }
  span:last-child::after {
    content: none;
  }
`;

const StIconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${rem(20)};
  margin-top: ${rem(12)};
  svg {
    cursor: pointer;
  }
`;

const StCopyright = styled.p`
  margin-top: ${rem(12)};
`;

const Footer = () => {
  return (
    <StContainer>
      <StUtil>
        <StUtilList>
          <Link to="/">고객센터</Link>
        </StUtilList>
        <StUtilList>
          <Link to="/">이용약관</Link>
        </StUtilList>
        <StUtilList>
          <Link to="/">개인정보처리방침</Link>
        </StUtilList>
        <StUtilList>
          <Link to="/">청소년 보호정책</Link>
        </StUtilList>
        <StUtilList>
          <Link to="/">법적고지</Link>
        </StUtilList>
        <StUtilList>
          <Link to="/">인재채용</Link>
        </StUtilList>
      </StUtil>
      <StCopyrightUl>
        <StCopyrightli>
          <span>대표이사 : YANG JIEUL</span>
          <span>
            <StLink>사업자정보확인</StLink>
          </span>
          <span>사업자등록번호 : 188-88-01893</span>
          <span>통신판매신고번호 : 2020-서울마포-3641호</span>
        </StCopyrightli>
        <StCopyrightli>
          <span>
            사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)
          </span>
          <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
        </StCopyrightli>
        <StCopyrightli>
          <span>
            <StLink>고객문의 바로가기</StLink>
          </span>
          <span>대표메일 : tving@cj.net</span>
          <span>고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</span>
        </StCopyrightli>
        <StCopyrightli>
          <span>
            ENM 시청자 상담실(편성 문의 및 시청자 의견) : 080-080-0780
          </span>
          <span>Mnet 고객센터(방송송편성문의) : 1855-1631</span>
        </StCopyrightli>
      </StCopyrightUl>
      <StIconBox>
        <Svg
          id={'youtube'}
          width={24}
          height={24}
          tabletW={30}
          tabletH={30}
          desktopW={38}
          desktopH={38}
        />
        <Svg
          id={'instagram'}
          width={24}
          height={24}
          tabletW={30}
          tabletH={30}
          desktopW={38}
          desktopH={38}
        />
        <Svg
          id={'twitter'}
          width={24}
          height={24}
          tabletW={30}
          tabletH={30}
          desktopW={38}
          desktopH={38}
        ></Svg>
        <Svg
          id={'facebook'}
          width={24}
          height={24}
          tabletW={30}
          tabletH={30}
          desktopW={38}
          desktopH={38}
        ></Svg>
      </StIconBox>
      <StCopyright>Copyright Ⓒ 주식회사 티빙 All right reserved</StCopyright>
    </StContainer>
  );
};

export default Footer;
