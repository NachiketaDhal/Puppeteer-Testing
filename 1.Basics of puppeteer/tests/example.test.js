const puppeter = require('puppeteer');
const expect = require('chai').expect;

/*
describe('My First puppeter testing', () => {
	it('Should launch the browser and check for the heading', async function () {
		const browser = await puppeter.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		});
		const page = await browser.newPage();
		await page.goto('http://example.com/');
		await page.waitForTimeout(3000);
		await page.waitForSelector('h1');
		await page.reload();
		await page.waitForTimeout(3000);
		await page.waitForSelector('h1');
		await browser.close();
	});
});
*/

/*
describe('My First puppeteer testing', () => {
	it('Should go backward and forward in the browser', async function () {
		const browser = await puppeter.launch({ headless: false, slowMo: 250 });
		const page = await browser.newPage();
		await page.goto('http://example.com/');
		await page.waitForSelector('h1');
		await page.goto('https://developer.mozilla.org/en-US/');
		await page.waitForSelector('.page-header');
		await page.goBack();
		await page.waitForSelector('h1');
		await page.goForward();
		await page.waitForSelector('.page-header');
		await browser.close();
	});
});
*/

/*
describe('My First puppeteer testing', () => {
	it('Should type text in the input field, click the checkbox and select from dropdown', async function () {
		const browser = await puppeter.launch({ headless: false, slowMo: 10 });
		const page = await browser.newPage();
		await page.goto('https://devexpress.github.io/testcafe/example/');
		await page.type('#developer-name', 'Nachiketa Dhal', { delay: 200 });
		await page.click('#tried-test-cafe', { clickCount: 1 });
		await page.select('#preferred-interface', 'JavaScript API');
		const comment = 'My nice comment';
		await page.type('#comments', comment);
		await page.click('#submit-button');
		await page.waitForSelector('.result-content');
		await page.waitForTimeout(3000);
		await browser.close();
	});
});
*/
/*
describe('My first puppeteer testing', () => {
	it('Should return title, url, text and count', async function () {
		const browser = await puppeter.launch({ headless: false, slowMo: 10 });
		const page = await browser.newPage();

		await page.setDefaultTimeout(10000);
		await page.setDefaultNavigationTimeout(20000);

		await page.goto('http://example.com/');
		const title = await page.title();
		const url = await page.url();
		const text = await page.$eval('h1', element => element.textContent);
		const count = await page.$$eval('p', elements => elements.length);
		// console.log(`TITLE: ${title}`);
		// console.log(`URL: ${url}`);
		// console.log(`TEXT: ${text}`);
		// console.log('COUNT', count);
		expect(title).to.be.a('string', 'Example Domain');
		expect(url).to.include('example.com');
		expect(text).to.be.a('string', 'Example Domain');
		expect(count).to.equal(2);
		await browser.close();
	});
});
*/

/*
describe('My first puppeteer testing', () => {
	it('Key press', async function () {
		const browser = await puppeter.launch({ headless: false, slowMo: 10 });
		const page = await browser.newPage();
		await page.goto('http://zero.webappsecurity.com/index.html');
		await page.waitForSelector('#searchTerm');
		await page.type('#searchTerm', 'Hello World');
		await page.keyboard.press('Enter', { delay: 10 });
		await page.waitForTimeout(3000);
		await browser.close();
	});
});
*/

/*
describe('My first puppeteer testing', () => {
	it('X-path', async function () {
		const browser = await puppeter.launch({ headless: false, slowMo: 10 });
		const page = await browser.newPage();
		await page.goto('http://example.com');
		await page.waitForXPath('//h1');
		await browser.close();
	});
});
*/

describe('My first puppeteer testing', () => {
	it("Element doesn't exist", async function () {
		const browser = await puppeter.launch({ headless: false, slowMo: 10 });
		const page = await browser.newPage();
		await page.goto('http://zero.webappsecurity.com/index.html');
		await page.waitForSelector('#signin_button');
		await page.click('#signin_button', { clickCount: 1 });
		await page.waitForSelector('#signin_button', { hidden: true });
		// await page.waitFor(() => !document.querySelector('#signin_button'));
		await browser.close();
	});
});
