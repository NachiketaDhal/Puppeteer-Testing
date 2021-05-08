const puppeteer = require('puppeteer');

describe('Currency Exchange Flow', () => {
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

		// Login before payment
		await page.goto('http://zero.webappsecurity.com/login.html');
		await page.waitForSelector('#login_form');
		await page.type('#user_login', 'username');
		await page.type('#user_password', 'password');
		await page.click('#user_remember_me');
		await page.click('input[type="submit"]');
		await page.goBack();
		await page.waitForSelector('#settingsBox');
	});

	after(async function () {
		await browser.close();
	});

	it('Display currency exchange form', async function () {
		await page.waitForSelector('#onlineBankingMenu');
		await page.click('#onlineBankingMenu');
		await page.waitForSelector('#online_banking_features');
		await page.click('#pay_bills_link');
		await page.waitForSelector('.nav-tabs');
		await page.waitForSelector('#tabs > ul > li:nth-child(3) > a');
		await page.click('#tabs > ul > li:nth-child(3) > a');
		await page.waitForSelector('#pc_purchase_currency_form');
	});

	it('Exchange currency', async function () {
		await page.select('#pc_currency', 'GBP');
		await page.type('#pc_amount', '500');
		await page.click('#pc_inDollars_true');
		await page.click('#purchase_cash');
		await page.waitForSelector('#alert_content');
	});
});
