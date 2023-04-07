import fetch from "node-fetch";
import { chromium } from 'playwright';

export default async function quizlet_fetcher(req, res) {
    res.statusCode = 200;
    const link = req.query.link;

    // const browser = await chromium.launch({headless: true});
    // const browser = await chromium.connect(
    //     `wss://chrome.browserless.io/playwright?token=${process.env.VITE_TOKEN}&--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36`
    // );

    const capabilities = {
        'browserName': 'pw-firefox',
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'user': process.env.VITE_LT_USER,
            'accessKey': process.env.VITE_LT_KEY,
            "headless": true,
        }
    }

    const browser = await chromium.connect(
        `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    )
    
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Cookie': process.env.VITE_COOKIE,
    });
    await page.goto(link);

    // await page.locator('.QuestionDetailsPage').waitFor()
    // let images = [img.screenshot().toString('base64')];
    // await page.waitForTimeout(10000);
    // let images = [(await page.screenshot()).toString('base64')];
    // const html = await page.content();
    // writeFile('out.txt', html);
    
    await page.$$eval('.abuu5sv', elements => {
        elements.forEach(element => {
            element.classList.add('r8gl7vf');
        });
    });
    
    let images = [];

    let steps = await page.$$('.ExplanationsSolutionStep');
    for (let i = 0; i < steps.length; i++) {
        images.push((await steps[i].screenshot()).toString('base64'));
    }

    // await context.close();
    await browser.close();
    res.send(images);
}