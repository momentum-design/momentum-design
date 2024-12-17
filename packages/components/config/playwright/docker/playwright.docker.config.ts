import type { PlaywrightTestConfig } from '@playwright/test';
import type { GitHubActionOptions } from '@estruyf/github-actions-reporter';
import { devices } from '@playwright/test';
import os from 'os';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

let url;
if (os.platform() === 'linux') {
  url = 'http://172.17.0.1:4000';
} else {
  url = 'http://host.docker.internal:4000';
}

const githubActionsReporterOptions: GitHubActionOptions = {
  title: 'Playwright E2E Test results',
  useDetails: true,
  showAnnotations: true,
  showTags: true,
  showError: true,
  includeResults: ['fail', 'flaky'],
};

const DEFAULT_TIMEOUT = 30 * 1000;
const LONGER_TIMEOUT = DEFAULT_TIMEOUT * 1.5;
/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: '../../../src',
  testMatch: /.*\.e2e-test\.ts/,
  /* Maximum time one test can run for. */
  timeout: DEFAULT_TIMEOUT,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? '50%' : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['html'], ['@estruyf/github-actions-reporter', githubActionsReporterOptions]] : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: url,
    /* On CI: Collect trace when retrying the failed test /
    Locally: always collect trace. See https://playwright.dev/docs/trace-viewer */
    trace: process.env.CI ? 'retain-on-failure' : 'on',
  },

  snapshotPathTemplate: '{testDir}/{testFileDir}/__screenshots__/{projectName}/{arg}{ext}',

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
      timeout: LONGER_TIMEOUT,
    },

    /* Test against mobile viewports. */
    {
      name: 'mobile chrome',
      use: {
        ...devices['Galaxy S9+'],
      },
    },
    {
      name: 'mobile safari',
      use: {
        ...devices['iPhone 12'],
      },
      timeout: LONGER_TIMEOUT,
    },

    /* Test against tablet viewports. */
    {
      name: 'tablet chrome',
      use: {
        ...devices['Galaxy Tab A'],
      },
    },
    {
      name: 'tablet safari',
      use: {
        ...devices['iPad Pro 11'],
      },
      timeout: LONGER_TIMEOUT,
    },

    /* Test against branded browsers. */
    {
      name: 'msedge',
      use: {
        channel: 'msedge',
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: [
    {
      command: 'yarn test:e2e:serve',
      url: 'http://localhost:4000',
      stdout: 'pipe',
      stderr: 'pipe',
      timeout: 240 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'yarn test:e2e:docker:serve',
      url: 'http://localhost:3000',
      stdout: 'pipe',
      stderr: 'pipe',
      timeout: 240 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
};

export default config;
