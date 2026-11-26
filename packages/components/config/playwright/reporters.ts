import type { GitHubActionOptions } from '@estruyf/github-actions-reporter';

export const githubActionsReporterOptions: GitHubActionOptions = {
  title: 'Playwright E2E Test results',
  useDetails: true,
  showAnnotations: true,
  showTags: true,
  showError: true,
  includeResults: ['fail', 'flaky'],
};
