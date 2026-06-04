#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Knowledge-base validator.
 *
 * Performs three independent checks and exits non-zero if any fails:
 *
 *   1. Markdown lint — runs markdownlint over every topic file using the
 *      config in `config/knowledge-base/content/markdownlint.config.json`.
 *      One custom rule is included:
 *        - KB001 (kb-frontmatter-fields): validates required frontmatter fields
 *          and cross-checks tier/component against the file path.
 *      Two heading-structure rules read their spec from body.config.json:
 *        - KB002 (kb-required-heading): validates required heading structure.
 *        - KB003 (kb-recommended-heading): reports missing recommended headings
 *          as warnings (non-fatal).
 *
 *   2. Structural checks — unexpected subdirectories, filename/topic constraint
 *      violations, and duplicate topic IDs (handled by collectTopics in lib.js).
 *
 *   3. Staleness check — the on-disk `knowledge-base/index.*.json` shards must
 *      byte-match what `generate-index.js` would produce right now.
 *
 * Usage:
 *   node scripts/knowledge-base/validate-knowledge-base.js
 */

const fs = require('fs');
const path = require('path');
const markdownlint = require('markdownlint');
const kbFrontmatterRule = require('./markdownlint-rules/kb-frontmatter');
const kbHeadingStructureRules = require('./markdownlint-rules/kb-heading-structure');
const {
  REPO_ROOT,
  KNOWLEDGE_BASE_DIR,
  MARKDOWNLINT_CONFIG_PATH,
  BODY_CONFIG_PATH,
  TOPIC_CONSTRAINTS_CONFIG_PATH,
  discoverTopicFiles,
  collectTopics,
  buildShards,
} = require('./lib');

const RECOMMENDED_RULE = 'kb-recommended-heading';

function main() {
  const markdownlintBaseConfig = JSON.parse(fs.readFileSync(MARKDOWNLINT_CONFIG_PATH, 'utf8'));
  const bodyConfig = JSON.parse(fs.readFileSync(BODY_CONFIG_PATH, 'utf8'));
  // Inject body config as rule-specific config so kb-heading-structure rules
  // can access the section spec via params.config without coupling the JSON
  // config file to the large body.config.json blob.
  const markdownlintConfig = {
    ...markdownlintBaseConfig,
    KB002: bodyConfig,
    KB003: bodyConfig,
    KB004: bodyConfig,
  };
  const topicConstraintsConfig = JSON.parse(fs.readFileSync(TOPIC_CONSTRAINTS_CONFIG_PATH, 'utf8'));

  // -------------------------------------------------------------------------
  // 1. Markdownlint: frontmatter fields + body heading structure
  // -------------------------------------------------------------------------
  const topicFiles = discoverTopicFiles().map((rel) => path.join(REPO_ROOT, rel));

  let lintFailed = false;
  let hasWarnings = false;

  if (topicFiles.length > 0) {
    const results = markdownlint.sync({
      files: topicFiles,
      config: markdownlintConfig,
      customRules: [kbFrontmatterRule, ...kbHeadingStructureRules],
    });

    const warnings = [];
    const errors = [];

    for (const [filePath, fileErrors] of Object.entries(results)) {
      const relPath = path.relative(REPO_ROOT, filePath);
      for (const e of fileErrors) {
        const detail = e.errorDetail ? ` (${e.errorDetail})` : '';
        const msg = `  ${relPath}:${e.lineNumber}  [${e.ruleNames.join('/')}]${detail}`;
        if (e.ruleNames.includes(RECOMMENDED_RULE)) {
          warnings.push(msg);
        } else {
          errors.push(msg);
        }
      }
    }

    if (warnings.length > 0) {
      hasWarnings = true;
      console.warn('Knowledge-base markdownlint warnings (recommended headings missing):');
      for (const w of warnings) console.warn(w);
    }

    if (errors.length > 0) {
      lintFailed = true;
      console.error('Knowledge-base markdownlint validation failed:');
      for (const e of errors) console.error(e);
    }
  }

  if (lintFailed) process.exit(1);

  // -------------------------------------------------------------------------
  // 2. Structural checks (subdirectories, filename constraints, duplicate IDs)
  // -------------------------------------------------------------------------
  const { topics, errors: structuralErrors } = collectTopics({ topicConstraintsConfig });

  if (structuralErrors.length > 0) {
    console.error('Knowledge-base structural validation failed:');
    for (const err of structuralErrors) console.error(`  - ${err}`);
    process.exit(1);
  }

  // -------------------------------------------------------------------------
  // 3. Staleness check
  // -------------------------------------------------------------------------
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

  const warnSuffix = hasWarnings ? ' (with warnings)' : '';
  console.log(`Knowledge-base is valid${warnSuffix} (${shards.map((s) => s.file).join(', ')}).`);
}

main();
