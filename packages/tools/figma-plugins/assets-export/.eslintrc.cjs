const config = require('../../../.eslintrc.js');

module.exports = { ...config, env: { ...config.env, jest: true } };
