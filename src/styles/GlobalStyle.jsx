import { getColor } from '@/theme/utils';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body { 
  background-color : ${getColor('--black')} 
}

`;

export default GlobalStyle;
