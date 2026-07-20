# 🎬 ESTÁNDAR DE CALIDAD — Video HeyGen · Oficina & Estudio de Jhonson

> **Piso de calidad NO NEGOCIABLE.** Todo video que generemos con HeyGen (Jhonson u Sofía) debe
> cumplir COMO MÍNIMO todo lo de este doc. Se puede mejorar por encima; nunca entregar por debajo.
> Derivado del análisis de los 2 videos master retocados a mano por Federico (16/07):
> `video-oficina-de-jhonson-presentacion-fede` (85s) y `video-estudio-de-jhonson-presentacion-sofia` (59s).

---

## 0. Ficha técnica (mínimos)

| Parámetro | Mínimo | Notas |
|---|---|---|
| Resolución | **1080×1920** (9:16) | vertical, Reels/Stories/Shorts |
| Códec | H.264 + AAC | mp4, faststart |
| Frame rate | 25 fps (master) / 60 fps (gráficas propias) | avatar puede ir a 25; las escenas del motor a 60 |
| Duración | 45–90s | Jhonson (venta) más largo; Sofía (educa) puede ser más corto |
| Audio | voz clonada + música tech-cálida sutil | nunca voz sola sin cama musical |

⚠️ **DEFECTO A CORREGIR (no replicar):** los 2 masters salieron con **watermark `clideo.com`** abajo-derecha (herramienta gratis de compresión). El estándar es **export LIMPIO, sin watermark de terceros.** Comprimir con ffmpeg o herramienta paga.

---

## 1. Estructura obligatoria del video (orden)

```
[1] INTRO glamour (logo animado)        ~6 s
[2] AVATAR — hook + presentación        habla a cámara, con lower-third
[3] GRÁFICA de producto (motor propio)  intercalada
[4] AVATAR — desarrollo                  vuelve la cara
[5] GRÁFICA de producto / dato           intercalada
[6] (repetir avatar↔gráfica según guion)
[7] AVATAR — cierre / CTA verbal
[8] OUTRO glamour (logo + CTA + redes)  ~6 s
```

**Regla de oro:** NUNCA es un talking-head de punta a punta. Se **intercala avatar ↔ gráfica** para dar ritmo de edición real. Los 2 masters cortan a gráfica cada ~8-15s.

---

## 2. Intro / Outro

- **Usar los MP4 del motor propio** (`Intro Oficina/intro-oficina-glamour-9x16.mp4` + `outro-...`). Ya aprobados.
- Jhonson/Oficina → intro+outro **ámbar**. Sofía/Estudio → versión **celeste** (pendiente de generar con el mismo motor).
- Sofía master abre con flash celeste + logo "Estudio de Jhonson"; Jhonson abre con la intro glamour ámbar. Ambos cierran con logo + barra de redes.

---

## 3. Avatar (calidad de imagen)

- **Look cinematográfico, no "avatar plano":** fondo oscuro con profundidad (paneles acústicos / biblioteca desenfocada), **luz de acento de marca** rebotando en el rostro (ámbar cálido en Jhonson; púrpura/azul frío en Sofía).
- Encuadre plano medio / medio-corto, mirada a cámara, gesto natural de manos (no estático).
- Vestimenta sobria (Jhonson hoodie carbón; Sofía sweater tierra). Micrófono de podcast en cuadro = señal "estudio real".
- **Logo bug** chico en esquina superior (marca "Jhonson") presente en segmentos de avatar.

---

## 4. Subtítulos KARAOKE (obligatorios, siempre ON)

El sello del estilo. Especificación exacta:

- Posición: **tercio inferior**, centrado, sin tapar la boca.
- Tipografía **bold, MAYÚSCULAS**, peso alto (Space Grotesk / grotesk pesada).
- Texto blanco `#F0EDE8`; **la palabra clave que se está diciendo resaltada en el ACENTO DE MARCA**:
  - Jhonson → keyword en **ámbar `#ECD175`**. Ej: "**SIN** PAGAR?." (SIN en ámbar).
  - Sofía → keyword en **celeste `#5B9CF6`**. Ej: "**MIENTRAS** DORMÍS, TU NEGOCIO" (MIENTRAS en celeste).
