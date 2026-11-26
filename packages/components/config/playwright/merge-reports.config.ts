import type { PlaywrightTestConfig } from '@playwright/test';

import { githubActionsReporterOptions } from './reporters';

/**
 * Used by `playwright merge-reports` to combine the blob reports of all e2e shards
 * into a single HTML report and GitHub job summary. See TESTING.md.
 */
const config: PlaywrightTestConfig = {
  reporter: [
    ['html', { open: 'never' }],
    ['@estruyf/github-actions-reporter', githubActionsReporterOptions],
  ],
};

export default config;
