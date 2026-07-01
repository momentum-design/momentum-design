/* eslint-disable no-console */

/**
 * Shared helpers for the knowledge-base tooling.
 *
 * Two entry-point scripts consume this module:
 *
 *   - `generate-index.js` writes the tier-sharded `knowledge-base/index.*.json`
 *     files from whatever topic files currently exist. It does not enforce
 *     validation — it is a pure build step.
 *   - `validate-knowledge-base.js` runs markdownlint (with custom rules) for
 *     frontmatter and heading-structure validation, then verifies that the
 *     on-disk index shards are up-to-date.
 *
 * All filesystem discovery, frontmatter parsing, and shard serialisation lives
 * here so the two scripts cannot drift.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');
const KNOWLEDGE_BASE_DIR = 'knowledge-base';

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const FRONTMATTER_CONFIG_PATH = path.join(
  REPO_ROOT,
  'config',
  KNOWLEDGE_BASE_DIR,
  'content',
  'frontmatter.config.json',
);
const BODY_CONFIG_PATH = path.join(REPO_ROOT, 'config', KNOWLEDGE_BASE_DIR, 'content', 'body.config.json');
const MARKDOWNLINT_CONFIG_PATH = path.join(
  REPO_ROOT,
  'config',
  KNOWLEDGE_BASE_DIR,
  'content',
  'markdownlint.config.json',
);
const TOPIC_CONSTRAINTS_CONFIG_PATH = path.join(
  REPO_ROOT,
  'config',
  KNOWLEDGE_BASE_DIR,
  'topic-constraints.config.json',
);
const GENERATOR_REL = `scripts/${KNOWLEDGE_BASE_DIR}/generate-index.js`;

// Tier-sharded index files. Each shard contains only its own tier's topics so
// agents can fetch the smallest relevant slice. Keep the keys (1/2/3) aligned
// with the `tier` enum in content/frontmatter.config.json.
const SHARDS = {
  1: { file: 'index.root.json', label: 'design-system (tier 1)' },
  2: { file: 'index.packages.json', label: 'packages (tier 2)' },
  3: { file: 'index.components.json', label: 'components (tier 3)' },
};
const SHARD_TIERS = Object.keys(SHARDS).map(Number);
const shardPath = (tier) => path.join(REPO_ROOT, KNOWLEDGE_BASE_DIR, SHARDS[tier].file);

const ASSET_DIR_NAMES = new Set(['images']);
const COMPONENTS_TIER3_PREFIX = 'packages/components/src/components/';

const TIER3_DIR_RE = new RegExp(`^${COMPONENTS_TIER3_PREFIX}(?<component>[^/]+)/${KNOWLEDGE_BASE_DIR}$`);
const TIER2_DIR_RE = new RegExp(`^packages/(?<pkgPath>.+)/${KNOWLEDGE_BASE_DIR}$`);
const TIER1_DIR_RE = new RegExp(`^${KNOWLEDGE_BASE_DIR}$`);

// Glob roots for tier discovery. `scripts/`, `config/`, `.github/`, `.vscode/`,
// `scratch/` are intentionally excluded so the generator's own `knowledge-base`
// tooling folders are never treated as content.
const TOPIC_FILE_EXTENSION = '.md';
const KB_DIR_GLOBS = [
  `${KNOWLEDGE_BASE_DIR}/`,
  `packages/*/${KNOWLEDGE_BASE_DIR}/`,
  `packages/*/*/${KNOWLEDGE_BASE_DIR}/`,
  `packages/components/src/components/*/${KNOWLEDGE_BASE_DIR}/`,
];
// Derive the topic-file globs from the directory globs so the two stay in
// lockstep; only `TOPIC_FILE_EXTENSION` and the dir list need to be edited.
const TOPIC_GLOBS = KB_DIR_GLOBS.map((dir) => `${dir}*${TOPIC_FILE_EXTENSION}`);
const GLOB_IGNORE = ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.yarn/**'];

function tierForFile(relPosix) {
  const dir = path.posix.dirname(relPosix);

  const tier3 = TIER3_DIR_RE.exec(dir);
  if (tier3) {
    const { component } = tier3.groups;
    return { tier: 3, component };
  }

  if (TIER1_DIR_RE.test(dir)) {
    return { tier: 1 };
  }

  const tier2 = TIER2_DIR_RE.exec(dir);
  if (tier2) {
    return { tier: 2 };
  }

  return null;
}

const PLACEHOLDER_RE = /\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Convert a filename pattern like "{component}.{topic}.md" into a RegExp by
// substituting each placeholder with either a literal value drawn from
// `tierInfo` or a named capture group for `{topic}`. Any placeholder not
// satisfied by `tierInfo` (and not `topic`) is reported as a config error so
// the script never silently accepts an unsupported placeholder.
function resolveFilenamePattern(pattern, tierInfo) {
  let unknown = null;
  const regexBody = escapeRegex(pattern).replace(/\\\{([a-zA-Z_][a-zA-Z0-9_]*)\\\}/g, (_, name) => {
    if (name === 'topic') return '(?<topic>[^/]+)';
    const value = tierInfo[name];
    if (value === undefined || value === null) {
      unknown = name;
      return '';
    }
    return escapeRegex(String(value));
  });
  if (unknown) {
    return {
      error: `filename pattern "${pattern}" references unknown placeholder "{${unknown}}" for tier ${tierInfo.tier}.`,
    };
  }
  return { regex: new RegExp(`^${regexBody}$`) };
}

// Render an example filename for diagnostics by substituting `{topic}` with
// `topicValue` and any other placeholder with the matching `tierInfo` value.
function renderExampleFilename(pattern, tierInfo, topicValue) {
  return pattern.replace(PLACEHOLDER_RE, (_, name) => {
    if (name === 'topic') return topicValue;
    const value = tierInfo[name];
    return value === undefined || value === null ? `{${name}}` : String(value);
  });
}

function buildTierConstraints(topicConstraintsConfig) {
  return Object.fromEntries(
    Object.entries((topicConstraintsConfig && topicConstraintsConfig.tiers) || {})
      .filter(([, tierConfig]) => tierConfig && tierConfig.allowedTopics)
      .map(([tier, tierConfig]) => [
        Number(tier),
        {
          allowedTopics: new Set(Object.keys(tierConfig.allowedTopics)),
          filenamePattern: tierConfig.filenamePattern || '{topic}.md',
        },
      ]),
  );
}

function discoverKbDirs() {
  const globOpts = { cwd: REPO_ROOT, ignore: GLOB_IGNORE };
  return Array.from(new Set(KB_DIR_GLOBS.flatMap((pattern) => glob.sync(pattern, globOpts))));
}

function discoverTopicFiles() {
  const globOpts = {
    cwd: REPO_ROOT,
    ignore: GLOB_IGNORE,
    nodir: true,
    dot: false,
  };
  return Array.from(new Set(TOPIC_GLOBS.flatMap((pattern) => glob.sync(pattern, globOpts))));
}

/**
 * Walk the repository's knowledge-base topic files and return:
 *   - `topics`: the topic entries that will be emitted into the index shards.
 *     Best-effort — any file whose tier can be determined and whose frontmatter
 *     parses is included.
 *   - `errors`: structural diagnostics (unexpected subdirectories, filename/topic
 *     constraint violations, duplicate IDs). Frontmatter field validation and body
 *     heading validation are delegated to markdownlint custom rules in
 *     scripts/knowledge-base/markdownlint-rules/.
 *
 * Topics are sorted (tier asc, then path asc) so the result is deterministic.
 *
 * Callers must supply the parsed config JSON for topic constraints
 * (`config/knowledge-base/topic-constraints.config.json`). Loading lives in
 * the entry-point scripts so this module stays I/O-free for its config inputs.
 */
