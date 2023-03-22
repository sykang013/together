import { getFontStyle, rem } from '@/theme/utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StNotFound = styled.p`
  ${getFontStyle('headingXXXL')};
  text-align: center;
  margin-top: ${rem(300)};
`;

const StLink = styled(Link)`
  text-decoration: underline;
  :hover {
    color: var(--primary);
  }
`;
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>타잉 에러페이지</title>
        <meta
          name="description"
          content="페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다."
        />
      </Helmet>
      <StNotFound>
        ⚠️404 not found⚠️ 없는 페이지 입니다.
        <br />
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        <br />
        {`클릭 -> `}
        <StLink to="/">메인 페이지</StLink>로 이동
      </StNotFound>
    </>
  );
};

export default NotFound;
