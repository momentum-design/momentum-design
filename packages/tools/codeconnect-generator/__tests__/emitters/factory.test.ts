// AI-Assisted
/**
 * @fileoverview Tests for emitter factory module.
 */

import { EmitterTarget } from '../../src/core/types';
import {
  createEmitter,
  createEmitters,
  listEmitterTargets,
} from '../../src/emitters/factory';
import { FigmaReactEmitter } from '../../src/emitters/figma-react';
import { FigmaWebComponentEmitter } from '../../src/emitters/figma-webcomponent';
import type { Emitter } from '../../src/emitters/types';

describe('createEmitters', () => {
  describe('positive cases', () => {
    it('should create WebComponent emitter when target is webcomponent', () => {
      const emitters = createEmitters({ targets: [EmitterTarget.WebComponent] });

      expect(emitters).toHaveLength(1);
      expect(emitters[0]).toBeInstanceOf(FigmaWebComponentEmitter);
    });

    it('should create React emitter when target is react', () => {
      const emitters = createEmitters({ targets: [EmitterTarget.React] });

      expect(emitters).toHaveLength(1);
      expect(emitters[0]).toBeInstanceOf(FigmaReactEmitter);
    });

    it('should create both emitters when both targets are specified', () => {
      const emitters = createEmitters({
        targets: [EmitterTarget.WebComponent, EmitterTarget.React],
      });

      expect(emitters).toHaveLength(2);
      expect(emitters[0]).toBeInstanceOf(FigmaWebComponentEmitter);
      expect(emitters[1]).toBeInstanceOf(FigmaReactEmitter);
    });

    it('should create a single emitter via createEmitter', () => {
      const emitter = createEmitter(EmitterTarget.WebComponent);

      expect(emitter).toBeInstanceOf(FigmaWebComponentEmitter);
    });
  });

  describe('negative cases', () => {
    it('should return empty array when no targets specified', () => {
      const emitters = createEmitters({ targets: [] });

      expect(emitters).toEqual([]);
    });

    it('should throw when an unknown target is requested', () => {
      expect(() => createEmitter('unknown' as EmitterTarget)).toThrow('No emitter registered for target: unknown');
    });
  });

  describe('edge cases', () => {
    it('should do not create duplicate emitters for repeated targets', () => {
      const emitters = createEmitters({
        targets: [EmitterTarget.WebComponent, EmitterTarget.WebComponent],
      });

      expect(emitters).toHaveLength(1);
      expect(emitters[0]).toBeInstanceOf(FigmaWebComponentEmitter);
    });

    it('should preserve order: WebComponent before React', () => {
      const emitters = createEmitters({
        targets: [EmitterTarget.React, EmitterTarget.WebComponent],
      });

      expect(emitters).toHaveLength(2);
      expect(emitters[0]).toBeInstanceOf(FigmaWebComponentEmitter);
      expect(emitters[1]).toBeInstanceOf(FigmaReactEmitter);
    });
  });
});
describe('listEmitterTargets', () => {
  it('should include all emitter targets', () => {
    expect(listEmitterTargets()).toEqual([EmitterTarget.WebComponent, EmitterTarget.React]);
  });
});

describe('emitter plugin registry', () => {
  const customTarget = 'custom-test-target' as EmitterTarget;
  const duplicateTarget = 'duplicate-target' as EmitterTarget;

  const createCustomEmitter = (): Emitter => ({
    target: customTarget,
    emit: () => ({
      filePath: '/tmp/custom.figma.ts',
      content: '// custom',
    }),
  });

  it('should register and resolve plugin metadata', () => {
    jest.isolateModules(() => {
      const {
        createEmitter,
        getEmitterMetadata,
        hasEmitterPlugin,
        registerEmitterPlugin,
      } = require('../../src/emitters/factory') as typeof import('../../src/emitters/factory');

      registerEmitterPlugin({
        target: customTarget,
        factory: createCustomEmitter,
        metadata: {
          fileExtension: '.custom.figma.ts',
          displayName: 'Custom',
          description: 'Custom emitter',
        },
      });

      expect(hasEmitterPlugin(customTarget)).toBe(true);
      expect(createEmitter(customTarget).target).toBe(customTarget);

      const metadata = getEmitterMetadata(customTarget);
      expect(metadata.displayName).toBe('Custom');
      expect(metadata.fileExtension).toBe('.custom.figma.ts');
    });
  });

  it('should throw when registering a duplicate plugin target', () => {
    jest.isolateModules(() => {
      const { registerEmitterPlugin } = require('../../src/emitters/factory') as typeof import(
        '../../src/emitters/factory'
      );

      registerEmitterPlugin({
        target: duplicateTarget,
        factory: createCustomEmitter,
        metadata: {
          fileExtension: '.duplicate.figma.ts',
          displayName: 'Duplicate',
          description: 'First registration',
        },
      });

      expect(() => {
        registerEmitterPlugin({
          target: duplicateTarget,
          factory: createCustomEmitter,
          metadata: {
            fileExtension: '.duplicate.figma.ts',
            displayName: 'Duplicate',
            description: 'Second registration',
          },
        });
      }).toThrow('Emitter plugin already registered for target: duplicate-target');
    });
  });

  it('should throw when requesting metadata for an unknown target', () => {
    jest.isolateModules(() => {
      const { getEmitterMetadata } = require('../../src/emitters/factory') as typeof import(
        '../../src/emitters/factory'
      );
      expect(() => getEmitterMetadata('missing-target' as EmitterTarget)).toThrow(
        'No emitter registered for target: missing-target',
      );
    });
  });

  it('should return metadata for all registered emitters', () => {
    jest.isolateModules(() => {
      const { getAllEmitterMetadata } = require('../../src/emitters/factory') as typeof import(
        '../../src/emitters/factory'
      );
      const metadata = getAllEmitterMetadata();

      expect(metadata.get(EmitterTarget.WebComponent)?.fileExtension).toBe('.webcomponent.figma.ts');
      expect(metadata.get(EmitterTarget.React)?.fileExtension).toBe('.react.figma.tsx');
      expect(metadata.size).toBeGreaterThanOrEqual(2);
    });
  });
});
// End AI-Assisted
