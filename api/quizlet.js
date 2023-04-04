import fetch from "node-fetch";
import { chromium } from 'playwright';

export default async function quizlet_fetcher(req, res) {
    res.statusCode = 200;
    const link = req.query.link;

    const browser = await chromium.launch({headless: true});
    
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Cookie': process.env.VITE_COOKIE,
    });
    await page.goto(link);
    
    await page.$$eval('.ExplanationsSolutionStep', elements => {
        elements.forEach(element => {
            element.classList.add('r8gl7vf');
        });
    });
    
    let images = [];

    let steps = await page.$$('.ExplanationsSolutionStep');
    for (let i = 0; i < steps.length; i++) {
        const element = steps[i];
        images.push((await element.screenshot()).toString('base64'));
    }
    await browser.close();
    res.send(JSON.stringify(images))
}