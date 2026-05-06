// AI-Assisted
/**
 * @fileoverview Tests for report module.
 */

import {
  addCreatedFile,
  addError,
  addUnchangedFile,
  addUpdatedFile,
  addWarning,
  createEmptyComponentResult,
  createEmptyReport,
  createReportTimer,
  formatReportSummary,
  mergeResults,
} from '../../src/core/report';
import type { ComponentResult, GenerationReport } from '../../src/core/types';
import { GenerationStatus } from '../../src/core/types';

describe('createEmptyReport', () => {
  it('should create a report with success status', () => {
    const report = createEmptyReport();

    expect(report.status).toBe('success');
  });

  it('should create a report with empty arrays', () => {
    const report = createEmptyReport();

    expect(report.created).toEqual([]);
    expect(report.updated).toEqual([]);
    expect(report.unchanged).toEqual([]);
    expect(report.warnings).toEqual([]);
    expect(report.errors).toEqual([]);
  });

  it('should create a report with zero duration', () => {
    const report = createEmptyReport();

    expect(report.durationMs).toBe(0);
  });
});

describe('createReportTimer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-01-01T00:00:00Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should record start time', () => {
    const timer = createReportTimer();

    expect(timer.startTime).toBe(Date.now());
  });

  it('should calculates elapsed time on stop', () => {
    const timer = createReportTimer();

    jest.advanceTimersByTime(100);
    const elapsed = timer.stop();

    expect(elapsed).toBe(100);
  });

  it('should return different elapsed times for multiple stops', () => {
    const timer = createReportTimer();

    jest.advanceTimersByTime(50);
    const first = timer.stop();

    jest.advanceTimersByTime(50);
    const second = timer.stop();

    expect(first).toBe(50);
    expect(second).toBe(100);
  });
});

describe('createEmptyComponentResult', () => {
  it('should create result with undefined model', () => {
    const result = createEmptyComponentResult();

    expect(result.model).toBeUndefined();
  });

  it('should create result with empty arrays', () => {
    const result = createEmptyComponentResult();

    expect(result.created).toEqual([]);
    expect(result.updated).toEqual([]);
    expect(result.unchanged).toEqual([]);
    expect(result.warnings).toEqual([]);
    expect(result.errors).toEqual([]);
  });
});

describe('formatReportSummary', () => {
  it('should format basic report summary', () => {
    const report: GenerationReport = {
      status: GenerationStatus.Success,
      created: ['file1.ts'],
      updated: ['file2.ts', 'file3.ts'],
      unchanged: [],
      warnings: [],
      errors: [],
      durationMs: 150,
    };

    const summary = formatReportSummary(report);

    expect(summary).toContain('Status: success');
    expect(summary).toContain('Duration: 150ms');
    expect(summary).toContain('Created: 1');
    expect(summary).toContain('Updated: 2');
    expect(summary).toContain('Unchanged: 0');
  });

  it('should include warnings count when present', () => {
    const report: GenerationReport = {
      status: GenerationStatus.Warning,
      created: [],
      updated: [],
      unchanged: [],
      warnings: ['warning1', 'warning2'],
      errors: [],
      durationMs: 0,
    };

    const summary = formatReportSummary(report);

    expect(summary).toContain('Warnings: 2');
  });

  it('should include errors count when present', () => {
    const report: GenerationReport = {
      status: GenerationStatus.Error,
      created: [],
      updated: [],
      unchanged: [],
      warnings: [],
      errors: ['error1'],
      durationMs: 0,
    };

    const summary = formatReportSummary(report);

    expect(summary).toContain('Errors: 1');
  });

  it('should excludes warnings line when no warnings', () => {
    const report: GenerationReport = {
      status: GenerationStatus.Success,
      created: [],
      updated: [],
      unchanged: [],
      warnings: [],
      errors: [],
      durationMs: 0,
    };

    const summary = formatReportSummary(report);

    expect(summary).not.toContain('Warnings:');
  });
});

