const customElementsManifestConfig = require('./custom-elements-manifest.config');

module.exports = {
  ...customElementsManifestConfig,
  /** Run in watch mode (for storybook), runs on file changes */
  watch: true,
};
