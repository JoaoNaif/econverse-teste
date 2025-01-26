import { defineConfig } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './test',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:5173',
  },

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  /* Configure projects for major browsers */
  //   projects: [
  //     {
  //       name: 'chromium',
  //       use: { ...devices['Desktop Chrome'] },
  //     },

  //     {
  //       name: 'firefox',
  //       use: { ...devices['Desktop Firefox'] },
  //     },

  //     {
  //       name: 'webkit',
  //       use: { ...devices['Desktop Safari'] },
  //     },

  //     /* Test against mobile viewports. */
  //     // {
  //     //   name: 'Mobile Chrome',
  //     //   use: { ...devices['Pixel 5'] },
  //     // },
  //     // {
  //     //   name: 'Mobile Safari',
  //     //   use: { ...devices['iPhone 12'] },
  //     // },

  //     /* Test against branded browsers. */
  //     // {
  //     //   name: 'Microsoft Edge',
  //     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //     // },
  //     // {
  //     //   name: 'Google Chrome',
  //     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //     // },
  //   ],
})