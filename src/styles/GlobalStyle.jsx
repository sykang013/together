import { getColor } from '@/theme/utils';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
  background-color : ${getColor('--black')};
  button,
  a {cursor: pointer};
}
  body,
  body::before,
  body::after,
  body *,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  video {
    width: 100%;
    height: auto;
}
`;

export default GlobalStyle;
