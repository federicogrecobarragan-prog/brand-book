# Motor de render — piezas de video 9:16 on-brand

Renderiza intros/outros/escenas de producto con branding pixel-perfect, FUERA de HeyGen.
HeyGen queda solo para las escenas de avatar; estas piezas se suben como **Medios** y se
ensamblan en plantillas. Piso de calidad: ver `../ESTANDAR-CALIDAD-VIDEO.md`.

## Pipeline

HTML determinístico (`window.seek(t)` puro, sin CSS animations ni `Math.random`)
→ Chrome headless captura frame por frame (60 fps, 1080×1920)
→ ffmpeg encodea H.264 yuv420p crf16 faststart.

## Dependencias (Windows)

- Node + `puppeteer-core` (`npm i puppeteer-core` junto a los scripts)
- Chrome en `C:\Program Files\Google\Chrome\Application\chrome.exe`
- ffmpeg en PATH
- Assets base64 junto a los scripts (NO versionados, regenerar):

```bash
base64 -w0 assets/tipografia/grotesk-700.woff2 > grotesk700.b64
base64 -w0 assets/tipografia/grotesk-500.woff2 > grotesk500.b64
base64 -w0 assets/tipografia/jetmono-500.woff2 > jetmono500.b64
base64 -w0 assets/tipografia/jetmono-400.woff2 > jetmono400.b64
base64 -w0 "<logo oficina de jhonson.jpeg>" > logo-oficina.b64
```

## Piezas

| Template | Render | Salida | Dur |
|---|---|---|---|
| `intro3-template.html` | `render3.js` | intro glamour ámbar (logo real + partículas + arco + tagline) | 6s |
| `outro-template.html` | `render-outro.js` | outro CTA "DEMO SIN COSTO" + web + redes | 6s |
| `agendabot-template.html` | `render-agendabot.js` | escena producto AgendaBot (4 actos) | 14s |
| `facturabot-template.html` | `render-facturabot.js` | escena producto FacturaBot (4 actos) | 15s |
| `medida-template.html` | `render-medida.js` | puente demos gratis → sistemas a medida + CTA | 16s |
| `render.js` / `render2.js` | — | versiones históricas (v1 logo SVG, v2 logo real 2.5s) | — |

## Uso

```bash
node render-agendabot.js preview   # solo frames clave (SIEMPRE antes del full)
node render-agendabot.js           # render completo
ffmpeg -framerate 60 -i framesAB/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 16 -movflags +faststart out.mp4
```

## Gotchas aprendidos

- **Logo JPEG con fondo:** no recortar con border-radius (queda descentrado). Chroma-key
  flood-fill desde los bordes + auto-centrado por bounding box (ya implementado en los
  templates que usan `__LOGO__`). Para logos sobre NEGRO (Estudio), invertir el criterio
  de fondo (`mx<38` en vez de blanco).
- **Push-in + títulos anchos:** el scale global corta texto en los bordes — chequear el
  frame FINAL, no solo el del medio.
- **Estructura 4 actos** por producto: dolor cuantificable → magia → resultado → stat/CTA.
  Datos SIEMPRE del sitio real del producto; sin sitio, sin métricas inventadas.
- Los MP4 producidos NO se versionan acá (artefactos derivados): viven en la carpeta
  de trabajo `heygen-assets/` del proyecto de identidad y en HeyGen como Medios.
