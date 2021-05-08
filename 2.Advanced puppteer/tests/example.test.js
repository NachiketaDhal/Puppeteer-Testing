const puppeter = require('puppeteer');
const expect = require('chai').expect;

const {
	click,
	getText,
	getCount,
	typeText,
	waitForText,
	shouldNotExist,
} = require('../lib/helpers');

describe('My first puppeteer testing', () => {
	let browser;
	let page;

	before(async function () {
		browser = await puppeter.launch({ headless: false, slowMo: 10 });
		page = await browser.newPage();
	});

	after(async function () {
		await browser.close();
	});

	beforeEach(async function () {
		// Runs before every it function
	});

	afterEach(async function () {
		// runs after each it function
	});

	it('Key press', async function () {
		// await page.goto('http://zero.webappsecurity.com/index.html');
		// await page.waitForSelector('#searchTerm');
		// await page.type('#searchTerm', 'Hello World');
		// await page.keyboard.press('Enter', { delay: 10 });
		// await page.waitForTimeout(3000);
		// await page.goto('http://zero.webappsecurity.com/index.html');
		// await page.waitForSelector('#signin_button');
		// await page.click('#signin_button', { clickCount: 1 });
		// await page.waitForSelector('#signin_button', { hidden: true });

		// await page.goto('http://zero.webappsecurity.com/index.html');
		// await page.waitForSelector('#signin_button');
		// await page.click('#signin_button', { clickCount: 1 });
		// shouldNotExist(page, '#signing_button');

		await page.goto('http://example.com');
		await page.waitForSelector('p');
		console.log(await getCount(page, 'p'));
	});
});
