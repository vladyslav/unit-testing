const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Vlad', 20);
  expect(text).toBe('Vlad (20 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Vlad', 20);
  expect(text).toBe('Vlad (20 years old)');
});

test('should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: true
    // slowMo: 80,
    // args: ['--window-size=1920, 1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///Users/vladyslav.vasylenko/Documents/unit-testing/integration-e2e/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '27');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Anna (27 years old)');
}, 10000);
