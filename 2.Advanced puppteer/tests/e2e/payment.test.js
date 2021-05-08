const puppeteer = require('puppeteer');

describe('Payment Flow', () => {
	let browser;
	let page;

	before(async function () {
		browser = await puppeteer.launch({
			headless: true,
			slowMo: 0,
			devtools: false,
		});
		page = await browser.newPage();
		await page.setDefaultTimeout(15000);
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

	it('Display payment form', async function () {
		await page.waitForSelector('#onlineBankingMenu');
		await page.click('#onlineBankingMenu');
		await page.waitForSelector('#online_banking_features');
		await page.click('#pay_bills_link');
		await page.waitForSelector('.form-horizontal');
	});

	it('Make payment', async function () {
		await page.select('#sp_payee', 'Apple');
		await page.select('#sp_account', 'Credit Card');
		await page.type('#sp_amount', '500');
		await page.type('#sp_date', '2021-05-08');
		await page.keyboard.press('Enter');
		await page.type('#sp_description', 'My description for payment');
		await page.click('#pay_saved_payees');
		await page.waitForSelector('#alert_content');
	});
});
