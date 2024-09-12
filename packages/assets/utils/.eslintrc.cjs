const config = require('../../../.eslintrc.js');

module.exports = { ...config, plugins: [...config.plugins, 'html'] };
