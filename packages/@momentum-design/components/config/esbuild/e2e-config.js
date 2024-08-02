const { join } = require('path');

const projectPath = process.cwd();
const publicPath = join(projectPath, 'config', 'playwright', 'public');

module.exports = {
  publicPath,
  port: 4000,
};
