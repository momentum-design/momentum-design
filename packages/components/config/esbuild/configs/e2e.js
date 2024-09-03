const { join } = require('path');

const projectPath = process.cwd();
const publicPath = join(projectPath, 'config', 'playwright', 'public');
const port = 4000;

module.exports = {
  publicPath,
  port,
};
