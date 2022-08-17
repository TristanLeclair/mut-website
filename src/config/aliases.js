const aliases = (prefix = `src`) => ({
  '@atoms': `${prefix}/components/atoms`,
  '@molecules': `${prefix}/components/molecules`,
  '@organisms': `${prefix}/components/organisms`,
  '@templates': `${prefix}/components/templates`,
  '@pages': `${prefix}/components/pages`,
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@contexts': `${prefix}/contexts`,
  '@styles': `${prefix}/styles`,
  '@hooks': `${prefix}/hooks`,
  '@mocks': `${prefix}/mocks`,
  '@utils': `${prefix}/utils`,
  '@test-utils': `${prefix}/test-utils`,
});

module.exports = aliases;
