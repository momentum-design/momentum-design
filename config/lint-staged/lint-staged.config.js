module.exports = {
  '**/knowledge-base/**/*.md': () => 'yarn knowledge-base:validate',
  'knowledge-base/index.*.json': () => 'yarn knowledge-base:validate',
};
