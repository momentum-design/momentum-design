/* eslint-disable @typescript-eslint/no-floating-promises */
const esbuild = require('esbuild');
const { config } = require('./configs/browser');

const iife = async () => {
  await esbuild.build(config);
};

iife();
