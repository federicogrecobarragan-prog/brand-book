# Design System — "Black Code" · CANON ÚNICO (todo canal)

> ✅ **Este es el sistema canónico de la marca** (decisión Federico 05/07: unificar todo al estilo LOGO+WEB). Aplica a web, redes, video HeyGen y docs. Ámbar Oficina `#ecd175` · celeste Estudio/Sofía `#5b9cf6` · verde señal `#3ecf8e`. Fuentes: Space Grotesk + Plus Jakarta + JetBrains Mono. Ver `00-RECONCILIACION-decision.md`. El `brand-identity-CANONICO.md` (v1) queda como historial — sus valores viejos (`#f5b50a`/Poppins) están superseded por este doc.

## Paleta (tokens canónicos)

| Token | Hex | Rol |
|---|---|---|
| `--bg` | `#09090a` | Fondo base (negro profundo) — la marca es DARK-first |
| `--bg-s` | `#111113` | Superficie (cards, paneles) |
| `--bg-e` | `#1a1a1d` | Superficie elevada |
| `--bg-h` | `#222226` | Hover |
| `--bd` / `--bd-l` | `#252529` / `#32323a` | Bordes |
| `--amber` | `#ecd175` | **Color de marca #1** — acento dorado/ámbar (CTAs, títulos em, wordmark) |
| `--amber-l` / `--amber-d` | `#f5e2a0` / `#b89a4a` | Ámbar claro (hover) / oscuro (trazos secundarios) |
| `--amber-glow` | `rgba(236,209,117,.18)` | Glow/sombras de acento |
| `--green` | `#3ecf8e` | **Color de marca #2** — verde éxito/vivo (estados OK, blips, "IA activa") |
| `--blue` | `#5b9cf6` | Azul informativo (uso menor) |
| `--t1` | `#f0ede8` | Texto principal (blanco cálido, NO blanco puro) |
| `--t2` / `--t3` | `#9b9591` / `#5a5652` | Texto secundario / terciario |

**Regla:** fondo negro + ámbar como héroe + verde como señal de vida. Nada de gradientes arcoíris, nada de azul corporativo genérico.

## Tipografías (self-host, woff2 en `assets/tipografia/`)

| Familia | Uso |
|---|---|
| **Plus Jakarta Sans** (400-800) | Cuerpo + títulos UI |
| **Space Grotesk** (400-600) | Display / headings editoriales |
| **JetBrains Mono** (400-500) | Eyebrows, labels técnicos, código, captions — el "sabor tech" de la marca |

Patrón recurrente: eyebrow en JetBrains Mono MAYÚSCULAS letter-spacing `.16em` color `--amber-d` + dot verde pulsante.

## Motion / interacción

- Ease canónico: `cubic-bezier(.16,1,.3,1)`.
- Cursor custom cuadrado ámbar (desktop), micro-hover translateY(-1px) + glow ámbar.
- Animación de pulso en dots de estado (verde).

## Logos (assets/logos/)

- `odj-favicon.svg` — marca base OdJ.
- Wordmark del sitio: cuadrado ámbar + "Oficina de **Jhonson**" (el apellido en ámbar/em).
- Logos de producto (misma familia visual, 64×64, trazo `#b89a4a` + acento `#ecd175` + blip `#3ecf8e`): ATRIA (atrio), SONAR (radar), NEXO, LATIDO, METRIK, VIBE (waveform), Equipo, APIs, Apps Mobile.
- **Metáfora común:** geometría simple + un "blip" verde = el sistema detectando/vivo.

## Estética de imagen/foto

- Dark, cinematográfico, tech-premium. Mockups de producto sobre fondo `#09090a`.
- En redes (línea actual de `social_autopost`): tarjeta branded dark + ámbar como fallback; foto-realista con acento cálido cuando hay GPU.
- NUNCA: stock corporativo blanco genérico, clip-art, emojis 3D de Windows.
