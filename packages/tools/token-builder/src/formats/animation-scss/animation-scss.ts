// AI-Assisted
import { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';

import { toKebabCase } from '../../common';
import CONSTANTS from './constants';
import { resolveRefsScss, buildKeyframeBlock, KeyframeEntry, validateRefs } from '../animation/utils';

const ANIMATION_TYPES = new Set(['transition', 'keyframe', 'transitionCompound', 'keyframeCompound']);

class AnimationScssFormat {
  public get formatter(): SDFormatter {
    return ({ dictionary }): string => {
      const keyframeBlocks: string[] = [];
      const variableLines: string[] = [];
      const validRefs = new Set(dictionary.allTokens.map((t) => t.path.join('.')));

      dictionary.allTokens.forEach((token) => {
        const tokenType = token.original.type as string;
        if (!ANIMATION_TYPES.has(tokenType)) return;

        const kebab = toKebabCase(token.path.at(-1) as string);
        // Use the original (pre-transform) value so that cross-file references
        // become $mds-* SCSS variable references instead of resolved values.
        const rawValue = String(token.original.value);
        validateRefs(rawValue, validRefs, token.path.join('.'));
        const resolvedValue = resolveRefsScss(rawValue);

        if (tokenType === 'transition' || tokenType === 'transitionCompound') {
          variableLines.push(`$mds-transition-${kebab}: ${resolvedValue};`);
        } else if (tokenType === 'keyframe') {
          const kfName = `mds-animation-${kebab}`;
          const keyframes = (token.original.keyframes ?? []) as KeyframeEntry[];
          keyframeBlocks.push(buildKeyframeBlock(kfName, keyframes));
          variableLines.push(`$mds-animation-${kebab}: ${resolvedValue};`);
        } else if (tokenType === 'keyframeCompound') {
          variableLines.push(`$mds-animation-${kebab}: ${resolvedValue};`);
        }
      });

      // SCSS variables are file-level — no class selector wrapper.
      // @keyframes blocks are standard CSS and valid at the top level of a .scss file.
      const header = '/**\n * Do not edit directly\n */';
      const keyframesSection = keyframeBlocks.join('\n\n');
      const variablesSection = variableLines.join('\n');

      return `${[header, keyframesSection, variablesSection].filter(Boolean).join('\n\n')}\n`;
    };
  }

  public get name(): string {
    return AnimationScssFormat.CONSTANTS.NAME;
  }

  public get sdConfig(): SDFormat {
    return {
      name: this.name,
      formatter: this.formatter,
    };
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default AnimationScssFormat;
// End AI-Assisted
