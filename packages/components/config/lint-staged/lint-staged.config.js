module.exports = {
  /*
   * Fix lints and Format source and E2E files (except files under the static folder)
   */
  '*': ['eslint --fix', 'prettier --write'],
};
