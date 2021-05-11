const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('File upload test', () => {
	let browser, page;
	before(async function () {
		browser = await puppeteer.launch({
			headless: true,
			slowMo: 0,
			devtools: false,
		});
		page = await browser.newPage();
	});

	after(async function () {
		await browser.close();
	});

	it('should upload the file', async function () {
		await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html');
		await page.waitForSelector('form');
		const elementHandle = await page.$('input[type="file"]');
		await elementHandle.uploadFile(
			'N:ProgrammingPuppeteer\0.File upload test\filesexample.png'
		);
		await page.click('input[type="submit"]');
		const url = page.url();
		expect(url).to.be.a(
			'string',
			'https://www.oac.uci.edu/indiv/franklin/cgi-bin/values'
		);
	});
});
