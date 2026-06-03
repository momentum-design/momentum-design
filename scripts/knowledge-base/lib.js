/* eslint-disable no-console */

/**
 * Shared helpers for the knowledge-base tooling.
 *
 * Two entry-point scripts consume this module:
 *
 *   - `generate-index.js` writes the tier-sharded `knowledge-base/index.*.json`
 *     files from whatever topic files currently exist. It does not enforce
 *     validation — it is a pure build step.
 *   - `validate-knowledge-base.js` enforces the frontmatter contract, topic
 *     constraints, and verifies that the generated index files on disk match
 *     what the generator would produce.
 *
 * All filesystem discovery, frontmatter parsing, schema construction, and
 * shard serialisation lives here so the two scripts cannot drift.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');
const Ajv = require('ajv');
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
    return { tier: 3, owner: component, component };
  }

  if (TIER1_DIR_RE.test(dir)) {
    return { tier: 1, owner: 'design-system' };
  }

  const tier2 = TIER2_DIR_RE.exec(dir);
  if (tier2) {
    return { tier: 2, owner: tier2.groups.pkgPath };
  }

  return null;
}

function composeSchema(frontmatterConfig, tier) {
  const def = frontmatterConfig.default || {};
  const override = (frontmatterConfig.tiers && frontmatterConfig.tiers[String(tier)]) || {};
  const required = Array.from(new Set([...(def.required || []), ...(override.required || [])]));
  const properties = { ...(def.properties || {}), ...(override.properties || {}) };
  return {
    type: 'object',
    required,
    properties,
    additionalProperties: true,
  };
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
 *     parses is included, even if individual fields fail validation.
 *   - `errors`: every validation diagnostic produced along the way. The
 *     generator ignores this list; the validator surfaces it.
 *
 * Topics are sorted (tier asc, then path asc) so the result is deterministic.
 *
 * Callers must supply the parsed config JSON for both the frontmatter contract
 * (`config/knowledge-base/content/frontmatter.config.json`) and topic constraints
 * (`config/knowledge-base/topic-constraints.config.json`). Loading lives in
 * the entry-point scripts so this module stays I/O-free for its config inputs.
 */
function collectTopics({ frontmatterConfig, topicConstraintsConfig }) {
  const tierConstraintsByTier = buildTierConstraints(topicConstraintsConfig);
  const ajv = new Ajv({ allErrors: true, strict: false });
  const validatorsByTier = {};
  const getValidator = (tier) => {
    if (!validatorsByTier[tier]) {
      validatorsByTier[tier] = ajv.compile(composeSchema(frontmatterConfig, tier));
    }
    return validatorsByTier[tier];
  };

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
      errors.push(`${matches[i]}: failed to read/parse frontmatter (${e.message})`);
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
      errors.push(`${relPosix}: failed to read/parse frontmatter (${e.message})`);
      continue;
    }
    const data = parsed.data || {};

    const validate = getValidator(tierInfo.tier);
    if (!validate(data)) {
      for (const err of validate.errors || []) {
        errors.push(`${relPosix}: frontmatter ${err.instancePath || '/'} ${err.message}`);
      }
    }

    if (data.tier !== undefined && data.tier !== tierInfo.tier) {
      errors.push(`${relPosix}: frontmatter tier (${data.tier}) does not match path tier (${tierInfo.tier}).`);
    }

    if (tierInfo.tier === 3 && data.component !== undefined && data.component !== tierInfo.component) {
      errors.push(
        `${relPosix}: frontmatter component (${data.component}) does not match parent folder (${tierInfo.component}).`,
      );
    }

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
      status: data.status,
      owner: data.owner,
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

