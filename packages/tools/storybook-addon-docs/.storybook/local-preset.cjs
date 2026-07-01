/**
 * Loads the built addon into this test Storybook so the package can be
 * exercised end-to-end without publishing.
 */
function previewAnnotations(entry = []) {
  return [...entry, require.resolve('../dist/preview.js')];
}

module.exports = {
  previewAnnotations,
};
