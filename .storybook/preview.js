/** @type { import('@storybook/react').Preview } */

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
      viewports: customViewports
    }
  },
};

export default preview;