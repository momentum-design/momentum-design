// AI-Assisted
// Keep the docs `src/generated/knowledge-base` artifacts (and the root index
// shards) in sync with knowledge-base sources on commit. The chain regenerates
// the index BEFORE validating because `knowledge-base:validate` fails if the
// on-disk index shards are stale, then regenerates the docs manifest and
// re-stages both tracked outputs. Function form runs the chain once regardless
// of how many matched files are staged (object form would race per-glob).
const isKnowledgeBaseSource = (file) =>
  /knowledge-base\/.*\.md$/.test(file) || /knowledge-base\/index\.[^/]*\.json$/.test(file);

const KNOWLEDGE_BASE_SYNC = [
  'yarn knowledge-base:index',
  'yarn knowledge-base:validate',
  'yarn workspace @momentum-design/docs generate:knowledge-base',
  'git add knowledge-base/index.*.json packages/documentation/src/generated/knowledge-base/manifest.json',
];

module.exports = (stagedFiles) => (stagedFiles.some(isKnowledgeBaseSource) ? KNOWLEDGE_BASE_SYNC : []);
// End AI-Assisted
