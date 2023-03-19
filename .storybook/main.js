import { mergeConfig } from 'vite';
import { resolve } from 'node:path';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-react-router-v6',
    '@storybook/addon-styling',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    console.log(config);
    return mergeConfig(config, {
      resolve: {
        alias: {
          ...config.resolve.alias,
          '@': resolve(__dirname, '../src'),
        },
      },
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
