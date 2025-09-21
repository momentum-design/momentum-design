/* eslint-disable no-template-curly-in-string */
/* eslint-disable @typescript-eslint/no-floating-promises */
const fs = require('fs');
const { join } = require('path');

const esbuild = require('esbuild');
const chalk = require('chalk');

const { config } = require('./configs/browser');
const { publicPath, port } = require('./configs/e2e');

// this replaces the dynamic import in the brand-visuals component with a normal import to make it work
// in playwright for the time being. not needed anymore in case a BrandVisualProvider and
// normal URL fetching will be done
const replaceBrandVisualsDynamicImport = source => {
  const newSource = source.replace(
    '@momentum-design/brand-visuals/dist/ts/${this.name}.ts',
    '../../../playwright-temp/brandvisuals/index',
  );
  return newSource;
};

const replaceBrandVisualPathPlugin = {
  name: 'replaceBrandVisualPathPlugin',
  setup(build) {
    build.onLoad({ filter: /brandvisual.component.ts/ }, async args => {
      const source = await fs.promises.readFile(args.path, 'utf8');
      const contents = replaceBrandVisualsDynamicImport(source);

      return { contents, loader: 'default' };
    });
  },
};

// this replaces the dynamic import in the animations component with a normal import to make it work
// in playwright for the time being.
const replaceAnimationAssetsPathPlugin = {
  name: 'replaceAnimationsAssetsPathPlugin',
  setup(build) {
    build.onLoad({ filter: /animation.component.ts/ }, async args => {
      const source = await fs.promises.readFile(args.path, 'utf8');
      const contents = source.replace(
        '@momentum-design/animations/dist/lottie${path}',
        '../../../playwright-temp/assets/animations/animation.json',
      );
      return { contents, loader: 'default' };
    });
  },
};

const iife = async () => {
  const ctx = await esbuild.context({
    ...config,
    entryPoints: [
      ...config.entryPoints,
      // build e2e-test utils, making sure the sub-component defined there will also
      // be available for e2e tests
      `${join(process.cwd(), 'src/components/themeprovider/themeprovider.e2e-test.utils.ts')}`,
      `${join(process.cwd(), 'src/components/iconprovider/iconprovider.e2e-test.utils.ts')}`,
      `${join(process.cwd(), 'src/components/illustrationprovider/illustrationprovider.e2e-test.utils.ts')}`,
      `${join(process.cwd(), 'src/components/buttonsimple/index.ts')}`,
      `${join(process.cwd(), 'src/components/formfieldwrapper/formfieldwrapper.subcomponent.ts')}`,
      `${join(process.cwd(), 'src/components/virtualizedlist/virtualizedlist.helper.test.ts')}`,
      // include playwright-temp index for esbuild to consider it in the path resolve
      `${join(process.cwd(), 'playwright-temp/brandvisuals/index.ts')}`,
    ],
    plugins: [replaceBrandVisualPathPlugin, replaceAnimationAssetsPathPlugin],
    outfile: undefined,
    outdir: `${join(publicPath, 'dist')}`,
  });

  await ctx.watch();
  await ctx.serve({
    servedir: publicPath,
    port,
  });

  // eslint-disable-next-line no-console
  console.log(chalk.cyan(`Serving at http://localhost:${port}`));
};

iife();
