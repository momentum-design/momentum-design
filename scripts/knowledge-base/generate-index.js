#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Knowledge-base index generator.
 *
 * Globs the repo for `knowledge-base/**\/*.md` topic files (excluding
 * `images/` asset folders), parses required frontmatter, validates it against
 * the configurable schema in `config/knowledge-base/frontmatter.config.json`,
 * and writes a deterministic `knowledge-base/index.json` at the repo root.
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

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const CONFIG_PATH = path.join(REPO_ROOT, "config", "knowledge-base", "frontmatter.config.json");
const TOPICS_CONFIG_PATH = path.join(REPO_ROOT, "config", "knowledge-base", "topic-constraints.config.json");
const INDEX_PATH = path.join(REPO_ROOT, "knowledge-base", "index.json");
const GENERATOR_REL = "scripts/knowledge-base/generate-index.js";

const ASSET_DIR_NAMES = new Set(["images"]);
const COMPONENTS_TIER3_PREFIX = "packages/components/src/components/";

// Glob roots for tier discovery. `scripts/`, `config/`, `.github/`, `.vscode/`,
// `scratch/` are intentionally excluded so the generator's own `knowledge-base`
// tooling folders are never treated as content.
const TOPIC_GLOBS = [
  "knowledge-base/*.md",
  "packages/*/knowledge-base/*.md",
  "packages/*/*/knowledge-base/*.md",
  "packages/components/src/components/*/knowledge-base/*.md",
];
const GLOB_IGNORE = ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.yarn/**"];

function tierForFile(relPosix) {
  const dir = path.posix.dirname(relPosix);
  // Tier 3: packages/components/src/components/<comp>/knowledge-base
  if (dir.startsWith(COMPONENTS_TIER3_PREFIX) && dir.endsWith("/knowledge-base")) {
    const component = dir.slice(COMPONENTS_TIER3_PREFIX.length, -"/knowledge-base".length);
    if (component && !component.includes("/")) {
      return { tier: 3, owner: component, component };
    }
  }
  // Tier 1: knowledge-base/<topic>.md
  if (dir === "knowledge-base") {
    return { tier: 1, owner: "design-system" };
  }
  // Tier 2: packages/<pkg>/knowledge-base or packages/<group>/<pkg>/knowledge-base
  if (dir.startsWith("packages/") && dir.endsWith("/knowledge-base")) {
    const pkgPath = dir.slice("packages/".length, -"/knowledge-base".length);
    return { tier: 2, owner: pkgPath };
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

  const matches = TOPIC_GLOBS.flatMap((pattern) =>
    glob.sync(pattern, {
      cwd: REPO_ROOT,
      ignore: GLOB_IGNORE,
      nodir: true,
      dot: false,
    }),
  );
  const uniqueMatches = Array.from(new Set(matches));

  // Detect unexpected non-asset subdirectories inside any knowledge-base folder.
  const kbDirs = glob.sync("**/knowledge-base/", {
    cwd: REPO_ROOT,
    ignore: [...GLOB_IGNORE, "config/**", "scripts/**", ".github/**", ".vscode/**", "scratch/**"],
  });
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

  for (const relPosix of uniqueMatches) {
    const tierInfo = tierForFile(relPosix);
    if (!tierInfo) {
      errors.push(`Cannot determine tier for topic file: ${relPosix}`);
      continue;
    }

    let parsed;
    try {
      const raw = fs.readFileSync(path.join(REPO_ROOT, relPosix), "utf8");
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
            `Update config/knowledge-base/topic-constraints.config.json to add a new topic name.`,
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

  const output = {
    $schema: "../config/knowledge-base/index.schema.json",
    _comment: "GENERATED FILE — DO NOT HAND-EDIT. Run `yarn knowledge-base:index` to regenerate.",
    generatedFrom: GENERATOR_REL,
    topics,
  };
  const serialized = `${JSON.stringify(output, null, 2)}\n`;

  if (check) {
    let existing = null;
    try {
      existing = fs.readFileSync(INDEX_PATH, "utf8");
    } catch {
      console.error("knowledge-base/index.json is missing. Run `yarn knowledge-base:index`.");
      process.exit(1);
    }
    if (existing !== serialized) {
      console.error("knowledge-base/index.json is out of date. Run `yarn knowledge-base:index` and commit the result.");
      process.exit(1);
    }
    console.log("knowledge-base/index.json is up to date.");
    return;
  }

  fs.writeFileSync(INDEX_PATH, serialized);
  console.log(
    `Wrote ${path.relative(REPO_ROOT, INDEX_PATH)} (${topics.length} topic${topics.length === 1 ? "" : "s"}).`,
  );
}

main();
