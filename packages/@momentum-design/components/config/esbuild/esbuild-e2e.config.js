const esbuild = require('esbuild');
const chalk = require('chalk');
const { join } = require('path');
const { config, outPath } = require('./build-config');
const { publicPath, port } = require('./e2e-config');

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
