// Runner genérico: node render-generic.js <template.html> <duracion_s> <framesdir> [preview]
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIR = __dirname;
const TEMPLATE = process.argv[2];
const DURATION = parseFloat(process.argv[3]);
const FRAMESDIR = process.argv[4];
const PREVIEW = process.argv[5] === 'preview';
const FPS = 60;
const FRAMES = Math.round(FPS * DURATION);
const W = 1080, H = 1920;

const b64 = f => fs.readFileSync(path.join(DIR, f), 'utf8').trim();

(async () => {
  let html = fs.readFileSync(path.join(DIR, TEMPLATE), 'utf8');
  html = html
    .replace('__G700__', () => { try { return b64('grotesk700.b64'); } catch { return ''; } })
    .replace('__G500__', () => { try { return b64('grotesk500.b64'); } catch { return ''; } })
    .replace('__GROTESK700__', () => { try { return b64('grotesk700.b64'); } catch { return ''; } })
    .replace('__JETMONO500__', () => { try { return b64('jetmono500.b64'); } catch { return ''; } })
    .replace('__M500__', () => { try { return b64('jetmono500.b64'); } catch { return ''; } })
    .replace('__M400__', () => { try { return b64('jetmono400.b64'); } catch { return ''; } })
    .replace('__LOGO_ESTUDIO__', () => b64('logo-estudio.b64'))
    .replace('__LOGO__', () => { try { return b64('logo-oficina.b64'); } catch { return ''; } });
  const finalPath = path.join(DIR, TEMPLATE.replace('.html', '-final.html'));
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
  await page.evaluate(() => window.logoReady || true);

  const framesDir = path.join(DIR, FRAMESDIR);
  if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir);

  if (PREVIEW) {
    const times = [0.5, 1.2, 2.4, 3.2, 4.5, DURATION - 0.1];
    for (const t of times) {
      await page.evaluate(tt => window.seek(tt), t);
      await page.screenshot({ path: path.join(framesDir, `prev_${String(t).replace('.', '_')}.png`), clip: { x: 0, y: 0, width: W, height: H } });
    }
    await browser.close();
    console.log('PREVIEW DONE ' + FRAMESDIR);
    return;
  }

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
