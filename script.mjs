import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    userDataDir: "temporary",
  });
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.waitForSelector("textarea#APjFqb");
  await page.type("textarea#APjFqb", "test script for long term student");
  await page.keyboard.press("Enter");

  await page.waitForSelector('a[jsname="UWckNb"]');

  const href = await page.evaluate(() => {
    const linkElements = document.querySelectorAll('a[jsname="UWckNb"]');

    return Array.from(linkElements).map((link) => link.href);
  });

  console.log(href);

  await page.screenshot({ path: "google.png" });
  await browser.close();
})();
