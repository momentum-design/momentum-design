module.exports = {
  "**/knowledge-base/**/*.md": () => "yarn knowledge-base:index:check",
  "knowledge-base/index.*.json": () => "yarn knowledge-base:index:check",
};
