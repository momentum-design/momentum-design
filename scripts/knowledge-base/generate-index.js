#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Knowledge-base index generator.
 *
 * Globs the repo for `knowledge-base/**\/*.md` topic files (excluding
 * `images/` asset folders), parses required frontmatter, validates it against
 * the configurable schema in `config/knowledge-base/frontmatter.config.json`,
 * and writes three deterministic, tier-sharded index files at
 * `knowledge-base/index.root.json` (tier 1),
 * `knowledge-base/index.packages.json` (tier 2), and
 * `knowledge-base/index.components.json` (tier 3).
 *
 * Sharding by tier lets agents fetch only the slice they need — e.g. a
 * component-scoped task reads `index.components.json` directly without
 * loading the full topic catalogue.
 *
 * Usage:
 *   node scripts/knowledge-base/generate-index.js           # write
 *   node scripts/knowledge-base/generate-index.js --check   # CI: exit 1 if stale
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");
const Ajv = require("ajv");

const KNOWLEDGE_BASE_DIR = "knowledge-base";

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const CONFIG_PATH = path.join(REPO_ROOT, "config", KNOWLEDGE_BASE_DIR, "frontmatter.config.json");
const TOPICS_CONFIG_PATH = path.join(REPO_ROOT, "config", KNOWLEDGE_BASE_DIR, "topic-constraints.config.json");
const GENERATOR_REL = `scripts/${KNOWLEDGE_BASE_DIR}/generate-index.js`;

// Tier-sharded index files. Each shard contains only its own tier's topics so
// agents can fetch the smallest relevant slice. Keep the keys (1/2/3) aligned
// with the `tier` enum in frontmatter.config.json.
const SHARDS = {
  1: { file: "index.root.json", label: "design-system (tier 1)" },
  2: { file: "index.packages.json", label: "packages (tier 2)" },
  3: { file: "index.components.json", label: "components (tier 3)" },
};
const SHARD_TIERS = Object.keys(SHARDS).map(Number);
const shardPath = (tier) => path.join(REPO_ROOT, KNOWLEDGE_BASE_DIR, SHARDS[tier].file);

const ASSET_DIR_NAMES = new Set(["images"]);
const COMPONENTS_TIER3_PREFIX = "packages/components/src/components/";

const TIER3_DIR_RE = new RegExp(`^${COMPONENTS_TIER3_PREFIX}(?<component>[^/]+)/${KNOWLEDGE_BASE_DIR}$`);
const TIER2_DIR_RE = new RegExp(`^packages/(?<pkgPath>.+)/${KNOWLEDGE_BASE_DIR}$`);
const TIER1_DIR_RE = new RegExp(`^${KNOWLEDGE_BASE_DIR}$`);

