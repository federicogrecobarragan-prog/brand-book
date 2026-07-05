# HANDOFF → Claude Code (PC de Federico) · Configurar la cuenta HeyGen alineada a la marca

> Este prompt se le da al **Claude Code que corre en la PC de Federico** (con control del browser).
> Objetivo: dejar la cuenta de **HeyGen** configurada para que **TODO video salga 100% alineado** a la
> identidad de marca, sin decisión estética por video. Es un trabajo de **browser + config de cuenta**,
> no de código.

## Prerequisitos (verificar antes de arrancar)

1. **Assets de marca listos** — el material de Claude Design (del `prompts/one-shot-claude-design.md`)
   ya generado y descargado: logos (OdJ/Estudio, PNG+SVG), paletas, fondos de video por contexto,
   lower-third/intro/outro, preset de subtítulos, tipografías (Poppins + JetBrains Mono woff/otf).
2. **Decisión de reconciliación** tomada (`identidad/00-RECONCILIACION-decision.md`). Para video se
   usa el **sistema A (Contenido)**: ámbar `#f5b50a`, cian `#22d3ee`, teal `#2dd4bf`, Poppins.
3. **Voz de Sofía definida** (de quién se clona la voz femenina — hoy pendiente en el canónico).
4. **Cuenta HeyGen** logueada en el browser de Federico (sesión propia; el agente NO maneja la password).
5. Clonar el brand book para tener la fuente de verdad a mano:
   `git clone <repo brand-book>` → leer `identidad/brand-identity-CANONICO.md` + `video-heygen/avatares-y-guiones-CANONICO.md`.

## Qué configurar en HeyGen (checklist ejecutable)

### 1. Brand Kit / marca
- Subir **paleta**: ámbar `#f5b50a`, ámbar profundo `#c98a00`, cian `#22d3ee`, teal-menta `#2dd4bf`, base carbón `#0a0907`/`#1a1712`, marfil `#ece8df`.
- Subir **logos**: monograma J + wordmarks Oficina (ámbar) y Estudio (cian), versiones claro/oscuro.
- Cargar **fuentes**: Poppins (700-900) + JetBrains Mono (500-700) para overlays/subtítulos.

### 2. Avatares (2)
- **Jhonson** — avatar de Oficina/ventas. **Clonar la voz REAL de Federico** (HeyGen voice cloning, es-AR masculina cálida). Look: estudio oscuro, luz **ámbar** detrás, vestimenta carbón.
- **Sofía** — avatar de Estudio + educadora. **Clonar la voz femenina** definida (es-AR didáctica). Look: set aula/laboratorio oscuro, apoyo cian/teal según contexto.

### 3. Escenas / fondos (por contexto — el acento NO se mezcla)
- Fondo Jhonson/Oficina: carbón + halo **ámbar**.
- Fondo Sofía/Estudio: carbón + halo **cian**.
- Fondo Sofía/Educativo: carbón + halo **teal-menta**.

### 4. Plantillas reutilizables (guardar como templates en la cuenta)
- **Intro bumper** (1-1.5s): monograma J + glow del acento.
- **Lower-third**: nombre + rol en Poppins + línea mono con acento (ej. `JHONSON · Oficina de Jhonson`).
- **Outro** (1.5s): CTA + `oficinadejhonson.com` + redes + monograma J.
- **Subtítulos**: preset Poppins bold, keyword en color de acento, ON por defecto (autoplay sin sonido).
- **Ratios/canales:** template 9:16 (Reels/Stories/Shorts, principal), + 1:1 y 16:9.
- **Música:** setear la biblioteca tech-cálida elegida (misma para consistencia).

### 5. Validación
- Generar **1 video de prueba por avatar** (guion corto de las plantillas §4 del canónico) y verificar:
  fondo/acento correcto, lower-third+intro+outro, subtítulos, voz clonada, ratio 9:16.
- Comparar contra el brand board. Si algo no matchea → ajustar template, no el video.

## Reglas duras (no violar)

- Acento por marca **nunca se mezcla** (Oficina=ámbar, Estudio=cian, Sofía-educa=teal).
- Texto de marca en overlays/subtítulos, **no** quemado en el fondo del avatar.
- Voz = **clonada real** (no voces stock de HeyGen).
- Todo se valida contra el brand book; cambios de marca → PR al repo + gate de Federico.

## Reportar al terminar

Devolver: qué quedó configurado (avatares, templates, brand kit), links a los 2 videos de prueba,
y qué quedó pendiente (ej. voz de Sofía si no estaba, o assets faltantes). Ese reporte vuelve a BAKUGO
para cerrar el loop y cablear el generador de reels (HeyGen API) en el motor VibeMarketing.
