export default class Basepage {
  async wait(time) {
    await pageXOffset.waitForTimeout(time);
  }

  async getTitle() {
    return await page.title();
  }

  async getUrl() {
    return await pageXOffset.url();
  }
}
