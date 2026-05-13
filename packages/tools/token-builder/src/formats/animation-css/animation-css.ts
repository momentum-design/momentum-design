// AI-Assisted
import { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';

import { toKebabCase } from '../../common';
import CONSTANTS from './constants';
import { resolveRefsCss, buildKeyframeBlock, KeyframeEntry, validateRefs } from '../animation/utils';

const ANIMATION_TYPES = new Set(['transition', 'keyframe', 'transitionCompound', 'keyframeCompound']);

class AnimationCssFormat {
  public get formatter(): SDFormatter {
    return ({ dictionary, options }): string => {
      const cssSelector = (options?.selector as string | undefined) ?? '.mds-animation';

      const keyframeBlocks: string[] = [];
      const variableLines: string[] = [];
      const validRefs = new Set(dictionary.allTokens.map((t) => t.path.join('.')));

      dictionary.allTokens.forEach((token) => {
        const tokenType = token.original.type as string;
        if (!ANIMATION_TYPES.has(tokenType)) return;

        const kebab = toKebabCase(token.path.at(-1) as string);
        // Use the original (pre-transform) value so that cross-file references
        // become var() expressions instead of their resolved values.
        const rawValue = String(token.original.value);
        validateRefs(rawValue, validRefs, token.path.join('.'));
        const resolvedValue = resolveRefsCss(rawValue);

        if (tokenType === 'transition' || tokenType === 'transitionCompound') {
          variableLines.push(`  --mds-transition-${kebab}: ${resolvedValue};`);
        } else if (tokenType === 'keyframe') {
          const kfName = `mds-animation-${kebab}`;
          const keyframes = (token.original.keyframes ?? []) as KeyframeEntry[];
          keyframes.forEach(({ from, to }) => {
            validateRefs(from, validRefs, `${token.path.join('.')}.from`);
            validateRefs(to, validRefs, `${token.path.join('.')}.to`);
          });
          keyframeBlocks.push(buildKeyframeBlock(kfName, keyframes, resolveRefsCss));
          variableLines.push(`  --mds-animation-${kebab}: ${resolvedValue};`);
        } else if (tokenType === 'keyframeCompound') {
          variableLines.push(`  --mds-animation-${kebab}: ${resolvedValue};`);
        }
      });

      const header = '/**\n * Do not edit directly\n */';
      const keyframesSection = keyframeBlocks.join('\n\n');
      const variablesSection = `${cssSelector} {\n${variableLines.join('\n')}\n}`;

      return `${[header, keyframesSection, variablesSection].filter(Boolean).join('\n\n')}\n`;
    };
  }

  public get name(): string {
    return AnimationCssFormat.CONSTANTS.NAME;
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

export default AnimationCssFormat;
// End AI-Assisted
