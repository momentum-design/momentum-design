module.exports = {
  /** Globs to analyze */
  globs: ['src/components/**/*.component.ts'],
  /** Globs to exclude */
  exclude: ['*.js'],
  /** Directory to output CEM to */
  outdir: 'dist',
  /** Run in dev mode, provides extra logging */
  dev: false,
  /** Not run in watch mode, for build */
  watch: false,
  /** Include third party custom elements manifests */
  dependencies: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: false,
  /** Enable special handling for litelement */
  litelement: true,
  /** Enable special handling for catalyst */
  catalyst: false,
  /** Enable special handling for fast */
  fast: false,
  /** Enable special handling for stencil */
  stencil: false,
  /** Provide custom plugins */
  plugins: [],
};
