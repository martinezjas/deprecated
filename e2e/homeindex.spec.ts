import {test, expect, chromium, firefox, webkit, Browser, Page} from '@playwright/test';
import { defineComponent } from 'vue';

describe('HomeIndex.vue', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should display the title', async () => {
    const title = await page.$eval('h1', (el) => el.textContent);
    expect(title).toBe('folfmart');
  });

  it('should display the profile picture', async () => {
    const profilePicture = await page.$('img[alt="Profile picture"]');
    expect(profilePicture).toBeTruthy();
  });

  it('should display the GitHub link', async () => {
    const githubLink = await page.$('a[href="https://github.com/martinezjas"]');
    expect(githubLink).toBeTruthy();
  });

  it('should display the LinkedIn link', async () => {
    const linkedinLink = await page.$('a[href="https://linkedin.com/in/martinezjas"]');
    expect(linkedinLink).toBeTruthy();
  });
});

describe('HomeIndex.vue in Firefox', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await firefox.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should display the title', async () => {
    const title = await page.$eval('h1', (el) => el.textContent);
    expect(title).toBe('folfmart');
  });

  it('should display the profile picture', async () => {
    const profilePicture = await page.$('img[alt="Profile picture"]');
    expect(profilePicture).toBeTruthy();
  });

  it('should display the GitHub link', async () => {
    const githubLink = await page.$('a[href="https://github.com/martinezjas"]');
    expect(githubLink).toBeTruthy();
  });

  it('should display the LinkedIn link', async () => {
    const linkedinLink = await page.$('a[href="https://linkedin.com/in/martinezjas"]');
    expect(linkedinLink).toBeTruthy();
  });
});

describe('HomeIndex.vue in WebKit', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await webkit.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should display the title', async () => {
    const title = await page.$eval('h1', (el) => el.textContent);
    expect(title).toBe('folfmart');
  });

  it('should display the profile picture', async () => {
    const profilePicture = await page.$('img[alt="Profile picture"]');
    expect(profilePicture).toBeTruthy();
  });

  it('should display the GitHub link', async () => {
    const githubLink = await page.$('a[href="https://github.com/martinezjas"]');
    expect(githubLink).toBeTruthy();
  });

  it('should display the LinkedIn link', async () => {
    const linkedinLink = await page.$('a[href="https://linkedin.com/in/martinezjas"]');
    expect(linkedinLink).toBeTruthy();
  });
});