- 2-4 palabras por pantalla, sincronizadas al habla (ritmo karaoke, no bloque estático).
- Sombra/contraste suficiente para leerse sobre cualquier fondo.

---

## 5. Tarjetas / callouts flotantes (lower-thirds)

Dos variantes vistas, ambas válidas:

**A) Tarjeta boxed (Jhonson):** caja redondeada azul-noche `#111113` con **barra de acento ámbar a la izquierda**. Headline blanco bold uppercase (ej "¿IA & AGENTES GRATIS?") + pill/dash ámbar con subtexto mono ámbar (ej "SIN PAGAR NADA!!!"). Aparece al costado, solapando pecho/mano del avatar. Entra animada, no cortada.

**B) Palabra full-bleed (Sofía):** palabra gigante centrada en el acento (ej "**PRODUCTIVIDAD**" celeste), línea-regla fina debajo + subtítulo descriptivo en gris/blanco ("Mejora cualquiera de tus flujos de trabajo").

- El texto de marca va SIEMPRE en overlay, **nunca quemado en el fondo** del avatar.
- Acento por marca **NO se mezcla**: ámbar solo Jhonson, celeste solo Sofía.

---

## 6. Escenas gráficas de producto (motor propio)

- Renderizadas fuera de HeyGen con el motor (`heygen-assets/motor-render/`), 60fps, branding pixel-perfect.
- Estructura de 4 actos por producto: **dolor cuantificable → magia (cómo trabaja) → resultado → stat/CTA**.
- Datos SIEMPRE reales del sitio del producto (nunca inventar métricas).
- Eyebrow mono arriba (`● PRODUCTO · DEMO GRATUITA`) + URL abajo, fijos.
- Verde `#3ECF8E` = vivo/gratis/confirmado. Ámbar = lo que se vende.
- Piezas ya hechas y reutilizables: AgendaBot, FacturaBot, CTA sistemas a medida. **Falta: CotizaBot** (aparece en el master de Jhonson solo como tarjeta flotante "Cotiza Bot · Acelera tus ventas" — conviene armarle su escena gráfica).

---

## 7. B-roll (opcional)

- El master de Sofía intercala **stock footage** (persona con tablet). Permitido como apoyo, PERO:
- ⚠️ el clip usado tenía **tinte verdoso** que rompe la paleta. Si se usa b-roll, **corregir color** a la línea de marca (cálido para Oficina, frío para Estudio) o descartarlo.

---

## 8. Voz y guion

- Voz clonada rioplatense, **fluida, no neutra/robótica** (ya validado con Jhonson.V3).
- Copy apunta al **dolor cuantificable** que vende el propio sitio, no a features genéricas.
- Jhonson = confiado, vendedor, cierra con CTA. Sofía = didáctica, educa, no vende agresivo.
- Un mensaje por pieza, cerrar en acción concreta. Sin precios (se cotizan).

---

## 9. Checklist de aprobación (antes de publicar)

- [ ] 1080×1920, sin watermark de terceros
- [ ] Intro glamour + outro glamour del acento correcto
- [ ] Avatar con luz de acento + fondo con profundidad + logo bug
- [ ] Se intercala avatar ↔ gráfica (no talking-head puro)
- [ ] Subtítulos karaoke ON, keyword en acento de marca
- [ ] Al menos 1 tarjeta/callout flotante on-brand
- [ ] Al menos 1 escena gráfica de producto con dato real
- [ ] Acento por marca NO mezclado (ámbar Jhonson / celeste Sofía)
- [ ] Voz fluida rioplatense + música de fondo
- [ ] CTA verbal + outro con web y redes

> Si algo de este checklist falla → NO se publica. Ese es el piso.
