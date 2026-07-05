# HANDOFF → Claude Code (PC de Federico) · Configurar la cuenta HeyGen alineada a la marca

> Este prompt se le da al **Claude Code que corre en la PC de Federico** (con control del browser).
> Objetivo: dejar la cuenta de **HeyGen** configurada para que **TODO video salga 100% alineado** a la
> identidad de marca, sin decisión estética por video. Es un trabajo de **browser + config de cuenta**,
> no de código.

## Prerequisitos (verificar antes de arrancar)

1. **Assets de marca listos** — el material de Claude Design (del `prompts/one-shot-claude-design.md`)
   ya generado y descargado: logos (OdJ/Estudio, PNG+SVG), paletas, fondos de video por contexto,
   lower-third/intro/outro, preset de subtítulos, tipografías (Space Grotesk + Plus Jakarta + JetBrains Mono woff/otf).
2. **Decisión de reconciliación** tomada (`identidad/00-RECONCILIACION-decision.md`). Canon único (LOGO+WEB): ámbar Oficina `#ecd175`, celeste Estudio/Sofía `#5b9cf6`, verde señal `#3ecf8e`, fonts Space Grotesk + Plus Jakarta + JetBrains Mono.
3. **Voces ya definidas en HeyGen** (ver §2): Jhonson.V1/V2/V3 (avatar Federico) · Sofi.V1/V2/V3 (avatar Sofía).
4. **Cuenta HeyGen** logueada en el browser de Federico (sesión propia; el agente NO maneja la password).
5. Clonar el brand book para tener la fuente de verdad a mano:
   `git clone <repo brand-book>` → leer `identidad/brand-identity-CANONICO.md` + `video-heygen/avatares-y-guiones-CANONICO.md`.

## Qué configurar en HeyGen (checklist ejecutable)

### 1. Brand Kit / marca
- Subir **paleta**: ámbar Oficina `#ecd175` (claro `#f5e2a0`, oscuro `#b89a4a`), celeste Estudio/Sofía `#5b9cf6`, verde señal `#3ecf8e`, base negro `#09090a`/`#111113`, texto `#f0ede8`.
- Subir **logos**: monograma J + wordmarks Oficina (ámbar) y Estudio (celeste), versiones claro/oscuro.
- Cargar **fuentes**: Space Grotesk (display) + Plus Jakarta Sans (cuerpo) + JetBrains Mono (labels) para overlays/subtítulos.

### 2. Avatares (2)
- **Jhonson** — avatar de Oficina/ventas (tu avatar, Federico). Voces en HeyGen: **Jhonson.V1 · Jhonson.V2 · Jhonson.V3** (elegir/probar cuál queda mejor por tipo de video). Look: estudio oscuro, luz **ámbar `#ecd175`** detrás, vestimenta carbón.
- **Sofía** — avatar femenino de Estudio + educadora. Voces en HeyGen: **Sofi.V1 · Sofi.V2 · Sofi.V3**. Look: set aula/laboratorio oscuro, apoyo **celeste `#5b9cf6`**.

### 3. Escenas / fondos (por contexto — el acento NO se mezcla)
- Fondo Jhonson/Oficina: negro + halo **ámbar `#ecd175`**.
- Fondo Sofía/Estudio + Educativo: negro + halo **celeste `#5b9cf6`**.

### 4. Plantillas reutilizables (guardar como templates en la cuenta)
- **Intro bumper** (1-1.5s): monograma J + glow del acento.
- **Lower-third**: nombre + rol en Space Grotesk + línea mono con acento (ej. `JHONSON · Oficina de Jhonson`).
- **Outro** (1.5s): CTA + `oficinadejhonson.com` + redes + monograma J.
- **Subtítulos**: preset Space Grotesk bold, keyword en color de acento, ON por defecto (autoplay sin sonido).
- **Ratios/canales:** template 9:16 (Reels/Stories/Shorts, principal), + 1:1 y 16:9.
- **Música:** setear la biblioteca tech-cálida elegida (misma para consistencia).

### 5. Validación
- Generar **1 video de prueba por avatar** (guion corto de las plantillas §4 del canónico) y verificar:
  fondo/acento correcto, lower-third+intro+outro, subtítulos, voz clonada, ratio 9:16.
- Comparar contra el brand board. Si algo no matchea → ajustar template, no el video.

## Reglas duras (no violar)

- Acento por marca **nunca se mezcla** (Oficina=ámbar `#ecd175`, Estudio/Sofía=celeste `#5b9cf6`).
- Texto de marca en overlays/subtítulos, **no** quemado en el fondo del avatar.
- Voces = las nombradas (Jhonson.V1-3 / Sofi.V1-3), no voces stock genéricas de HeyGen.
- Todo se valida contra el brand book; cambios de marca → PR al repo + gate de Federico.

## Reportar al terminar

Devolver: qué quedó configurado (avatares, templates, brand kit), links a los 2 videos de prueba,
y qué quedó pendiente (ej. assets faltantes o ajustes de template). Ese reporte vuelve a BAKUGO
para cerrar el loop y cablear el generador de reels (HeyGen API) en el motor VibeMarketing.
