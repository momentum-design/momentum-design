import { cli } from '../../../config/esbuild/esbuild.config.js';
import { ESM_REQUIRE_SHIM } from '../../../config/esbuild/esbuild-shim.js';

const shimBanner = {
  js: ESM_REQUIRE_SHIM,
};

cli({ stage: 'production', banner: shimBanner });
