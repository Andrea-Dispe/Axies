const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');


async function downloadVideos() {
  console.log('diocane inside updateskills');
  let launchOptions = { headless: false, args: ['--start-maximized'] };

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  // set viewport and user agent (just in case for nice viewing)
  await page.setViewport({ width: 1460, height: 1120 });
  await page.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
  );
  await page.setDefaultNavigationTimeout(0);

  await page.goto('https://codewithmosh.com/');
  await page.waitForTimeout(9000);
  await page.click('a[href="/sign_in"]');
  await page.waitForTimeout(3000);

  await page.waitForSelector('input[name="email"]').then((sel) => sel.type('dispe.andrea@gmail.com'));
  await page.waitForSelector('input[name="password"]').then((sel) => sel.type('Projektor#444'));
  await page.click('input[value="Login"]');
  await page.waitForTimeout(3000);

  await page.goto('https://codewithmosh.com/courses/the-ultimate-docker-course/lectures/31446593');
  await page.waitForTimeout(3000);

  // await page.waitForTimeout(300000);
  const videoURL = await page.$eval('a.download', anchor => anchor.getProperty('href'))

  // login and go to the page
  // await page.goto('https://codewithmosh.com/');

  // await page.waitForTimeout(10000);
  // await page.click('a[href="/sign_in"]');
  // await page.waitForTimeout(3000);

  // await page.waitForSelector('input[name="email"]').then((sel) => sel.type('dispe.andrea@gmail.com'));
  // await page.waitForSelector('input[name="password"]').then((sel) => sel.type('Projektor#444'));
  // await page.click('input[value="Login"]');

  // await page.waitForTimeout(4000);
  // await page.click('a[href="/courses/enrolled"]');

  // await page.waitForTimeout(4000);
  // await page.click('a[href="/courses/enrolled/1359863"]');



  let cards = await page.$eval('#card_container > a > .card_wrapper > div', (rows) => {



  })




};
downloadVideos()