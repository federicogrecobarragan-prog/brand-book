# ✅ RECONCILIACIÓN DE IDENTIDAD — RESUELTA (05/07/2026, decisión Federico)

> Había 2 sistemas divergentes (contenido vs web). **Decisión de Federico: unificar TODO al estilo del
> LOGO + WEB.** Este doc pasa de "decisión pendiente" a **canon único**. Todo canal (web, redes, video
> HeyGen, docs) usa de acá en adelante estos valores.

## SISTEMA ÚNICO DE MARCA (canónico)

| Elemento | Valor | Notas |
|---|---|---|
| Fondo base | `#09090a` · superficie `#111113` · elevada `#1a1a1d` | negro (estilo web) |
| Bordes | `#252529` / `#32323a` | |
| **Ámbar — Oficina de Jhonson** | **`#ecd175`** (claro `#f5e2a0`, oscuro `#b89a4a`, glow `rgba(236,209,117,.18)`) | acento héroe de la marca madre |
| **Celeste/Azul — Estudio de Jhonson / Sofía** | **`#5b9cf6`** (el `--blue` de la web) | sub-marca; "más presencia de celeste/azul" |
| **Verde — señal viva** | `#3ecf8e` | del logo; estados OK / "IA activa" / blip. Compartido, no es acento de sub-marca |
| Texto | `#f0ede8` (principal) · `#9b9591` · `#5a5652` | blanco cálido, nunca `#fff` |
| **Display** | **Space Grotesk** | (antes Poppins — unificado a la web) |
| **Cuerpo/UI** | **Plus Jakarta Sans** | |
| **Mono** | **JetBrains Mono** | tags/labels/datos |

## Qué cambió respecto al brand book v1 (30/06)

- Ámbar `#f5b50a` → **`#ecd175`** (y se retira `#d4973a` del logo viejo).
- Estudio cian `#22d3ee` + Sofía teal `#2dd4bf` → **`#5b9cf6` celeste/azul** (una sola familia fría para Estudio/Sofía).
- Display Poppins → **Space Grotesk**.
- Fondo carbón cálido `#0a0907` → **negro web `#09090a`**.

## Regla de acentos (no se mezclan)

- **Oficina** = ámbar `#ecd175`. **Estudio/Sofía** = celeste `#5b9cf6`. Verde `#3ecf8e` = señal viva (ambas pueden usarlo como "vida del sistema", NO como acento de marca).

## ⚠️ Propagación downstream pendiente (BAKUGO, follow-on)

Los docs/scripts que aún usan los valores viejos (`#f5b50a`, Poppins) deben migrarse a este canon:
`docs/marketing/brand_identity.md`, `video_avatares_guiones.md`, y los scripts del motor social
(`social_card.py`, `tokio_post_image.py` bloques STYLE, `social_rotator.py`). Tarea aparte — el
brand-book (este repo) ya es la fuente de verdad nueva.

> Nota: si "celeste/azul" querías un hex distinto (ej. cian `#22d3ee`), avisá y se ajusta este único valor.
