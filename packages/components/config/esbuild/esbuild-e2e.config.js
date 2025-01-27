/* eslint-disable @typescript-eslint/no-floating-promises */
const esbuild = require('esbuild');
const chalk = require('chalk');
const { join } = require('path');
const { config } = require('./configs/browser');
const { publicPath, port } = require('./configs/e2e');

const iife = async () => {
  const ctx = await esbuild.context({
    ...config,
    entryPoints: [
      ...config.entryPoints,
      // build e2e-test utils, making sure the sub-component defined there will also
      // be available for e2e tests
      `${join(process.cwd(), 'src/components/themeprovider/themeprovider.e2e-test.utils.ts')}`,
      `${join(process.cwd(), 'src/components/iconprovider/iconprovider.e2e-test.utils.ts')}`,
      `${join(process.cwd(), 'src/components/buttonsimple/index.ts')}`,
      `${join(process.cwd(), 'src/components/modalcontainer/index.ts')}`,
      `${join(process.cwd(), 'src/components/formfieldwrapper/index.ts')}`,
      `${join(process.cwd(), 'src/components/iconprovider/iconprovider.e2e-test.utils.ts')}`,
      `${join(process.cwd(), 'src/stories/FocusRing/subcomponent-focusring.e2e-test.utils.ts')}`,
    ],
    outfile: undefined,
    outdir: `${join(publicPath, 'dist')}`,
  });

  await ctx.watch();
  await ctx.serve({
    servedir: publicPath,
    port,
  });
  console.log(chalk.cyan(`Serving at http://localhost:${port}`));
};

iife();
