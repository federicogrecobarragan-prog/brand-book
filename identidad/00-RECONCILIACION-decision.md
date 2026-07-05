# ⚠️ RECONCILIACIÓN DE IDENTIDAD — decisión pendiente de Federico

> El ecosistema evolucionó en 2 frentes que hoy **NO usan los mismos valores de marca**. Antes de
> configurar HeyGen (o cualquier canal nuevo), hay que decidir si se **unifican** o se **documentan
> como superficies distintas**. Esto NO bloquea HeyGen (el sistema de video/contenido es claro), pero
> es la deuda de marca #1. **Es tu decisión — no la tomé solo.**

## Los 2 sistemas que coexisten hoy

| Dimensión | **A) Contenido / Marketing / Video** (redes, gpt-image, HeyGen) | **B) Web / Producto** (oficinadejhonson.com, landings, cockpit) |
|---|---|---|
| Fuente de verdad | `identidad/brand-identity-CANONICO.md` (v1 30/06) | tokens `:root` del sitio + `design-system.md` |
| Fondo | carbón cálido `#0a0907`→`#1a1712` | negro frío `#09090a` / `#111113` |
| **Ámbar** | **`#f5b50a`** (dorado encendido) | **`#ecd175`** (dorado pálido) — y el logo/handoff usa **`#d4973a`** |
| Marca #2 | **cian `#22d3ee`** (Estudio) + **teal `#2dd4bf`** (Sofía educativa) | **verde `#3ecf8e`** (señal de vida/OK) |
| Display | **Poppins** (700-900) | **Space Grotesk** |
| Cuerpo/UI | — | Plus Jakarta Sans |
| Mono | JetBrains Mono ✅ (coincide) | JetBrains Mono ✅ (coincide) |
| Texto | marfil `#ece8df` | blanco cálido `#f0ede8` (≈ coincide) |

**Divergencias duras:** 3 ámbares (`#f5b50a` / `#ecd175` / `#d4973a`) · Poppins vs Space Grotesk · el "acento vivo" es verde en web pero cian/teal en contenido.

## Opciones

- **Opción 1 — Unificar (recomendada a mediano plazo):** elegir UN ámbar, UNA display, y un rol único para verde/cian. Requiere re-tokenizar la web O regenerar los assets de contenido. Más trabajo, marca 100% coherente en todo canal.
- **Opción 2 — Dos superficies formales (rápida):** documentar que "Contenido/Video" (cálido, `#f5b50a`, Poppins) y "Web/Producto UI" (frío, `#ecd175`, Grotesk) son **superficies deliberadamente distintas** de la misma familia Black Code. Aceptable si se asume a propósito. Riesgo: se siente "dos marcas parecidas".

## Para HeyGen (no espera esta decisión)

El video/avatar usa el **sistema A (Contenido)** — ya está 100% especificado en
`video-heygen/avatares-y-guiones-CANONICO.md`: **ámbar `#f5b50a`** (Jhonson/Oficina), **cian `#22d3ee`**
(Sofía/Estudio), **teal `#2dd4bf`** (Sofía educativa), **Poppins** en overlays, monograma J intro/outro.
La config de HeyGen se hace con ESTOS valores. Si más tarde se unifica (Opción 1), se re-ajusta el brand kit.

> **ACCIÓN FEDERICO:** elegir Opción 1 o 2. Mientras tanto, todo lo de HeyGen/redes = sistema A.
