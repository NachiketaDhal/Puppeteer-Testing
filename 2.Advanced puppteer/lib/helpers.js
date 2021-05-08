module.exports = {
	click: async function (page, selector) {
		try {
			await page.waitForSelector(selector);
			await page.click(selector);
		} catch (err) {
			throw new Error(`Couldn't click on selector ${selector}`);
		}
	},
	getText: async function (page, selector) {
		try {
			await page.waitForSelector(selector);
			return await page.$eval(selector, element => element.innerHTML);
		} catch (err) {
			throw new Error(`Can't get text of the selector ${selector}`);
		}
	},
	getCount: async function (page, selector) {
		try {
			await page.waitForSelector(selector);
			return await page.$$eval(selector, elements => elements.length);
		} catch (err) {
			throw new Error(`Can't get count of selector ${selector}`);
		}
	},
	typeText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector);
			await page.type(selector, text);
		} catch (err) {
			throw new Error(`Can't type in the selector ${selector}`);
		}
	},
	waitForText: async function (page, selector) {
		try {
			await page.waitForSelector(selector);
			await page.waitForFunction((selector, text) => {
				document.querySelector(selector).includes(text), {}, selector, text;
			});
		} catch (err) {
			throw new Error(`Can't find text: ${text} in the selector: ${selector}`);
		}
	},
	shouldNotExist: async function (page, selector) {
		try {
			await page.waitForSelector(selector, { visible: hidden });
		} catch (err) {
			throw new Error(
				`The selector: ${selector} is visible, but it shouldn't be`
			);
		}
	},
};
