#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Knowledge-base validator.
 *
 * Performs three independent checks and exits non-zero if any fails:
 *
 *   1. Frontmatter / topic-constraint validation for every topic file under a
 *      `knowledge-base/` folder (against the schema in
 *      `config/knowledge-base/content/frontmatter.config.json` and the allowed-topic
 *      rules in `config/knowledge-base/topic-constraints.config.json`).
 *   2. Body heading-structure validation against
 *      `config/knowledge-base/content/body.config.json`.
 *   3. Staleness check — the on-disk `knowledge-base/index.*.json` shards must
 *      byte-match what `generate-index.js` would produce right now.
 *
 * Usage:
 *   node scripts/knowledge-base/validate-knowledge-base.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const {
  REPO_ROOT,
  KNOWLEDGE_BASE_DIR,
  FRONTMATTER_CONFIG_PATH,
  BODY_CONFIG_PATH,
  TOPIC_CONSTRAINTS_CONFIG_PATH,
  collectTopics,
  buildShards,
  validateBody,
} = require('./lib');

function main() {
  const frontmatterConfig = JSON.parse(fs.readFileSync(FRONTMATTER_CONFIG_PATH, 'utf8'));
  const bodyConfig = JSON.parse(fs.readFileSync(BODY_CONFIG_PATH, 'utf8'));
  const topicConstraintsConfig = JSON.parse(fs.readFileSync(TOPIC_CONSTRAINTS_CONFIG_PATH, 'utf8'));

  const { topics, errors } = collectTopics({ frontmatterConfig, topicConstraintsConfig });

  if (errors.length > 0) {
    console.error('Knowledge-base frontmatter validation failed:');
    for (const err of errors) console.error(`  - ${err}`);
    process.exit(1);
  }

  const bodyErrors = [];
  const bodyWarnings = [];
  for (const topic of topics) {
    const raw = fs.readFileSync(path.join(REPO_ROOT, topic.path), 'utf8');
    const { content } = matter(raw);
    const result = validateBody({
      relPosix: topic.path,
      body: content,
      tier: topic.tier,
      bodyConfig,
    });
    bodyErrors.push(...result.errors);
    bodyWarnings.push(...result.warnings);
  }

  if (bodyWarnings.length > 0) {
    console.warn('Knowledge-base body warnings (recommended headings missing):');
    for (const msg of bodyWarnings) console.warn(`  - ${msg}`);
  }

  if (bodyErrors.length > 0) {
    console.error('Knowledge-base body validation failed:');
    for (const err of bodyErrors) console.error(`  - ${err}`);
    process.exit(1);
  }

  const shards = buildShards(topics);
  const staleShards = [];
  for (const shard of shards) {
    let existing = null;
    try {
      existing = fs.readFileSync(shard.absPath, 'utf8');
    } catch {
      staleShards.push(`${KNOWLEDGE_BASE_DIR}/${shard.file} is missing.`);
      continue;
    }
    if (existing !== shard.serialized) {
      staleShards.push(`${KNOWLEDGE_BASE_DIR}/${shard.file} is out of date.`);
    }
  }

  if (staleShards.length > 0) {
    console.error(`Knowledge-base index is stale. Run \`yarn ${KNOWLEDGE_BASE_DIR}:index\` and commit the result:`);
    for (const msg of staleShards) console.error(`  - ${msg}`);
    process.exit(1);
  }

  console.log(`Knowledge-base is valid (${shards.map((s) => s.file).join(', ')}).`);
}

main();
