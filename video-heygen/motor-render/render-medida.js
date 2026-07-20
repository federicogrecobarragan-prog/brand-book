const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIR = __dirname;
const FPS = 60;
const DURATION = 16.0;
const FRAMES = Math.round(FPS * DURATION);
const W = 1080, H = 1920;

const PREVIEW = process.argv[2] === 'preview';
const PREVIEW_TIMES = [2.8, 4.2, 6.4, 8.2, 8.9, 11.2, 12.5, 14.4, 15.9];

(async () => {
  let html = fs.readFileSync(path.join(DIR, 'medida-template.html'), 'utf8');
  html = html
    .replace('__G700__', fs.readFileSync(path.join(DIR, 'grotesk700.b64'), 'utf8').trim())
    .replace('__G500__', fs.readFileSync(path.join(DIR, 'grotesk500.b64'), 'utf8').trim())
    .replace('__M500__', fs.readFileSync(path.join(DIR, 'jetmono500.b64'), 'utf8').trim())
    .replace('__M400__', fs.readFileSync(path.join(DIR, 'jetmono400.b64'), 'utf8').trim())
    .replace('__LOGO__', fs.readFileSync(path.join(DIR, 'logo-oficina.b64'), 'utf8').trim());
  const finalPath = path.join(DIR, 'medida-final.html');
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

  if (PREVIEW) {
    const pd = path.join(DIR, 'previewMD');
    if (!fs.existsSync(pd)) fs.mkdirSync(pd);
    for (const t of PREVIEW_TIMES) {
      await page.evaluate(tt => window.seek(tt), t);
      await page.screenshot({ path: path.join(pd, `p${String(t).replace('.', '_')}.png`), clip: { x: 0, y: 0, width: W, height: H } });
      console.log('preview ' + t);
    }
    await browser.close();
    console.log('PREVIEW DONE');
    return;
  }

  const framesDir = path.join(DIR, 'framesMD');
  if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir);
  for (let i = 0; i < FRAMES; i++) {
    const t = i / FPS;
    await page.evaluate(tt => window.seek(tt), t);
    await page.screenshot({
      path: path.join(framesDir, `f${String(i).padStart(4, '0')}.png`),
      clip: { x: 0, y: 0, width: W, height: H },
    });
    if (i % 120 === 0) console.log(`frame ${i}/${FRAMES}`);
  }
  await browser.close();
  console.log('DONE frames=' + FRAMES);
})().catch(e => { console.error(e); process.exit(1); });
