import esbuild from 'esbuild';
import { join } from 'path';

import { PROJECT_PREFIX } from './esbuild.constants.js';

const cli = async ({ stage, extension = 'js', format = 'esm' }) => {
  const projectPath = process.cwd();

  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'src', 'main.js')}`],
    format,
    minify: true,
    platform: 'node',
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

const plop = async () => {
  const projectPath = `${join(process.cwd(), 'config', 'plop')}`;

  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'plopfile.ts')}`],
    format: 'esm',
    minify: true,
    outfile: `${join(projectPath, 'dist', 'plopfile.js')}`,
    tsconfig: `${join(projectPath, 'tsconfig.plop.json')}`,
    platform: 'node',
  });
};

export {
  cli,
  iife,
  plop,
};