// ---------------------------------------------------------------------------
// Body validation
// ---------------------------------------------------------------------------
//
// `validateBody` enforces the heading-structure contract declared in
// `config/knowledge-base/content/body.config.json` for one topic file. Every
// field exposed by that config is mechanically tested:
//
//   sections[].heading            → exact-match against actual heading text
//   sections[].level              → must match the markdown heading depth
//   sections[].required           → missing → error
//   sections[].recommended        → missing → warning (non-fatal)
//   sections[].description        → informational only, not enforced
//   sections[].rules.minSentences → leading prose under the heading must reach
//                                   this count (subSection content excluded)
//   sections[].rules.maxSentences → leading prose under the heading must not
//                                   exceed this count
//   sections[].subSections.level  → recursive validation at the declared level
//   sections[].subSections.sections → recursive validation against the list
//   conventions.topLevelHeading   → body must not contain a level-1 heading
//   conventions.headingCase       → enforced implicitly: actual heading text
//                                   must exactly match the configured heading
//                                   (which is authored in sentence case)
//   conventions.trailingColons    → if `false`, no heading may end with `:`
//   conventions.sectionLevel      → enforced implicitly: top-level expected
//                                   sections carry `level` and exact-match is
//                                   required
//   conventions.subSectionLevel   → enforced implicitly via `subSections.level`
//   conventions.maxSubSectionDepth → no actual heading may be deeper than this
//   conventions.sectionOrder      → enforced implicitly: expected sections are
//                                   walked in declaration order; later actual
//                                   headings that match an earlier expected
//                                   sibling are reported as out-of-order
//
// Headings inside fenced code blocks (``` or ~~~) are ignored.

const SENTENCE_RE = /[^.!?]+[.!?]+(?=\s|$)/g;
const FENCE_RE = /^(`{3,}|~{3,})/;
const HEADING_RE = /^(#{1,6}) +(.+)/;

function parseBodyHeadings(body) {
  const lines = body.split('\n');
  const headings = [];
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    const fm = FENCE_RE.exec(lines[i]);
    if (fm) { if (!fence) fence = fm[1][0]; else if (fence === fm[1][0]) fence = null; continue; }
    if (fence) continue;
    const m = HEADING_RE.exec(lines[i]);
    if (m) headings.push({ level: m[1].length, text: m[2].trim(), line: i });
  }
  headings.forEach((h, i) => { h.endLine = headings[i + 1]?.line ?? lines.length; });
  return { headings, lines };
}

function countSentences(text) {
  const cleaned = text.replace(/`[^`]*`/g, '').trim();
  if (!cleaned) return 0;
  const matches = cleaned.match(SENTENCE_RE);
  return matches ? matches.length : 1;
}

function resolveBodySpec(bodyConfig, tier) {
  const def = bodyConfig.default || {};
  const override = (bodyConfig.tiers && bodyConfig.tiers[String(tier)]) || {};
  const sections = override.sections || def.sections || [];
  const conventions = { ...(def.conventions || {}), ...(override.conventions || {}) };
  return { sections, conventions };
}

function hashes(level) {
  return '#'.repeat(level);
}

