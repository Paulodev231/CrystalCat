# Crystal Cat ($CCAT) — Landing Page

A conversion-optimized, single-page marketing site for the **Crystal Cat ($CCAT)** token,
built with glassmorphism, scroll animations and interactive "wow" effects. Pure HTML / CSS / JS —
no build step required.

## Run it

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html   → markup & content (all sections)
styles.css   → theme tokens, glassmorphism, animations, responsive layout
script.js    → particles, scroll-reveal, animated counters, donut, copy-to-clipboard, tilt, cursor glow
assets/      → logo, emblem, whitepaper PDF
```

## Sections

Hero → Contract bar → Vision/Mission → Tokenomics → Real-World Utility →
Crystal Care (charity) → Roadmap → How to Buy → FAQ → CTA banner → Footer.

## Facts (from the whitepaper)

- **Token / Ticker:** Crystal Cat / `$CCAT`
- **Network:** BNB Smart Chain
- **Total supply:** 100,000,000 · **Burn:** 10% · **Tax:** 3% buy / 3% sell · **Max wallet:** 4%
- **Liquidity:** locked 2 years · **Ownership:** renounced
- **Contract:** `0x3E82Be7F376757A9EDa4d3F914Ed753Acf3FA460`

## ⚠️ Placeholders you must replace before going live

Search the code for `PLACEHOLDER` and swap in real URLs:

| What | Where | Current value |
|------|-------|---------------|
| Telegram | `index.html` (`data-social="telegram"`) | `#TELEGRAM_PLACEHOLDER` |
| X / Twitter | `index.html` (`data-social="x"`) | `#X_PLACEHOLDER` |

The **Buy on PancakeSwap** and **View on BscScan** links are already wired to the
official contract address. Verify the PancakeSwap swap URL resolves correctly for your pair
before promoting it.

## Disclaimer

Real-estate utility and Crystal Care are described as **proposed / exploratory** concepts,
matching the whitepaper. Nothing on the site is financial advice.
