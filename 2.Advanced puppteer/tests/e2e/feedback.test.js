const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Feedback Flow', () => {
	let browser;
	let page;

	before(async function () {
		browser = await puppeteer.launch({
			headless: true,
			slowMo: 0,
			devtools: false,
		});
		page = await browser.newPage();
		await page.setDefaultTimeout(10000);
		await page.setDefaultNavigationTimeout(20000);
	});

	after(async function () {
		await browser.close();
	});

	it('Display feedback form', async function () {
		await page.goto('http://zero.webappsecurity.com/index.html');
		await page.waitForSelector('#feedback');
		await page.click('#feedback');
	});

	it('Submit feedback form', async function () {
		await page.waitForSelector('form');
		await page.type('#name', 'Random Name');
		await page.type('#email', 'test@test.com');
		await page.type('#subject', 'Random Subject');
		await page.type('#comment', 'Random comment in textarea');
		await page.click('input[type="submit"]');
	});

	it('Display Result page', async function () {
		await page.waitForSelector('#feedback-title');
		const url = page.url();
		expect(url).to.include('sendFeedback.html');
	});
});
