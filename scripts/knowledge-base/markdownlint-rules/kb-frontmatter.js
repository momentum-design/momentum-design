// AI-Assisted
'use strict';

/**
 * Custom markdownlint rule: KB001 / kb-frontmatter-fields
 *
 * Validates the YAML frontmatter of every knowledge-base topic file against
 * the schema defined in config/knowledge-base/content/frontmatter.config.json.
 *
 * Also enforces:
 *   - The `tier` frontmatter field matches the tier inferred from the file path.
 *   - The `component` field (tier 3 only) matches the component folder name.
 */

const path = require('path');
const matter = require('gray-matter');
const Ajv = require('ajv');
const { REPO_ROOT, FRONTMATTER_CONFIG_PATH, tierForFile } = require('../lib');

const frontmatterConfig = require(FRONTMATTER_CONFIG_PATH);
const ajv = new Ajv({ allErrors: true, strict: false });

/** Compose a JSON Schema for a given tier by merging default + tier overrides. */
function composeSchema(tier) {
  const def = frontmatterConfig.default || {};
  const override = (frontmatterConfig.tiers && frontmatterConfig.tiers[String(tier)]) || {};
  const required = Array.from(new Set([...(def.required || []), ...(override.required || [])]));
  const properties = { ...(def.properties || {}), ...(override.properties || {}) };
  return { type: 'object', required, properties, additionalProperties: true };
}

const validatorCache = {};

function getValidator(tier) {
  if (!validatorCache[tier]) {
    validatorCache[tier] = ajv.compile(composeSchema(tier));
  }
  return validatorCache[tier];
}

module.exports = {
  names: ['KB001', 'kb-frontmatter-fields'],
  description: 'Knowledge-base topic must have valid frontmatter fields.',
  tags: ['knowledge-base'],
  parser: 'micromark',
  // eslint-disable-next-line object-shorthand
  function: function kbFrontmatterFields(params, onError) {
    const relPosix = path.relative(REPO_ROOT, params.name).replace(/\\/g, '/');
    const tierInfo = tierForFile(relPosix);
    if (!tierInfo) return;

    let data = {};
    try {
      data = matter(params.frontMatterLines.join('\n')).data || {};
    } catch (e) {
      onError({ lineNumber: 1, detail: `failed to parse frontmatter: ${e.message}` });
      return;
    }

    const validate = getValidator(tierInfo.tier);
    if (!validate(data)) {
      for (const err of validate.errors || []) {
        onError({ lineNumber: 1, detail: `frontmatter ${err.instancePath || '/'} ${err.message}` });
      }
    }

    if (data.tier !== undefined && data.tier !== tierInfo.tier) {
      onError({
        lineNumber: 1,
        detail: `frontmatter tier (${data.tier}) does not match path tier (${tierInfo.tier})`,
      });
    }

    if (tierInfo.tier === 3 && data.component !== undefined && data.component !== tierInfo.component) {
      onError({
        lineNumber: 1,
        detail: `frontmatter component ("${data.component}") does not match parent folder ("${tierInfo.component}")`,
      });
    }
  },
};
// End AI-Assisted
