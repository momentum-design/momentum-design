// AI-Assisted
/**
 * @fileoverview Tests for emit target parsing.
 */

import { formatEmitTargetOptions, parseEmitTargets } from '../../src/core/emit-targets';
import { EmitterTarget } from '../../src/core/types';

describe('parseEmitTargets', () => {
  it('should return all targets for "all"', () => {
    const targets = parseEmitTargets('all');

    expect(targets).toEqual([EmitterTarget.WebComponent, EmitterTarget.React]);
  });

  it('should parse comma-separated targets with normalization', () => {
    const targets = parseEmitTargets('react, webcomponent');

    expect(targets).toEqual([EmitterTarget.React, EmitterTarget.WebComponent]);
  });

  it('should deduplicate repeated targets while preserving order', () => {
    const targets = parseEmitTargets('react,react,webcomponent,react');

    expect(targets).toEqual([EmitterTarget.React, EmitterTarget.WebComponent]);
  });

  it('should throw on invalid targets', () => {
    expect(() => parseEmitTargets('react,unknown')).toThrow(
      'Invalid emit targets: unknown. Valid targets are: webcomponent, react, all.',
    );
  });

  it('should throw on empty input', () => {
    expect(() => parseEmitTargets('')).toThrow('Emit targets cannot be empty.');
  });

  it('should throw when only separators are provided', () => {
    expect(() => parseEmitTargets(' , , ')).toThrow('No valid emit targets found.');
  });

  it('should throw when no emit targets are registered', () => {
    expect(() => parseEmitTargets('webcomponent', [])).toThrow('No emit targets registered.');
  });

  it('should format emit target options with defaults', () => {
    const options = formatEmitTargetOptions();

    expect(options).toContain('all');
  });
});
// End AI-Assisted
