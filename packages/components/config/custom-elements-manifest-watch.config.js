const customElementsManifestConfig = require('./custom-elements-manifest.config');

module.exports = {
  ...customElementsManifestConfig,
  /** Run in watch mode, runs on file changes */
  watch: true,
};
