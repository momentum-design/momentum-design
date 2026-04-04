// AI-Assisted
/**
 * @fileoverview Tests for connect command constants.
 */

import { EMIT_TARGET_OPTIONS, EMIT_TARGETS } from '../../../src/commands/connect/constants';
import { listEmitterTargets } from '../../../src/emitters/factory';

describe('connect command constants', () => {
  it('should expose registered emit targets', () => {
    expect(EMIT_TARGETS).toEqual(listEmitterTargets());
  });

  it('should format emit target options with all', () => {
    expect(EMIT_TARGET_OPTIONS).toContain('all');
    for (const target of EMIT_TARGETS) {
      expect(EMIT_TARGET_OPTIONS).toContain(target);
    }
  });
});
// End AI-Assisted
