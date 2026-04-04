// AI-Assisted
/**
 * @fileoverview Tests for CLI global options helper.
 */

import { getGlobalOptions } from '../../src/cli/options';

describe('getGlobalOptions', () => {
  it('should prefer local option values when provided', () => {
    const command = {
      opts: () => ({
        verbose: false,
        quiet: true,
        dryRun: true,
      }),
      parent: {
        opts: () => ({
          verbose: true,
          quiet: false,
          dryRun: false,
        }),
      },
    } as unknown as Parameters<typeof getGlobalOptions>[0];

    const options = getGlobalOptions(command);

    expect(options.verbose).toBe(false);
    expect(options.quiet).toBe(true);
    expect(options.dryRun).toBe(true);
  });

  it('should fall back to parent options when local options are undefined', () => {
    const command = {
      opts: () => ({}),
      parent: {
        opts: () => ({
          verbose: true,
          quiet: false,
          dryRun: true,
        }),
      },
    } as unknown as Parameters<typeof getGlobalOptions>[0];

    const options = getGlobalOptions(command);

    expect(options.verbose).toBe(true);
    expect(options.quiet).toBe(false);
    expect(options.dryRun).toBe(true);
  });

  it('should return defaults when no command is provided', () => {
    const options = getGlobalOptions();

    expect(options.verbose).toBe(false);
    expect(options.quiet).toBe(false);
    expect(options.dryRun).toBe(false);
  });
});
// End AI-Assisted
