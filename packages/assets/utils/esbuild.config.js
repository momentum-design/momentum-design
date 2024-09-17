const { cjs } = require("../../../config/esbuild/esbuild.config.js");
const { join } = require('path');

cjs(`${join(process.cwd())}`, "src/index.ts", "index.js", "tsconfig.json", "browser");
