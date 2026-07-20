const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIR = __dirname;
const FPS = 60;
const DURATION = 14.0;
const FRAMES = Math.round(FPS * DURATION);
const W = 1080, H = 1920;

// modo preview: node render-agendabot.js preview
const PREVIEW = process.argv[2] === 'preview';
const PREVIEW_TIMES = [1.2, 2.9, 5.2, 6.9, 7.7, 9.9, 10.6, 12.4, 13.9];

(async () => {
  let html = fs.readFileSync(path.join(DIR, 'agendabot-template.html'), 'utf8');
  html = html
    .replace('__G700__', fs.readFileSync(path.join(DIR, 'grotesk700.b64'), 'utf8').trim())
    .replace('__G500__', fs.readFileSync(path.join(DIR, 'grotesk500.b64'), 'utf8').trim())
    .replace('__M500__', fs.readFileSync(path.join(DIR, 'jetmono500.b64'), 'utf8').trim())
    .replace('__M400__', fs.readFileSync(path.join(DIR, 'jetmono400.b64'), 'utf8').trim());
  const finalPath = path.join(DIR, 'agendabot-final.html');
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

  if (PREVIEW) {
    const pd = path.join(DIR, 'previewAB');
    if (!fs.existsSync(pd)) fs.mkdirSync(pd);
    for (const t of PREVIEW_TIMES) {
      await page.evaluate(tt => window.seek(tt), t);
      const name = `p${String(t).replace('.', '_')}.png`;
      await page.screenshot({ path: path.join(pd, name), clip: { x: 0, y: 0, width: W, height: H } });
      console.log('preview ' + name);
    }
    await browser.close();
    console.log('PREVIEW DONE');
    return;
  }

  const framesDir = path.join(DIR, 'framesAB');
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
