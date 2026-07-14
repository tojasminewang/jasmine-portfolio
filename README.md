# Jasmine Wang · Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.

**Live site:** https://tojasminewang.github.io/jasmine-portfolio/
**Auto-deploy:** every push to `main` rebuilds and publishes the site
(GitHub Actions, ~30 seconds).

**All content lives in one file: `src/data/portfolioData.js`** — you never
need to touch the components to change what the site says.

## Design

The site uses the **Atelier** design (`src/variants/Atelier.jsx`): warm
cream, sage, and terracotta, serif headings, botanical line art, and small
interactions (cursor parallax, tilt cards, a petal flourish when the
signature is clicked). Four alternate designs that existed during
development were removed; they are recoverable from git history.

## Edit the text

Open `src/data/portfolioData.js` and change the words between the quotes.
Keep the quotes and commas. Every section is labelled:

| Website section | Edit this export |
| --------------- | ---------------- |
| Navbar/Hero/Footer name & title | `basics` |
| Hero headline & intro | `basics.headline`, `basics.intro` |
| Availability badge + schedule | `availability` |
| About | `about` |
| Projects | `projects` |
| Skills (with tag chips) | `skills` |
| Experience | `experience` |
| Achievements | `achievements` |
| Education | `education` |
| Languages | `languages` |
| References | `references` |
| Contact | `contact` |

Two ways to publish an edit:

1. **On github.com (no terminal):** open the file in the repo, click the
   pencil icon, edit, then "Commit changes" — the site republishes itself.
2. **Locally:** edit + save, then
   ```bash
   git add -A && git commit -m "update text" && git push
   ```

## Run locally

```bash
npm install   # first time only
npm run dev
```

Then open http://localhost:5174.

## Images

Illustrations live in `src/assets/img/` and are imported at the top of
`portfolioData.js`. To change a picture, replace the file (keep the same
name) or import a new one and point the section at it. The favicon is
`public/favicon.svg` (+ PNG fallbacks in `public/`).

## Privacy note

The street address and phone number are intentionally **not** on the
website — it's public. Only the email and "Thornhill, Ontario" appear.
The References section lists organizations' public business numbers only.
