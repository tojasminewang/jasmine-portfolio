# Jasmine Wang · Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS.
**All content lives in one file: `src/data/portfolioData.js`** — you never
need to touch the components to update your info.

## Five design styles

The site ships with five complete designs (in `src/variants/`), all showing
the same content: **Atelier**, **Coastal**, **Petal**, **Pop**, **Journal**.

- Use the black **Style** switcher in the bottom-right corner of the site to
  flip between them live (or add `?v=pop` etc. to the URL).
- When you've picked a favourite, open `src/App.jsx` and set
  `DEFAULT_VARIANT` to its id (`'atelier' | 'coastal' | 'petal' | 'pop' | 'journal'`),
  then set `SHOW_SWITCHER = false` to hide the picker before deploying.
- You can delete the unused files in `src/variants/` afterwards if you like
  (also remove their imports and entries in `src/App.jsx`).

## 1. Run the website locally

```bash
npm install   # first time only
npm run dev
```

Then open http://localhost:5174 in your browser.

## 2. Edit the data file

Open `src/data/portfolioData.js`. Each section of the website reads from one
export in this file:

| Website section | Edit this |
| --------------- | --------- |
| Navbar/Hero/Footer name & title | `basics` |
| Hero headline & intro | `basics.headline`, `basics.intro` |
| About | `about` |
| Projects | `projects` |
| Skills | `skills` |
| Experience | `experience` |
| Achievements | `achievements` |
| Education | `education` |
| Languages | `languages` |
| Resume | `resume` |
| Contact | `contact` |

Save the file and the browser updates instantly (hot reload).

## 3. Replace placeholders

Anything in `[square brackets]` is a placeholder. Replace the text between
the quotes, e.g.:

```js
headline: '[Your headline goes here — one short sentence about who you are]',
// becomes
headline: 'Lifeguard-certified student who loves math contests and teaching kids.',
```

## 4. Add projects and achievements

- **Project:** copy one `{ ... }` block inside `projects`, paste it below,
  and edit the fields. Set `status: 'Completed'` and `link: 'https://...'`
  to turn the "Coming Soon" button into a working "View Project" button.
  For a picture, drop an image into the `public/` folder and set
  `image: '/my-picture.png'`.
- **Achievement:** edit one of the dashed placeholder cards in
  `achievements` and change `placeholder: true` to `placeholder: false`
  so it renders as a real card. Copy a block to add more.
- **Skill:** same idea — edit a `[Future skill]` entry in `skills` and flip
  `placeholder` to `false`.

## 5. Add your resume PDF

1. Save your resume as `resume.pdf` inside the `public/` folder.
2. In `portfolioData.js`, change `resume.url` from `null` to `'/resume.pdf'`.
3. The "Download Resume" button turns on automatically.

## 6. Deploy the website

Easiest options (all free for personal sites):

- **Netlify:** run `npm run build`, then drag the `dist/` folder onto
  https://app.netlify.com/drop — done.
- **Vercel:** push this folder to a GitHub repository, then import it at
  https://vercel.com/new (it auto-detects Vite; no settings needed).
- **GitHub Pages:** push to GitHub, set `base: '/<repo-name>/'` in
  `vite.config.js`, run `npm run build`, and publish the `dist/` folder
  (e.g. with the `gh-pages` package or a GitHub Action).

After deploying, any time you edit `portfolioData.js`, rebuild/redeploy to
publish the changes.

## Privacy note

Your street address and phone number are intentionally **not** on the
website — it's public. Only your email and "Thornhill, Ontario" appear.