// Glob roots for tier discovery. `scripts/`, `config/`, `.github/`, `.vscode/`,
// `scratch/` are intentionally excluded so the generator's own `knowledge-base`
// tooling folders are never treated as content.
const TOPIC_FILE_EXTENSION = ".md";
const KB_DIR_GLOBS = [
  `${KNOWLEDGE_BASE_DIR}/`,
  `packages/*/${KNOWLEDGE_BASE_DIR}/`,
  `packages/*/*/${KNOWLEDGE_BASE_DIR}/`,
  `packages/components/src/components/*/${KNOWLEDGE_BASE_DIR}/`,
];
// Derive the topic-file globs from the directory globs so the two stay in
// lockstep; only `TOPIC_FILE_EXTENSION` and the dir list need to be edited.
const TOPIC_GLOBS = KB_DIR_GLOBS.map((dir) => `${dir}*${TOPIC_FILE_EXTENSION}`);
const GLOB_IGNORE = ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.yarn/**"];

function tierForFile(relPosix) {
  const dir = path.posix.dirname(relPosix);

  const tier3 = TIER3_DIR_RE.exec(dir);
  if (tier3) {
    const { component } = tier3.groups;
    return { tier: 3, owner: component, component };
  }

  if (TIER1_DIR_RE.test(dir)) {
    return { tier: 1, owner: "design-system" };
  }

  const tier2 = TIER2_DIR_RE.exec(dir);
  if (tier2) {
    return { tier: 2, owner: tier2.groups.pkgPath };
  }

  return null;
}

function composeSchema(config, tier) {
  const def = config.default || {};
  const override = (config.tiers && config.tiers[String(tier)]) || {};
  const required = Array.from(new Set([...(def.required || []), ...(override.required || [])]));
  const properties = { ...(def.properties || {}), ...(override.properties || {}) };
  return {
    type: "object",
    required,
    properties,
    additionalProperties: true,
  };
}

function main() {
  const check = process.argv.includes("--check");

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  const topicsConfig = JSON.parse(fs.readFileSync(TOPICS_CONFIG_PATH, "utf8"));
  const tier3AllowedTopics = new Set(
    Object.keys((topicsConfig.tiers && topicsConfig.tiers["3"] && topicsConfig.tiers["3"].allowedTopics) || {}),
  );
  const ajv = new Ajv({ allErrors: true, strict: false });
  const validatorsByTier = {};
  const getValidator = (tier) => {
    if (!validatorsByTier[tier]) {
      validatorsByTier[tier] = ajv.compile(composeSchema(config, tier));
    }
    return validatorsByTier[tier];
  };

  // Run topic-file and kb-directory globs in parallel; both share GLOB_IGNORE
  // and read from the same FS cache, so this avoids a second full traversal.
  const globOpts = { cwd: REPO_ROOT, ignore: GLOB_IGNORE };
  const matches = TOPIC_GLOBS.flatMap((pattern) => glob.sync(pattern, { ...globOpts, nodir: true, dot: false }));
  const uniqueMatches = Array.from(new Set(matches));

  // Detect unexpected non-asset subdirectories inside any knowledge-base folder.
  // Use targeted globs that mirror TOPIC_GLOBS rather than `**/knowledge-base/`
  // to avoid a full recursive scan of the repo.
  const kbDirs = Array.from(new Set(KB_DIR_GLOBS.flatMap((pattern) => glob.sync(pattern, globOpts))));
  const errors = [];
  for (const kbDir of kbDirs) {
    const entries = fs.readdirSync(path.join(REPO_ROOT, kbDir), { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && !ASSET_DIR_NAMES.has(entry.name)) {
        errors.push(
          `Unexpected subdirectory "${entry.name}" in ${kbDir}. ` +
            `Only asset folders (${[...ASSET_DIR_NAMES].join(", ")}) are allowed; topic files must be flat.`,
        );
      }
    }
  }

  const topics = [];
  const seenIds = new Set();

  // Pre-read all topic files; reading is the dominant cost and stays
  // sequential on a single thread, but batching the calls avoids repeated
  // path.join allocations interleaved with parse work.
  const fileBuffers = new Array(uniqueMatches.length);
  for (let i = 0; i < uniqueMatches.length; i += 1) {
    try {
      fileBuffers[i] = fs.readFileSync(path.join(REPO_ROOT, uniqueMatches[i]), "utf8");
    } catch (e) {
      errors.push(`${uniqueMatches[i]}: failed to read/parse frontmatter (${e.message})`);
      fileBuffers[i] = null;
    }
  }

  for (let i = 0; i < uniqueMatches.length; i += 1) {
    const relPosix = uniqueMatches[i];
    const raw = fileBuffers[i];
    if (raw === null) continue;

    const tierInfo = tierForFile(relPosix);
    if (!tierInfo) {
      errors.push(`Cannot determine tier for topic file: ${relPosix}`);
      continue;
    }

    let parsed;
    try {
      parsed = matter(raw);
    } catch (e) {
      errors.push(`${relPosix}: failed to read/parse frontmatter (${e.message})`);
      continue;
    }
    const data = parsed.data || {};

    const validate = getValidator(tierInfo.tier);
    if (!validate(data)) {
      for (const err of validate.errors || []) {
        errors.push(`${relPosix}: frontmatter ${err.instancePath || "/"} ${err.message}`);
      }
      continue;
    }

    if (data.tier !== tierInfo.tier) {
      errors.push(`${relPosix}: frontmatter tier (${data.tier}) does not match path tier (${tierInfo.tier}).`);
      continue;
    }

    if (tierInfo.tier === 3 && data.component !== tierInfo.component) {
      errors.push(
        `${relPosix}: frontmatter component (${data.component}) does not match parent folder (${tierInfo.component}).`,
      );
      continue;
    }

    if (tierInfo.tier === 3 && tier3AllowedTopics.size > 0) {
      const topicName = path.posix.basename(relPosix, ".md");
      if (!tier3AllowedTopics.has(topicName)) {
        errors.push(
          `${relPosix}: "${topicName}" is not an allowed Tier 3 topic. ` +
            `Allowed topics: ${[...tier3AllowedTopics].sort().join(", ")}. ` +
            `Update config/${KNOWLEDGE_BASE_DIR}/topic-constraints.config.json to add a new topic name.`,
        );
        continue;
      }
    }

    const id = `tier${tierInfo.tier}/${relPosix.replace(/\.md$/, "")}`;
    if (seenIds.has(id)) {
      errors.push(`${relPosix}: duplicate topic id "${id}".`);
      continue;
    }
    seenIds.add(id);

    const topic = {
      id,
      tier: tierInfo.tier,
      path: relPosix,
      title: data.title,
      summary: data.summary,
      status: data.status,
      owner: data.owner,
      canonical: data.canonical || null,
    };
    if (tierInfo.tier === 3) {
      topic.component = data.component;
    }
    topics.push(topic);
  }

  if (errors.length > 0) {
    console.error("Knowledge-base index generation failed:");
    for (const err of errors) console.error(`  - ${err}`);
    process.exit(1);
  }

  topics.sort((a, b) => a.tier - b.tier || a.path.localeCompare(b.path));

  // Partition topics by tier so each shard is self-contained.
  const topicsByTier = Object.fromEntries(SHARD_TIERS.map((t) => [t, []]));
  for (const topic of topics) {
    topicsByTier[topic.tier].push(topic);
  }

  const shards = SHARD_TIERS.map((tier) => {
    const { file, label } = SHARDS[tier];
    const output = {
      $schema: `../config/${KNOWLEDGE_BASE_DIR}/index.schema.json`,
      _comment: `GENERATED FILE — DO NOT HAND-EDIT. Run \`yarn ${KNOWLEDGE_BASE_DIR}:index\` to regenerate.`,
      generatedFrom: GENERATOR_REL,
      tier,
      topics: topicsByTier[tier],
    };
    return {
      tier,
      label,
      file,
      absPath: shardPath(tier),
      serialized: `${JSON.stringify(output, null, 2)}\n`,
      topicCount: topicsByTier[tier].length,
    };
  });

  if (check) {
    const staleShards = [];
    for (const shard of shards) {
      let existing = null;
      try {
        existing = fs.readFileSync(shard.absPath, "utf8");
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
    console.log(`Knowledge-base index shards are up to date (${shards.map((s) => s.file).join(", ")}).`);
    return;
  }

  for (const shard of shards) {
    fs.writeFileSync(shard.absPath, shard.serialized);
    console.log(
      `Wrote ${path.relative(REPO_ROOT, shard.absPath)} — ${shard.label}, ${shard.topicCount} topic${shard.topicCount === 1 ? "" : "s"}.`,
    );
  }
}

main();
