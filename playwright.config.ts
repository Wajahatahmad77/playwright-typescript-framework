import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests sequentially
  fullyParallel: false,

  // Run only one browser instance
  workers: 1,

  // Retry failed tests
  retries: 0,

  // HTML report
  reporter: 'html',

  use: {
    // Open browser in visible mode
    headless: false,

    // Capture trace on failure
    trace: 'on-first-retry',

    // Take screenshot on failure
    screenshot: 'only-on-failure',

    // Record video on failure
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});