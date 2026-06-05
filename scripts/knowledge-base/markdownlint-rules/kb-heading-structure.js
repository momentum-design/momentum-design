'use strict';

/**
 * Custom markdownlint rules for knowledge-base heading-structure validation.
 *
 * Two rules are exported (markdownlint accepts an array of rule objects):
 *
 *   KB002 (kb-required-heading)     — Missing required headings are errors.
 *   KB003 (kb-recommended-heading)  — Missing recommended headings are warnings
 *                                     (treated as non-fatal by the validator).
 *
 * Three rules are exported (markdownlint accepts an array of rule objects):
 *
 *   KB002 (kb-required-heading)     — Missing required headings are errors.
 *   KB003 (kb-recommended-heading)  — Missing recommended headings are warnings
 *                                     (treated as non-fatal by the validator).
 *   KB004 (kb-unknown-heading)      — Headings absent from body.config.json are errors.
 *
 * All rules read the heading specification from `body.config.json`, which the
 * validator passes as `params.config` under the rule name keys:
 *
 *   markdownlintConfig['KB002'] = bodyConfig;
 *   markdownlintConfig['KB003'] = bodyConfig;
 *   markdownlintConfig['KB004'] = bodyConfig;
 *
 * Config shape expected (subset of body.config.json):
 *
 *   {
 *     tiers: {
 *       "3": {
 *         sections: [
 *           {
 *             heading: "Overview",    // heading text (case-insensitive match)
 *             level: 2,               // expected heading level
 *             required: true,
 *             recommended: true,
 *             subSections: {
 *               sections: [ ... ]    // recursive; same shape
 *             }
 *           }, ...
 *         ]
 *       }
 *     }
 *   }
 *
 * A section is only considered absent when its parent section is present but
 * the section itself is not found within its parent's subtree. Sub-sections of
 * an absent parent are never reported (the parent violation is enough).
 */

const path = require('path');
const { tierForFile, REPO_ROOT } = require('../lib');