describe('mergeResults', () => {
  describe('positive cases', () => {
    it('should merge multiple results into single report', () => {
      const results: ComponentResult[] = [
        { model: undefined, created: ['a.ts'], updated: [], unchanged: [], warnings: [], errors: [] },
        { model: undefined, created: ['b.ts'], updated: ['c.ts'], unchanged: [], warnings: [], errors: [] },
      ];

      const report = mergeResults(results, 100);

      expect(report.created).toEqual(['a.ts', 'b.ts']);
      expect(report.updated).toEqual(['c.ts']);
      expect(report.durationMs).toBe(100);
    });

    it('should merge warnings from all results', () => {
      const results: ComponentResult[] = [
        { model: undefined, created: [], updated: [], unchanged: [], warnings: ['warn1'], errors: [] },
        { model: undefined, created: [], updated: [], unchanged: [], warnings: ['warn2'], errors: [] },
      ];

      const report = mergeResults(results, 0);

      expect(report.warnings).toEqual(['warn1', 'warn2']);
    });
  });

  describe('status determination', () => {
    it('should return success status when no errors or warnings', () => {
      const results: ComponentResult[] = [
        { model: undefined, created: ['a.ts'], updated: [], unchanged: [], warnings: [], errors: [] },
      ];

      const report = mergeResults(results, 0);

      expect(report.status).toBe('success');
    });

    it('should return warning status when only warnings present', () => {
      const results: ComponentResult[] = [
        { model: undefined, created: [], updated: [], unchanged: [], warnings: ['warn'], errors: [] },
      ];

      const report = mergeResults(results, 0);

      expect(report.status).toBe('warning');
    });

    it('should return error status when errors present', () => {
      const results: ComponentResult[] = [
        { model: undefined, created: [], updated: [], unchanged: [], warnings: [], errors: ['err'] },
      ];

      const report = mergeResults(results, 0);

      expect(report.status).toBe('error');
    });

    it('should return error status when both errors and warnings present', () => {
      const results: ComponentResult[] = [
        { model: undefined, created: [], updated: [], unchanged: [], warnings: ['warn'], errors: ['err'] },
      ];

      const report = mergeResults(results, 0);

      expect(report.status).toBe('error');
    });
  });

  describe('edge cases', () => {
    it('should return empty report for empty results array', () => {
      const report = mergeResults([], 50);

      expect(report.created).toEqual([]);
      expect(report.status).toBe('success');
      expect(report.durationMs).toBe(50);
    });
  });
});

describe('immutable result operations', () => {
  describe('addWarning', () => {
    it('should return new result with warning added', () => {
      const original = createEmptyComponentResult();
      const updated = addWarning(original, 'test warning');

      expect(updated.warnings).toEqual(['test warning']);
      expect(original.warnings).toEqual([]);
    });

    it('should append to existing warnings', () => {
      const original: ComponentResult = {
        ...createEmptyComponentResult(),
        warnings: ['first'],
      };
      const updated = addWarning(original, 'second');

      expect(updated.warnings).toEqual(['first', 'second']);
    });
  });

  describe('addError', () => {
    it('should return new result with error added', () => {
      const original = createEmptyComponentResult();
      const updated = addError(original, 'test error');

      expect(updated.errors).toEqual(['test error']);
      expect(original.errors).toEqual([]);
    });
  });

  describe('addCreatedFile', () => {
    it('should return new result with created file added', () => {
      const original = createEmptyComponentResult();
      const updated = addCreatedFile(original, '/path/to/file.ts');

      expect(updated.created).toEqual(['/path/to/file.ts']);
      expect(original.created).toEqual([]);
    });
  });

  describe('addUpdatedFile', () => {
    it('should return new result with updated file added', () => {
      const original = createEmptyComponentResult();
      const updated = addUpdatedFile(original, '/path/to/file.ts');

      expect(updated.updated).toEqual(['/path/to/file.ts']);
      expect(original.updated).toEqual([]);
    });
  });

  describe('addUnchangedFile', () => {
    it('should return new result with unchanged file added', () => {
      const original = createEmptyComponentResult();
      const updated = addUnchangedFile(original, '/path/to/file.ts');

      expect(updated.unchanged).toEqual(['/path/to/file.ts']);
      expect(original.unchanged).toEqual([]);
    });
  });
});
// End AI-Assisted
