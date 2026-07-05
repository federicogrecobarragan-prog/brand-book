# Canales — guía operativa por superficie

> Mapa de dónde publicamos, con qué marca/voz/formato. Detalle de reglas: `voz-y-tono/` +
> `video-heygen/avatares-y-guiones-CANONICO.md`. Operativa del motor: `/opt/hermes-eval/projects/agencia/AGENTS.md`.

## Cuadro de canales

| Canal | Marca/voz | Formato | Motor / cómo se publica | Cadencia |
|---|---|---|---|---|
| **LinkedIn perfil** Federico | builder 1ª persona (ámbar) | texto + imagen editorial | Tokio (`trend_linkedin_note` → aprobación /publicar) | L/Mi/V |
| **LinkedIn página** OdJ | institucional plural (ámbar) | texto + imagen | Tokio / composer página (org 126103970) | Mar/Jue |
| **Instagram** (Oficina/Estudio) | cercano (ámbar/cian) | post 1:1 + Reel 9:16 | `social_autopost.py` (FB/IG) + video HeyGen (futuro) | rotador |
| **Facebook** (Oficina/Estudio) | cercano | post + foto/video | `social_autopost.py` | rotador |
| **Web** oficinadejhonson.com | marca (sistema web) | landings + blog + ChatJhonson | Vercel / `odj-publicar-producto` | on-demand |
| **Video / Reels** (nuevo) | Jhonson (ventas) / Sofía (educa) | 9:16 avatar | **HeyGen** (a cablear) → publica vía social_post | por diseñar |
| **Email outbound** | OdJ | secuencias | Instantly (VibeMarketing) | campañas |
| **WhatsApp** | OdJ | lead magnets + campañas | bots + wa_campaign | funnel |

## Reglas transversales

- **Acento por marca no se mezcla** entre canales: Oficina = ámbar, Estudio = cian, Sofía educativa = teal.
- Todo lo audiovisual/gráfico = pasa por el brand book (este repo). Texto = voz por superficie.
- **VibeMarketing autónomo:** el objetivo es que crons + agentes (HERMES opera) generen y publiquen
  alineado sin decisión estética por pieza. HeyGen es la pata de video de ese motor.
- Matcheo rubro→bot (ver `publico-objetivo/icp.md`) rige qué gancho se muestra a cada segmento.

## Estado del motor (VibeMarketing)

Ya existe: caption (voz OdJ) + imagen gpt-image-2/tarjeta branded por post (FB/IG), Tokio LinkedIn,
Instantly email, bots WhatsApp. **Falta la pata VIDEO** (HeyGen) → guiones y sistema visual ya
especificados; falta cablear la cuenta (config) + el generador de reels.