function validateBody({ relPosix, body, tier, bodyConfig }) {
  const errors = [];
  const warnings = [];
  const { sections: expectedSections, conventions } = resolveBodySpec(bodyConfig, tier);
  const { headings, lines } = parseBodyHeadings(body);

  // Conventions that apply to every heading regardless of expected structure.
  if (conventions.topLevelHeading) {
    for (const h of headings) {
      if (h.level === 1) {
        errors.push(
          `${relPosix}: body must not contain a level-1 heading ("# ${h.text}"); frontmatter \`title\` is the implicit H1.`,
        );
      }
    }
  }
  if (typeof conventions.maxSubSectionDepth === 'number') {
    for (const h of headings) {
      if (h.level > conventions.maxSubSectionDepth) {
        errors.push(
          `${relPosix}: heading "${hashes(h.level)} ${h.text}" is deeper (level ${h.level}) than maxSubSectionDepth (${conventions.maxSubSectionDepth}).`,
        );
      }
    }
  }
  if (conventions.trailingColons === false) {
    for (const h of headings) {
      if (h.text.endsWith(':')) {
        errors.push(
          `${relPosix}: heading "${hashes(h.level)} ${h.text}" must not end with a trailing colon (conventions.trailingColons=false).`,
        );
      }
    }
  }

  // No structured sections to enforce for this tier — conventions-only validation done.
  if (!expectedSections || expectedSections.length === 0) {
    return { errors, warnings };
  }

  const cursor = { i: 0 };

  function walk(expectedList) {
    for (let ei = 0; ei < expectedList.length; ei += 1) {
      const exp = expectedList[ei];

      // Consume any actual headings at >= exp.level that are not the next
      // expected sibling. Stop if we hit a heading that matches `exp` or a
      // later expected sibling at the same level (so the missing-section
      // error fires correctly), or a heading shallower than exp.level (which
      // belongs to an ancestor frame). Level-1 headings are reported via the
      // `topLevelHeading` convention and are skipped here so they don't
      // collapse the structural walk.
      while (cursor.i < headings.length) {
        const h = headings[cursor.i];
        if (h.level === 1) {
          cursor.i += 1;
          continue;
        }
        if (h.level < exp.level) return;
        if (h.level === exp.level && h.text === exp.heading) break;
        if (h.level === exp.level) {
          const isFutureSibling = expectedList.slice(ei + 1).some((s) => s.level === h.level && s.heading === h.text);
          if (isFutureSibling) break;
        }
        errors.push(`${relPosix}: unknown heading "${hashes(h.level)} ${h.text}" is not declared in body.config.json.`);
        cursor.i += 1;
        // Skip the unknown heading's own subtree so we don't double-report it.
        while (cursor.i < headings.length && headings[cursor.i].level > h.level) {
          errors.push(
            `${relPosix}: unknown heading "${hashes(headings[cursor.i].level)} ${headings[cursor.i].text}" is not declared in body.config.json.`,
          );
          cursor.i += 1;
        }
      }

      const matched =
        cursor.i < headings.length && headings[cursor.i].level === exp.level && headings[cursor.i].text === exp.heading;

      if (!matched) {
        const msg = `${relPosix}: missing heading "${hashes(exp.level)} ${exp.heading}".`;
        if (exp.required) {
          errors.push(msg);
        } else if (exp.recommended) {
          warnings.push(msg);
        }
        // Do not advance cursor; the next expected section will retry against
        // the same actual heading position.
        continue;
      }

      const actual = headings[cursor.i];
      cursor.i += 1;

      const subList = (exp.subSections && exp.subSections.sections) || [];
      walk(subList);

      if (exp.rules) {
        // Leading prose under this heading = lines between this heading and
        // the next actual heading (which is either a declared child consumed
        // by `walk(subList)` above, an unknown deeper heading, or the next
        // sibling/ancestor). `actual.endLine` was pre-computed against the
        // full heading list, so it captures exactly that boundary.
        const prose = lines.slice(actual.line + 1, actual.endLine).join('\n');
        const sentences = countSentences(prose);
        if (typeof exp.rules.minSentences === 'number' && sentences < exp.rules.minSentences) {
          errors.push(
            `${relPosix}: section "${hashes(exp.level)} ${exp.heading}" has ${sentences} sentence(s); rules.minSentences is ${exp.rules.minSentences}.`,
          );
        }
        if (typeof exp.rules.maxSentences === 'number' && sentences > exp.rules.maxSentences) {
          errors.push(
            `${relPosix}: section "${hashes(exp.level)} ${exp.heading}" has ${sentences} sentence(s); rules.maxSentences is ${exp.rules.maxSentences}.`,
          );
        }
      }
    }
  }

  walk(expectedSections);

  // Any actual headings left over after walking the entire expected tree are
  // not declared in the config.
  while (cursor.i < headings.length) {
    const h = headings[cursor.i];
    // Level-1 headings were already reported via `topLevelHeading`.
    if (h.level !== 1) {
      errors.push(`${relPosix}: unknown heading "${hashes(h.level)} ${h.text}" is not declared in body.config.json.`);
    }
    cursor.i += 1;
  }

  return { errors, warnings };
}

module.exports = {
  KNOWLEDGE_BASE_DIR,
  REPO_ROOT,
  FRONTMATTER_CONFIG_PATH,
  BODY_CONFIG_PATH,
  TOPIC_CONSTRAINTS_CONFIG_PATH,
  SHARDS,
  SHARD_TIERS,
  shardPath,
  collectTopics,
  buildShards,
  validateBody,
};
