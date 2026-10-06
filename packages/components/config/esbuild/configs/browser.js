const { join } = require('path');

const projectPath = process.cwd();
const outPath = join('dist', 'browser', 'index.js');

const browsers = ['chrome114', 'firefox114', 'safari13', 'edge93'];

const buildConfig = {
  bundle: true,
  alias: Object.fromEntries(
    ['icon', 'illustration', 'brandvisual'].map(family => [
      `#momentum-assets/${family}`,
      join(projectPath, `src/utils/asset-loader/bundled-${family}.ts`),
    ]),
  ),
  entryPoints: [`${join(projectPath, 'src', 'index.ts')}`],
  minify: true,
  sourcemap: true,
  outfile: `${join(projectPath, outPath)}`,
  target: browsers,
};

module.exports = {
  config: buildConfig,
  outPath,
};
