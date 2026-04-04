/**
 * @fileoverview Tests for manifest batch diagnostics and error handling.
 */

import { type EmitResult, EmitterTarget, FileChangeReason, FileChangeStatus } from '../../src/core/types';
import type { Emitter } from '../../src/emitters/types';
import { createMemoryIoAdapter } from '../../src/io/adapter';
import { processManifestBatch } from '../../src/pipeline/manifest-batch';
import { createMockComponentModel } from '../helpers/fixtures';

describe('processManifestBatch', () => {
  const createModel = (tagName: string) =>
    createMockComponentModel({
      tagName,
      className: `Component${tagName}`,
      componentDir: `/repo/components/${tagName}`,
      filePath: `/repo/components/${tagName}/${tagName}.component.ts`,
      importPath: `components/${tagName}`,
    });

  const createEmitter = (target: EmitterTarget, emit: () => EmitResult): Emitter => ({
    target,
    emit,
  });

  it('should prefix warnings with component tag context', () => {
    const model = createModel('mdc-badge');
    const emitter = createEmitter(EmitterTarget.WebComponent, (): EmitResult => ({
      filePath: `${model.componentDir}/code-connect/badge.webcomponent.figma.ts`,
      content: 'generated',
      warnings: ['Property "variant" has unknown type.'],
    }));

    const aggregate = processManifestBatch([model], {
      emitters: [emitter],
      dryRun: true,
      force: false,
      io: createMemoryIoAdapter(),
    });

    expect(aggregate.warnings).toContain('[mdc-badge] Property "variant" has unknown type.');
  });

  it('should create files when an emission target does not yet exist', () => {
    const model = createModel('mdc-create');
    const filePath = `${model.componentDir}/code-connect/create.webcomponent.figma.ts`;
    const io = createMemoryIoAdapter();
    const emitter = createEmitter(EmitterTarget.WebComponent, (): EmitResult => ({
      filePath,
      content: 'generated',
    }));

    const aggregate = processManifestBatch([model], {
      emitters: [emitter],
      dryRun: false,
      force: false,
      io,
    });

    expect(io.readFile(filePath)).toBe('generated');

    const result = aggregate.items[0].value;
    expect(result.created).toContain(filePath);
    expect(result.fileChanges).toContainEqual({
      filePath,
      status: FileChangeStatus.Created,
      reason: FileChangeReason.NewFile,
    });
  });

  it('should force full-content overwrite for existing files', () => {
    const model = createModel('mdc-force');
    const filePath = `${model.componentDir}/code-connect/force.webcomponent.figma.ts`;
    const io = createMemoryIoAdapter({
      [filePath]: ['// BEGIN GENERATED', 'old content', '// END GENERATED'].join('\n'),
    });
    const emitter = createEmitter(EmitterTarget.WebComponent, (): EmitResult => ({
      filePath,
      content: 'force overwrite content',
      sections: [{ content: 'ignored due to force' }],
    }));

    const aggregate = processManifestBatch([model], {
      emitters: [emitter],
      dryRun: false,
      force: true,
      io,
    });

    expect(io.readFile(filePath)).toBe('force overwrite content');

    const result = aggregate.items[0].value;
    expect(result.updated).toContain(filePath);
    expect(result.fileChanges).toContainEqual({
      filePath,
      status: FileChangeStatus.Updated,
      reason: FileChangeReason.ContentUpdated,
    });
  });

  it('should apply section-based updates when markers are present', () => {
    const model = createModel('mdc-section');
    const filePath = `${model.componentDir}/code-connect/section.webcomponent.figma.ts`;
    const io = createMemoryIoAdapter({
      [filePath]: ['header', '// BEGIN GENERATED', 'old generated', '// END GENERATED', 'footer'].join('\n'),
    });
    const emitter = createEmitter(EmitterTarget.WebComponent, (): EmitResult => ({
      filePath,
      content: 'unused in section mode',
      sections: [{ content: 'new generated' }],
    }));

    const aggregate = processManifestBatch([model], {
      emitters: [emitter],
      dryRun: false,
      force: false,
      io,
    });

    const written = io.readFile(filePath);
    expect(written).toContain('new generated');
    expect(written).not.toContain('old generated');

    const result = aggregate.items[0].value;
    expect(result.updated).toContain(filePath);
    expect(result.fileChanges).toContainEqual({
      filePath,
      status: FileChangeStatus.Updated,
      reason: FileChangeReason.SectionUpdated,
    });
  });

  it('should preserve manual edits when section markers are missing', () => {
    const model = createModel('mdc-preserve');
    const filePath = `${model.componentDir}/code-connect/preserve.webcomponent.figma.ts`;
    const initialContent = 'manual content only';
    const io = createMemoryIoAdapter({ [filePath]: initialContent });
    const emitter = createEmitter(EmitterTarget.WebComponent, (): EmitResult => ({
      filePath,
      content: 'unused in section mode',
      sections: [{ content: 'new generated' }],
    }));

    const aggregate = processManifestBatch([model], {
      emitters: [emitter],
      dryRun: false,
      force: false,
      io,
    });

    expect(io.readFile(filePath)).toBe(initialContent);
    expect(aggregate.warnings).toContain(
      `[mdc-preserve] Generated section markers not found in ${filePath}. Skipping update to preserve manual edits.`,
    );

    const result = aggregate.items[0].value;
    expect(result.unchanged).toContain(filePath);
    expect(result.fileChanges).toContainEqual({
      filePath,
      status: FileChangeStatus.Unchanged,
      reason: FileChangeReason.Unchanged,
    });
  });

  it('should mark unchanged when writing full content that is identical', () => {
    const model = createModel('mdc-unchanged');
    const filePath = `${model.componentDir}/code-connect/unchanged.webcomponent.figma.ts`;
    const io = createMemoryIoAdapter({ [filePath]: 'same content' });
    const emitter = createEmitter(EmitterTarget.WebComponent, (): EmitResult => ({
      filePath,
      content: 'same content',
    }));

    const aggregate = processManifestBatch([model], {
      emitters: [emitter],
      dryRun: false,
      force: false,
      io,
    });

    const result = aggregate.items[0].value;
    expect(result.unchanged).toContain(filePath);
  });

  it('should stop processing after the first error when continueOnError is false', () => {
    const first = createModel('mdc-first');
    const second = createModel('mdc-second');
    const throwingEmitter: Emitter = {
      target: EmitterTarget.WebComponent,
      emit: () => {
        throw new Error('emit failed');
      },
    };

    const aggregate = processManifestBatch([first, second], {
      emitters: [throwingEmitter],
      dryRun: true,
      force: false,
      io: createMemoryIoAdapter(),
      continueOnError: false,
    });

    expect(aggregate.items).toHaveLength(1);
    expect(aggregate.errors).toHaveLength(1);
    expect(aggregate.errors[0]).toBe('[mdc-first] webcomponent: emit failed');
  });

  it('should continue processing after errors when continueOnError is true', () => {
    const first = createModel('mdc-first');
    const second = createModel('mdc-second');
    const throwingEmitter: Emitter = {
      target: EmitterTarget.WebComponent,
      emit: () => {
        throw new Error('emit failed');
      },
    };

    const aggregate = processManifestBatch([first, second], {
      emitters: [throwingEmitter],
      dryRun: true,
      force: false,
      io: createMemoryIoAdapter(),
      continueOnError: true,
    });

    expect(aggregate.items).toHaveLength(2);
    expect(aggregate.errors).toHaveLength(2);
    expect(aggregate.errors).toEqual([
      '[mdc-first] webcomponent: emit failed',
      '[mdc-second] webcomponent: emit failed',
    ]);
  });

  it('should stringify non-Error emitter failures', () => {
    const model = createModel('mdc-string-error');
    const thrownValue: unknown = 'string failure';
    const throwingEmitter: Emitter = {
      target: EmitterTarget.WebComponent,
      emit: () => {
        throw thrownValue;
      },
    };

    const aggregate = processManifestBatch([model], {
      emitters: [throwingEmitter],
      dryRun: true,
      force: false,
      io: createMemoryIoAdapter(),
      continueOnError: false,
    });

    expect(aggregate.errors).toEqual(['[mdc-string-error] webcomponent: string failure']);
  });

  it('should use the default node io adapter when no io option is provided', () => {
    const model = createModel('mdc-default-io');
    const filePath = `${model.componentDir}/code-connect/default-io.webcomponent.figma.ts`;
    const emitter = createEmitter(EmitterTarget.WebComponent, (): EmitResult => ({
      filePath,
      content: 'generated',
    }));

    const aggregate = processManifestBatch([model], {
      emitters: [emitter],
      dryRun: true,
      force: false,
    });

    expect(aggregate.items[0].value.created).toContain(filePath);
  });
});
