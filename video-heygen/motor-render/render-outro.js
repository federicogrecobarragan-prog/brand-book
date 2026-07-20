const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIR = __dirname;
const FPS = 60;
const DURATION = 6.0;
const FRAMES = Math.round(FPS * DURATION);
const W = 1080, H = 1920;

(async () => {
  let html = fs.readFileSync(path.join(DIR, 'outro-template.html'), 'utf8');
  html = html
    .replace('__GROTESK700__', fs.readFileSync(path.join(DIR, 'grotesk700.b64'), 'utf8').trim())
    .replace('__JETMONO500__', fs.readFileSync(path.join(DIR, 'jetmono500.b64'), 'utf8').trim())
    .replace('__LOGO__', fs.readFileSync(path.join(DIR, 'logo-oficina.b64'), 'utf8').trim());
  const finalPath = path.join(DIR, 'outro-final.html');
  fs.writeFileSync(finalPath, html);

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: [`--window-size=${W},${H}`, '--force-device-scale-factor=1', '--hide-scrollbars'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.goto('file:///' + finalPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.logoReady);

  const framesDir = path.join(DIR, 'framesO');
  if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir);

  for (let i = 0; i < FRAMES; i++) {
    const t = i / FPS;
    await page.evaluate(tt => window.seek(tt), t);
    await page.screenshot({
      path: path.join(framesDir, `f${String(i).padStart(3, '0')}.png`),
      clip: { x: 0, y: 0, width: W, height: H },
    });
    if (i % 60 === 0) console.log(`frame ${i}/${FRAMES}`);
  }

  await browser.close();
  console.log('DONE frames=' + FRAMES);
})().catch(e => { console.error(e); process.exit(1); });
