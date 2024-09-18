const config = require('../../../.eslintrc.js');

module.exports = {
  ...config,
  ignorePatterns: [...config.ignorePatterns, 'src/staticSite/'],
};
