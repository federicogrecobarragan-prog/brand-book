# ONE-SHOT PROMPT → Claude Design

> Pegar TODO este bloque en Claude Design. Genera el sistema gráfico completo de la marca en una
> sola pasada, alineado al CANON ÚNICO de marca (Black Code, estilo LOGO+WEB — decisión Federico 05/07).
> Federico dispara esto. Valores exactos de `identidad/design-system.md` + `00-RECONCILIACION-decision.md`.

---

Sos el director de arte de **Oficina de Jhonson** (OdJ) y su marca hermana **Estudio de Jhonson** (EdJ).
OdJ democratiza tecnología de vanguardia (IA + agentes autónomos) para PyMEs y negocios de barrio de
Argentina/LATAM: potencia de élite, pero cercana y accesible. Necesito el **sistema gráfico de marca
completo**, listo para producir contenido de redes y **video con avatares (HeyGen)**. La estética ya
existe — se llama **"Black Code"**. NO la reinventes: construí sobre ella con estos valores EXACTOS.

## Identidad fija (respetá al pixel)

**3 palabras guía:** Vanguardia · Cercanía · Precisión. Sensación: premium pero del lado del que arranca.

**Familia de 2 marcas (misma base, distinto acento — NUNCA se mezclan):**
- **Oficina de Jhonson** → acento **ámbar `#ecd175`** (+ claro `#f5e2a0`, oscuro `#b89a4a`). Foco: automatización con IA. Imaginario: redes de nodos, engranajes de luz, flujos de datos, agentes trabajando.
- **Estudio de Jhonson** → acento **celeste/azul `#5b9cf6`**. Foco: diseño/desarrollo/innovación con IA. Imaginario: wireframes que cobran vida, capas de UI, pixel-perfect.
- **Sofía educativa** (contenido de aprendizaje/tendencias) → usa el mismo celeste `#5b9cf6` (variante clara para contexto educativo).

**Base común:** fondo negro `#09090a` / superficie `#111113`. **Regla 80/20:** ~80% oscuro/neutro, ~20% acento (el acento ilumina, no satura; una sola fuente de luz dominante).

**Neutros de texto:** blanco cálido `#f0ede8` (titulares) · `#9b9591` (secundario) · `#5a5652` (terciario). Nunca blanco puro. **Verde `#3ecf8e`** = señal de "sistema vivo/OK" (compartido, no acento de sub-marca).

**Tipografía:** **Space Grotesk** (display/titulares) + **Plus Jakarta Sans** (cuerpo/UI) + **JetBrains Mono** (tags/datos/footers, letter-spacing .16-.22em). Jerarquía marcada + mucho espacio negativo.

**6 motivos gráficos (carné de identidad):** (1) monograma **J** en recuadro redondeado; (2) **corchetes `[ ]`** en las 4 esquinas; (3) retícula técnica tenue de fondo; (4) scanline/grano sutil; (5) glow/halo del acento detrás del foco; (6) diagonal de luz en piezas comerciales.

**Prohibido:** texto/logos quemados en imágenes conceptuales, paletas ajenas (azules/verdes random, neón crypto), caras realistas reconocibles, stock, clipart, flat genérico, 3D plástico, watermarks, bordes.

## Entregables (generá TODOS, coherentes entre sí)

1. **Brand board** (1 lámina): paletas de las 2 marcas + Sofía (hex), escalas Space Grotesk/Jakarta/Mono, uso de logo, regla 80/20, do/don't.
2. **Sistema de logo:** monograma J + wordmark **Oficina de Jhonson** (ámbar) y **Estudio de Jhonson** (celeste) + versiones (color/mono/favicon, sobre claro y oscuro) + área de resguardo. (Referencia: hay un `logo.svg` OdJ con corchetes ámbar + nodo verde #3ecf8e — evolucionalo, no lo contradigas.)
3. **Elementos gráficos:** el set de los 6 motivos como piezas sueltas reutilizables (corchetes, grid, scanline, glow, diagonal, monograma).
4. **Plantillas de redes** (con grilla + slots de texto): post 1:1, story/reel 9:16, cover LinkedIn, cover FB, banner web — en variante Oficina (ámbar) y Estudio (celeste), y variante "cita/dato" vs "producto".
5. **Kit de VIDEO para HeyGen** (crítico) en 9:16 (y 1:1 + 16:9):
   - **Fondo/escena** carbón con halo de acento (ámbar para Jhonson, celeste para Sofía-Estudio/educativa).
   - **Lower-third:** nombre + rol en Space Grotesk + línea mono con el acento (ej. `JHONSON · Oficina de Jhonson`). **Intro bumper** (monograma J + glow, 1-1.5s) y **outro** (CTA + `oficinadejhonson.com` + redes, monograma J).
   - **Estilo de subtítulos** de marca (Space Grotesk bold, keyword en color de acento) — siempre on.
6. **Bloque de imagen (para gpt-image-2)** validado: fondo carbón + una luz volumétrica del acento + motivos por marca + espacio negativo + 4k, SIN texto/caras. (Ya existe una plantilla — refinala.)
7. **Tokens exportables:** paletas + tipos como lista de variables, lista para pegar en el brand kit de HeyGen y en CSS.

## Salida

Cada entregable = lámina/imagen separada + su spec (hex, tamaños, fuentes). Coherencia total.
Al final: "10 reglas rápidas" para que un agente configure una cuenta de video y NO tenga que decidir
estética por video. Objetivo: que TODO video de HeyGen se reconozca al instante como de la marca.
