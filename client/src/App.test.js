const puppeteer = require('puppeteer');// I installed Jest for Util Tests so I continued to write in it...

// You can remove 'test('should click around Messagesender and LangList',' and in and of this ')' before '}'
// After use the terminal and print npm start App.test.js in client > src directory

test('should click around Messagesender and LangList', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']// Window size
    });// Open usual(not headless) browser
    // Open page
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');// URL what to open, used 3000 port so You have to start(npm start in client directory)
    await page.click('.mpt_btn');
    await page.click('#ru');
    await page.click('#pl');
    await page.click('#he');
    await page.click('#en');
    //Testing input with no typing; trying to send without text
    await page.click('.ms_input');//Work like querrySelector()
    await page.click('.cross');
    await page.waitFor(1000);
    await page.click('.cross');
    await page.keyboard.press('Enter');// If doesn't work You can try await page.type(String.fromCharCode(13));
    //Waiting for 4000ms or 4s
    await page.waitFor(4000);
    //Test out work of input with typing...
    await page.click('.ms_input');
    await page.type('Runed by puppeteer');
    await page.click('.cross');
    await page.click('.hash_default');
    await page.type('UItest');
    await page.keyboard.press('Enter');
});