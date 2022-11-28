const esbuild = require('esbuild');
const { join } = require('path');

const { PROJECT_PREFIX } = require('./esbuild.constants.js');

const cli = async ({ stage, extension = 'js', external, format = 'esm', banner = {} }) => {
  const projectPath = process.cwd();

  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'src', 'main.js')}`],
    external,
    format,
    minify: true,
    platform: 'node',
    banner,
    target: ['node18.12.1'],
    sourcemap: stage !== 'production',
    outfile: `${join(projectPath, 'dist', 'cli', `index.${extension}`)}`,
  });
};

const iife = async ({ name }) => {
  const projectPath = process.cwd();

  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'src', 'index.js')}`],
    format: 'iife',
    globalName: `${PROJECT_PREFIX}${name ? `.${name}` : ''}`,
    minify: true,
    sourcemap: true,
    outfile: `${join(projectPath, 'dist', 'browser', 'index.js')}`,
  });
};

const esm = async (
  projectPath = `${join(process.cwd())}`,
  entryPointPath = 'src/index.ts',
  outfile = 'index.js',
  tsconfig = 'tsconfig.json',
  platform = 'node',
) => {
  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, entryPointPath)}`],
    format: 'esm',
    minify: true,
    sourcemap: true,
    outfile: `${join(projectPath, 'dist', outfile)}`,
    tsconfig: `${join(projectPath, tsconfig)}`,
    platform,
  });
};

const cjs = async (
  projectPath = `${join(process.cwd())}`,
  entryPointPath = 'src/index.ts',
  outfile = 'index.js',
  tsconfig = 'tsconfig.json',
  platform = 'node',
) => {
  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, entryPointPath)}`],
    format: 'cjs',
    minify: false,
    outfile: `${join(projectPath, 'dist', outfile)}`,
    tsconfig: `${join(projectPath, tsconfig)}`,
    platform,
  });
};

const plop = async () => {
  await esbuild.build({
    bundle: true,
    entryPoints: [join(join(process.cwd(), 'config', 'plop'), 'plopfile.ts')],
    format: 'esm',
    minify: true,
    outfile: `${join(join(process.cwd(), 'config', 'plop'), 'dist', 'plopfile.mjs')}`,
    tsconfig: `${join(join(process.cwd(), 'config', 'plop'), 'tsconfig.plop.json')}`,
    platform: 'node',
  });
};

module.exports = { iife, plop, esm, cjs, cli };
