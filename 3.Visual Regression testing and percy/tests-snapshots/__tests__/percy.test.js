const puppeteer = require('puppeteer');
const { percySnapshot } = require('@percy/puppeteer');

describe('Percy visual test', () => {
	let browser, page;

	beforeAll(async function () {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
	});

	afterAll(async function () {
		await browser.close();
	});

	test('Full page percy snapshot', async function () {
		await page.goto('http://example.com');
		await page.waitForTimeout(1000);
		await percySnapshot(page, 'Example Page');
	});
});

// npx percy exec -- node ./tests-snapshots/__tests__/percy.test.js