function collectTopics({ topicConstraintsConfig }) {
  const tierConstraintsByTier = buildTierConstraints(topicConstraintsConfig);

  const errors = [];
  const topics = [];
  const seenIds = new Set();

  // Detect unexpected non-asset subdirectories inside any knowledge-base folder.
  // Use targeted globs that mirror TOPIC_GLOBS rather than `**/knowledge-base/`
  // to avoid a full recursive scan of the repo.
  for (const kbDir of discoverKbDirs()) {
    const entries = fs.readdirSync(path.join(REPO_ROOT, kbDir), { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && !ASSET_DIR_NAMES.has(entry.name)) {
        errors.push(
          `Unexpected subdirectory "${entry.name}" in ${kbDir}. ` +
            `Only asset folders (${[...ASSET_DIR_NAMES].join(', ')}) are allowed; topic files must be flat.`,
        );
      }
    }
  }

  const matches = discoverTopicFiles();

  // Pre-read all topic files; reading is the dominant cost and stays
  // sequential on a single thread, but batching the calls avoids repeated
  // path.join allocations interleaved with parse work.
  const fileBuffers = new Array(matches.length);
  for (let i = 0; i < matches.length; i += 1) {
    try {
      fileBuffers[i] = fs.readFileSync(path.join(REPO_ROOT, matches[i]), 'utf8');
    } catch (e) {
      errors.push(`${matches[i]}: failed to read file (${e.message})`);
      fileBuffers[i] = null;
    }
  }

  for (let i = 0; i < matches.length; i += 1) {
    const relPosix = matches[i];
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
      errors.push(`${relPosix}: failed to parse frontmatter (${e.message})`);
      continue;
    }
    const data = parsed.data || {};

    const constraints = tierConstraintsByTier[tierInfo.tier];
    if (constraints && constraints.allowedTopics.size > 0) {
      const { allowedTopics, filenamePattern } = constraints;
      const fileName = path.posix.basename(relPosix);
      const resolved = resolveFilenamePattern(filenamePattern, tierInfo);
      if (resolved.error) {
        errors.push(`${relPosix}: ${resolved.error}`);
      } else {
        const match = resolved.regex.exec(fileName);
        if (!match) {
          const example = renderExampleFilename(filenamePattern, tierInfo, [...allowedTopics].sort()[0]);
          errors.push(
            `${relPosix}: filename does not match the Tier ${tierInfo.tier} pattern "${filenamePattern}" ` +
              `(expected e.g. "${example}").`,
          );
        } else {
          const topicName = match.groups.topic;
          if (!allowedTopics.has(topicName)) {
            const examples = [...allowedTopics]
              .sort()
              .map((t) => renderExampleFilename(filenamePattern, tierInfo, t))
              .join(', ');
            errors.push(
              `${relPosix}: "${topicName}" is not an allowed Tier ${tierInfo.tier} topic. ` +
                `Allowed topics: ${examples}. ` +
                `Update config/${KNOWLEDGE_BASE_DIR}/topic-constraints.config.json to add a new topic name.`,
            );
          }
        }
      }
    }

    const id = `tier${tierInfo.tier}/${relPosix.replace(/\.md$/, '')}`;
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
      canonical: data.canonical || null,
    };
    if (tierInfo.tier === 3) {
      topic.component = data.component;
    }
    topics.push(topic);
  }

  topics.sort((a, b) => a.tier - b.tier || a.path.localeCompare(b.path));
  return { topics, errors };
}

function buildShards(topics) {
  const topicsByTier = Object.fromEntries(SHARD_TIERS.map((t) => [t, []]));
  for (const topic of topics) {
    if (topicsByTier[topic.tier]) topicsByTier[topic.tier].push(topic);
  }

  return SHARD_TIERS.map((tier) => {
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
}

module.exports = {
  KNOWLEDGE_BASE_DIR,
  REPO_ROOT,
  FRONTMATTER_CONFIG_PATH,
  BODY_CONFIG_PATH,
  MARKDOWNLINT_CONFIG_PATH,
  TOPIC_CONSTRAINTS_CONFIG_PATH,
  SHARDS,
  SHARD_TIERS,
  shardPath,
  tierForFile,
  discoverTopicFiles,
  collectTopics,
  buildShards,
};
