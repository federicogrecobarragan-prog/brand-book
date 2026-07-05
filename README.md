# Brand Book — Oficina de Jhonson & Estudio de Jhonson

> **Fuente única de verdad de la identidad de marca** para alinear TODO el contenido gráfico y
> audiovisual del ecosistema: web, redes, video (HeyGen), demos, propuestas, docs. Todo canal
> se alinea a este repo. Autoría: BAKUGO (extraído de lo ya construido) + Federico (gate).

## Las dos marcas

- **Oficina de Jhonson (OdJ)** — la consultora/empresa: automatización con IA, agentes, productos (ATRIA, SONAR, NEXO, etc.). Marca "madre".
- **Estudio de Jhonson** — [completar con inventario: rol vs OdJ]. Sub-marca / unidad creativa-marketing.

> Ambas comparten el **design system "Black Code"** (dark + ámbar + verde). Diferenciación de sub-marca: [pendiente inventario].

## Estructura

| Carpeta | Qué contiene |
|---|---|
| `identidad/` | Design system (paleta/tipografía/motion/logos), reglas de composición |
| `voz-y-tono/` | Cómo habla la marca (es-AR rioplatense), do/don't de copy |
| `publico-objetivo/` | ICP — a quién le vendemos, rubros, dolores, el cliente que queremos atraer |
| `canales/` | Guidelines por canal (LinkedIn, IG, FB, web, video) + formatos |
| `video-heygen/` | Cómo deben salir los videos: avatar, fondo, lower-thirds, intro/outro, guion |
| `assets/logos` | Logos OdJ/Estudio + productos (SVG) |
| `assets/tipografia` | woff2 self-host (Jakarta, Grotesk, JetBrains Mono) |
| `assets/referencias` | Banners, covers de redes, capturas de la web (material existente) |
| `prompts/` | One-shot para Claude Design + HANDOFF para Claude Code PC (config HeyGen) |

## Flujo de uso (por qué existe)

```
Este repo (identidad unificada)
   │
   ├─► prompts/one-shot-claude-design.md  → Claude Design genera TODO el material gráfico
   │        (paleta, elementos, tipografías, plantillas, fondos de video, lower-thirds)
   │
   └─► prompts/handoff-claude-code-pc.md  → Claude Code de la PC de Federico toma control
            del browser y CONFIGURA la cuenta HeyGen (avatar, marca, fondos, plantillas)
            para que TODO video salga 100% alineado a la marca.
```

## Regla de oro

Ningún asset gráfico/audiovisual nuevo sale sin pasar por acá. Si un color/fuente/tono no está
en este repo, no es de la marca. Cambios de identidad → PR + gate de Federico.
