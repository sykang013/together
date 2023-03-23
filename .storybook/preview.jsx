/** @type { import('@storybook/react').Preview } */
// import { withRouter } from 'storybook-addon-react-router-v6';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';
import { getColor } from '../src/theme/utils';
import ko from 'axe-core/locales/ko.json';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
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

    font-size: calc(8px + 0.5vw);

    * {
      transition: 0.1ms;
    };
  };
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
  // withRouter,
];

export const parameters = {
  reactRouter: {
    routePath: '/',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const customViewports = {
  mobile: {
    name: 'mobile_min:320px',
    styles: {
      width: '320px',
      height: '50vh',
    },
  },
  tablet: {
    name: 'tablet_min:768px',
    styles: {
      width: '768px',
      height: '50vh',
    },
  },
  desktop: {
    name: 'desktop_min:1920px',
    styles: {
      width: '1920px',
      height: '50vh',
    },
  },
};

const preview = {
  parameters: {
    a11y: {
      config: { locale: ko },
    },
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'light',
          value: '#E1E1E1',
        },
      ],
    },
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;
