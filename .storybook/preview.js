/** @type { import('@storybook/react').Preview } */
import { withRouter } from 'storybook-addon-react-router-v6';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';
import { getColor, getFontStyle, rem } from '../src/theme/utils';
import { Reset as ResetCss } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
body {
  background-color : ${getColor('--black')};
  button,
  a {cursor: pointer};
  color: ${getColor('--white')};
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

  :root{
    --black: #000000;
    --white: #ffffff;
    --gray100: #e1e1e1;
    --gray200: #c4c4c4;
    --gray300: #a6a6a6;
    --gray400: #898989;
    --gray500: #6b6b6b;
    --gray600: #565656;
    --gray700: #404040;
    --gray800: #2b2b2b;
    --gray900: #151515;
    --primary: #182FFF;
    --secondary: #1728C0;
    --dark-bg1: #191919;
    --dark-bg2: #212121;
  }
`;

// export const decorators = [
//   withRouter,
//   withThemeFromJSXProvider({
//     GlobalStyles, // Adds your GlobalStyle component to all stories
//     ResetCss,
//   }),
// ];

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  reactRouter: {
    routePath: '/',
  },
};

const customViewports = {
  mobile: {
    name: 'mobile_min:320px',
    styles: {
      width: '320px',
      height: '100vh',
    },
  },
  tablet: {
    name: 'tablet_min:768px',
    styles: {
      width: '768px',
      height: '100vh',
    },
  },
  desktop: {
    name: 'desktop_min:1920px',
    styles: {
      width: '1920px',
      height: '100vh',
    },
  },
};

const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;