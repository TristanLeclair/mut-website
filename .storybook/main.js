const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@atoms': path.resolve(__dirname, '../src/components/atoms'),
          '@molecules': path.resolve(__dirname, '../src/components/molecules'),
          '@organisms': path.resolve(__dirname, '../src/components/organisms'),
          '@templates': path.resolve(__dirname, '../src/components/templates'),
          '@pages': path.resolve(__dirname, '../src/components/pages'),
          '@components': path.resolve(__dirname, '../src/components'),
          '@config': path.resolve(__dirname, '../src/config'),
          '@utils': path.resolve(__dirname, '../src/utils'),
          '@styles': path.resolve(__dirname, '../src/styles'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
        modules: [...config.resolve.modules, toPath('src')],
      },
    };
  },
};
