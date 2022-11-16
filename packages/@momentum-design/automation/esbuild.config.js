import { cli } from '../../../config/esbuild/esbuild.config.js';
import { ESM_REQUIRE_SHIM } from '../../../config/esbuild/esbuild-shim.js';
import packageDefinition from './package.json' assert { type: 'json' };

const shimBanner = {
  js: ESM_REQUIRE_SHIM,
};

cli({
  stage: 'production',
  banner: shimBanner,
  external: Object.keys(packageDefinition.dependencies).filter((value) => !value.includes('@momentum-design')),
});