// Matches a markdown ATX heading line: `## Heading text`
const HEADING_RE = /^(#{1,6})\s+(.+)/;

/**
 * Extract headings from micromark tokens. Markdownlint pre-strips frontmatter
 * and micromark only surfaces real ATX headings (not those inside code blocks).
 *
 * @param {import('markdownlint').RuleParams} params
 * @returns {{ level: number, text: string, lineNumber: number }[]}
 */
function getHeadings(params) {
  return params.parsers.micromark.tokens
    .filter((t) => t.type === 'atxHeading')
    .map((t) => {
      const m = HEADING_RE.exec(params.lines[t.startLine - 1]);
      return m ? { level: m[1].length, text: m[2].trim(), lineNumber: t.startLine } : null;
    })
    .filter(Boolean);
}

/**
 * Extract the headings that belong to the section whose heading is at
 * `headings[parentIdx]`. A child heading is any heading deeper than the
 * parent's level that appears before the next sibling-or-ancestor heading.
 *
 * @param {{ level: number, text: string, lineNumber: number }[]} headings
 * @param {number} parentIdx  Index of the parent heading in `headings`.
 * @returns {{ level: number, text: string, lineNumber: number }[]}
 */
function getSectionChildren(headings, parentIdx) {
  const parentLevel = headings[parentIdx].level;
  const children = [];
  for (let i = parentIdx + 1; i < headings.length; i++) {
    if (headings[i].level <= parentLevel) break;
    children.push(headings[i]);
  }
  return children;
}

/**
 * Walk the `sections` spec against `headings`, collecting violations.
 *
 * Each violation has:
 *   - `heading`    – formatted heading string (e.g. "## Overview")
 *   - `required`   – boolean
 *   - `recommended`– boolean
 *   - `lineNumber` – line to report (last line of the scope for missing headings)
 *
 * Sub-sections are only checked when their parent heading is found in the
 * headings list. An absent optional parent suppresses its children entirely.
 *
 * @param {{ heading: string, level: number, required: boolean, recommended: boolean, subSections?: object }[]} sections
 * @param {{ level: number, text: string, lineNumber: number }[]} headings
 * @param {number} fallbackLineNumber  Line number to use when the section is missing.
 * @returns {{ heading: string, required: boolean, recommended: boolean, lineNumber: number }[]}
 */
function collectViolations(sections, headings, fallbackLineNumber) {
  const violations = [];
  let searchFrom = 0;

  for (const section of sections) {
    let foundIdx = -1;
    for (let i = searchFrom; i < headings.length; i++) {
      if (headings[i].level === section.level && headings[i].text.toLowerCase() === section.heading.toLowerCase()) {
        foundIdx = i;
        break;
      }
    }

    if (foundIdx === -1) {
      if (section.required || section.recommended) {
        violations.push({
          heading: `${'#'.repeat(section.level)} ${section.heading}`,
          required: !!section.required,
          recommended: !!section.recommended,
          lineNumber: fallbackLineNumber,
        });
      }
      // Do not recurse: sub-section violations are suppressed when the parent
      // is absent to avoid cascading noise.
    } else {
      searchFrom = foundIdx + 1;
      const subSectionList = section.subSections && section.subSections.sections;
      if (subSectionList && subSectionList.length > 0) {
        const children = getSectionChildren(headings, foundIdx);
        const subFallback =
          children.length > 0 ? children[children.length - 1].lineNumber : headings[foundIdx].lineNumber;
        violations.push(...collectViolations(subSectionList, children, subFallback));
      }
    }
  }

  return violations;
}

/**
 * Resolve the section spec for `tier` from the body config.
 *
 * @param {object} bodyConfig
 * @param {number} tier
 * @returns {{ heading: string, level: number, required: boolean, recommended: boolean, subSections?: object }[]}
 */
function resolveSpec(bodyConfig, tier) {
  const tierOverride = bodyConfig.tiers && bodyConfig.tiers[String(tier)];
  if (tierOverride && tierOverride.sections) return tierOverride.sections;
  return (bodyConfig.default && bodyConfig.default.sections) || [];
}

/**
 * Recursively build a Set of all allowed heading identifiers from the spec.
 * Each identifier is a `level:text` string (text normalised to lower-case).
 *
 * @param {object[]} sections
 * @param {Set<string>} [acc]
 * @returns {Set<string>}
 */
function buildAllowedSet(sections, acc = new Set()) {
  for (const section of sections) {
    acc.add(`${section.level}:${section.heading.toLowerCase()}`);
    const subList = section.subSections && section.subSections.sections;
    if (subList && subList.length > 0) {
      buildAllowedSet(subList, acc);
    }
  }
  return acc;
}

// ---------------------------------------------------------------------------
// Rule factory — shared logic; `filter` decides which violations to report.
// ---------------------------------------------------------------------------

function makeRule({ names, description, filter }) {
  return {
    names,
    description,
    tags: ['knowledge-base', 'headings'],
    parser: 'micromark',
    function(params, onError) {
      const bodyConfig = params.config;
      if (!bodyConfig || !bodyConfig.tiers) return;

      const relPath = path.relative(REPO_ROOT, params.name).replace(/\\/g, '/');
      const tierInfo = tierForFile(relPath);
      if (!tierInfo) return;

      const sections = resolveSpec(bodyConfig, tierInfo.tier);
      if (!sections || sections.length === 0) return;

      const headings = getHeadings(params);
      const violations = collectViolations(sections, headings, params.lines.length);

      for (const v of violations.filter(filter)) {
        onError({ lineNumber: v.lineNumber, detail: v.heading });
      }
    },
  };
}

// ---------------------------------------------------------------------------
// Exported rules
// ---------------------------------------------------------------------------

const unknownHeadingRule = {
  names: ['KB004', 'kb-unknown-heading'],
  description: 'Heading is not defined in body.config.json — custom headings are not allowed',
  tags: ['knowledge-base', 'headings'],
  parser: 'micromark',
  function(params, onError) {
    const bodyConfig = params.config;
    if (!bodyConfig || !bodyConfig.tiers) return;

    const relPath = path.relative(REPO_ROOT, params.name).replace(/\\/g, '/');
    const tierInfo = tierForFile(relPath);
    if (!tierInfo) return;

    const sections = resolveSpec(bodyConfig, tierInfo.tier);
    if (!sections || sections.length === 0) return;

    const allowed = buildAllowedSet(sections);
    for (const h of getHeadings(params)) {
      const key = `${h.level}:${h.text.toLowerCase()}`;
      if (!allowed.has(key)) {
        onError({ lineNumber: h.lineNumber, detail: `${'#'.repeat(h.level)} ${h.text}` });
      }
    }
  },
};

module.exports = [
  makeRule({
    names: ['KB002', 'kb-required-heading'],
    description: 'Required knowledge-base headings must be present (body.config.json)',
    filter: (v) => v.required,
  }),
  makeRule({
    names: ['KB003', 'kb-recommended-heading'],
    description: 'Recommended knowledge-base headings should be present (body.config.json)',
    filter: (v) => !v.required && v.recommended,
  }),
  unknownHeadingRule,
];
