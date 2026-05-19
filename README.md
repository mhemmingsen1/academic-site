# Academic Site

Personal academic website built with [Astro](https://astro.build), deployed to GitHub Pages.

## What's where

```
src/
├── data/
│   ├── site.ts          ← name, position, contact, profile links, GA ID
│   ├── publications.ts  ← all publications + their topic tags
│   ├── grants.ts        ← grants
│   └── teaching.ts      ← courses + pedagogy entries
├── pages/
│   ├── index.astro      ← home
│   ├── research.astro   ← tag-filtered publications
│   ├── grants.astro
│   └── teaching.astro
├── layouts/
│   └── Base.astro       ← head + header + nav + footer
└── styles/
    └── global.css       ← all styling, palette, typography
```

To add a publication, grant, course, or pedagogy entry, edit the relevant
file in `src/data/` — just push a new object onto the array. The topic
filter chips on the research and teaching pages are generated automatically
from the tags used; no need to edit a separate tag list.

## First-time setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Fill in `src/data/site.ts`**
   Name, position, education, email, PhilPeople URL, ORCID URL,
   optional Google Scholar / PhilPapers / CV path, and the Google Analytics
   Measurement ID (format `G-XXXXXXXXXX`). Leave `gaMeasurementId` as an
   empty string to disable analytics entirely.

3. **Edit `astro.config.mjs`**
   Set `site` and `base` according to your deployment target. The file's
   comments cover the three common cases (user/org page, project page,
   custom domain).

4. **Add your real content**
   Replace the example entries in `src/data/publications.ts`,
   `src/data/grants.ts`, and `src/data/teaching.ts`.

## Local development

```bash
npm run dev
```

Opens at `http://localhost:4321`. Edits hot-reload.

```bash
npm run build      # builds static site to ./dist
npm run preview    # serves the built site locally
```

## Deploying to GitHub Pages

1. Create a repository on GitHub and push this project to its `main` branch.

2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.

3. Confirm `site` and `base` in `astro.config.mjs` match the repo type:
   - For `<username>.github.io` repos: `base: '/'`
   - For any other repo name: `base: '/your-repo-name'`

4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds
   the site and publishes it. Subsequent pushes auto-deploy.

### Using a custom domain

If you want `yourdomain.com` instead of the github.io URL:

1. Add a file `public/CNAME` containing just your domain on one line
   (no `https://`, no path).
2. Set `site: 'https://yourdomain.com'` and `base: '/'` in `astro.config.mjs`.
3. Configure DNS at your registrar per GitHub's instructions.

## Customizing the look

All styling lives in `src/styles/global.css`. The CSS custom properties at
the top of the file (`--bg`, `--ink`, `--accent`, `--serif-display`,
`--serif-body`, etc.) are the easiest things to change if you want a
different palette or different fonts. The current palette is warm cream
background with muted oxblood accent; the fonts are EB Garamond (display)
and Source Serif 4 (body), both loaded from Google Fonts.
