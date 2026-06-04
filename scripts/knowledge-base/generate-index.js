#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Knowledge-base index generator.
 *
 * Writes the tier-sharded `knowledge-base/index.*.json` files from every topic
 * file discovered under a `knowledge-base/` folder. Sharding by tier lets
 * agents fetch only the slice they need — e.g. a component-scoped task reads
 * `index.components.json` directly without loading the full topic catalogue.
 *
 * This script does **not** validate frontmatter or topic constraints — it is a
 * pure build step that emits whatever the filesystem currently contains. To
 * enforce the frontmatter contract and verify the on-disk shards are
 * up-to-date, run `scripts/knowledge-base/validate-knowledge-base.js`
 * (`yarn knowledge-base:validate`).
 *
 * Usage:
 *   node scripts/knowledge-base/generate-index.js
 */

const fs = require('fs');
const path = require('path');
const { REPO_ROOT, TOPIC_CONSTRAINTS_CONFIG_PATH, collectTopics, buildShards } = require('./lib');

function main() {
  const topicConstraintsConfig = JSON.parse(fs.readFileSync(TOPIC_CONSTRAINTS_CONFIG_PATH, 'utf8'));

  const { topics } = collectTopics({ topicConstraintsConfig });
  const shards = buildShards(topics);
  for (const shard of shards) {
    fs.writeFileSync(shard.absPath, shard.serialized);
    const noun = shard.topicCount === 1 ? 'topic' : 'topics';
    console.log(`Wrote ${path.relative(REPO_ROOT, shard.absPath)} — ${shard.label}, ${shard.topicCount} ${noun}.`);
  }
}

main();
