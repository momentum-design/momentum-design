const esbuild = require('esbuild');
const { config } = require('./build-config');

const iife = async () => {
  await esbuild.build(config);
};

iife();
