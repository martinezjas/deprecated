import { test, expect } from '@playwright/test';

test('HomeIndex.vue', async ({ page, browserName }) => {
  await page.goto('http://localhost:8080');

  // Expect the profile picture to be present.
  const profilePicture = await page.$('img[alt="Profile picture"]');
  expect(profilePicture).toBeTruthy();

  // Expect the GitHub and LinkedIn links to be present.
  const githubLink = await page.$('a[href="https://github.com/martinezjas"]');
  expect(githubLink).toBeTruthy();

  const linkedinLink = await page.$('a[href="https://linkedin.com/in/martinezjas"]');
  expect(linkedinLink).toBeTruthy();
});