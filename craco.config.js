// craco.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const alias = require(`./src/config/aliases`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

const resolvedJestAliases = Object.fromEntries(
  Object.entries(alias('<rootDir>/src')).map(([key, value]) => [
    `^${key}/(.*)$`,
    `${value}/$1`,
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: resolvedJestAliases,
      coveragePathIgnorePatterns: [
        '/node_modules',
        '/lib',
        '<rootDir>/src/config/',
        '<rootDir>/src/stories/',
        '<rootDir>/src/utils/',
        '<rootDir>/src/styles/',
        '<rootDir>/src/reportWebVitals.ts',
        '<rootDir>/src/index.tsx',
      ],
    },
  },
};
