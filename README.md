# Crystal Cat ($CCAT) — Landing Page

A conversion-optimized, single-page marketing site for the **Crystal Cat ($CCAT)** token,
built with glassmorphism, scroll animations and interactive "wow" effects. Pure HTML / CSS / JS —
no build step required.

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🚀 Deploy free on Vercel (dummy-proof walkthrough)

This is a plain static site, so there's **nothing to build and nothing to configure** —
Vercel just serves the files. Total time: about 3 minutes. You do **not** need to install
anything or touch the command line.

### Step 1 — Make sure your code is on GitHub
It already is 👍 — the site lives in this repo on the branch
`claude/crystal-cat-crypto-site-oib7rf`.

> **Recommended:** merge this branch into `main` first so Vercel deploys your main branch
> by default. On GitHub: open the Pull Request for this branch → **Merge**. If you'd rather
> deploy the branch directly, that's fine too — you'll pick it in Step 4.

### Step 2 — Create a free Vercel account
1. Go to **https://vercel.com/signup**
2. Click **“Continue with GitHub”** (easiest — it links your repos automatically).
3. Approve the sign-in. The free **Hobby** plan is all you need — no credit card.

### Step 3 — Import this repository
1. On your Vercel dashboard, click **“Add New…” → “Project”**.
2. Under **“Import Git Repository”**, find **`CrystalCat`** and click **Import**.
   - First time only: click **“Adjust GitHub App Permissions”** and give Vercel access
     to the `CrystalCat` repo, then come back.

### Step 4 — Configure (leave everything default!)
Vercel will show a **“Configure Project”** screen. Because this is a static site:

| Setting | What to do |
|---|---|
| **Framework Preset** | Leave as **“Other”** (Vercel auto-detects — don't change it) |
| **Root Directory** | Leave as `./` |
| **Build Command** | **Leave empty** |
| **Output Directory** | **Leave empty** |
| **Install Command** | **Leave empty** |
| **Branch** (optional) | If you did *not* merge to `main`, expand settings and pick `claude/crystal-cat-crypto-site-oib7rf` |

Then click the big **“Deploy”** button.

### Step 5 — Done! 🎉
After ~20–40 seconds you'll see confetti and a live URL like:

```
https://crystal-cat.vercel.app
```

Click **“Visit”** to open your live site. Every time you push new commits to that branch,
Vercel **auto-redeploys** — no extra steps.

### Step 6 (optional) — Add your own domain
1. In the project, go to **Settings → Domains**.
2. Type your domain (e.g. `crystalcat.io`) and click **Add**.
3. Vercel shows two DNS records (an `A` record and/or `CNAME`). Copy them into your
   domain registrar's DNS settings (GoDaddy, Namecheap, etc.). SSL is automatic and free.

---

### ⚡ Alternative: deploy in one command (for CLI users)
If you prefer the terminal:

```bash
npm i -g vercel     # install the Vercel CLI once
cd CrystalCat
vercel              # follow the prompts, accept all defaults
vercel --prod       # promote it to your production URL
```

### Troubleshooting
- **Page loads but has no styling / images?** Make sure the `assets/` folder,
  `styles.css` and `script.js` were committed and pushed (they are in this repo).
- **Fonts look plain?** The Google Fonts link needs internet — it works fine on the live
  Vercel URL even if it looked plain in a restricted preview.
- **404 on the live site?** Confirm `index.html` is in the repository **root** (it is), and
  that **Output Directory** was left empty in Step 4.

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
