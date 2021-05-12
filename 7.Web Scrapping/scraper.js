const puppeteer = require("puppeteer");
const randomUserAgent = require("random-useragent");
const fs = require("fs");

const { url } = require("./config");

(async function () {
  // Open browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Setup browser
  await page.setDefaultTimeout(10000);
  await page.setViewport({ width: 1200, height: 800 });
  await page.setUserAgent(randomUserAgent.getRandom());

  // Get data from book store
  const nameSelector = ".product_main > h1";
  const priceSelector = ".price_color";
  await page.goto(url);
  await page.waitForSelector(nameSelector);
  await page.waitForSelector(priceSelector);
  const name = await page.$eval(nameSelector, e => e.innerHTML);
  const price = await page.$eval(priceSelector, e => e.innerHTML);
  const nameTrimmed = name.trim();
  const priceTrimmed = price.trim();

  // Get current date and time
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = `${day}/${month}/${year}`;

  // Save the data to a text file
  const logger = fs.createWriteStream("log.txt", { flags: "a" });
  logger.write(`${fullDate} - ${nameTrimmed} - ${priceTrimmed}\n`);
  logger.close();

  // Close browser
  await browser.close();
})().catch(err => {
  console.log(err);
  process.exit(1);
});
