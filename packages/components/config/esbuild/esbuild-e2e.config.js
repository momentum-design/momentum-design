/* eslint-disable @typescript-eslint/no-floating-promises */
const esbuild = require('esbuild');
const chalk = require('chalk');
const { join } = require('path');
const { config, outPath } = require('./configs/browser');
const { publicPath, port } = require('./configs/e2e');

const iife = async () => {
  const ctx = await esbuild.context({
    ...config,
    outfile: `${join(publicPath, outPath)}`,
  });

  await ctx.watch();
  await ctx.serve({
    servedir: publicPath,
    port,
  });
  console.log(chalk.cyan('Serving at http://localhost:4000'));
};

iife();
