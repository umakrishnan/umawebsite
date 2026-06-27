# Uma Rao Krishnan — personal website

A simple, two-page static site. No build step, no dependencies — just HTML, CSS,
and a few lines of vanilla JS.

```
index.html      Home: hero, bio, skills (3 roles), highlights, contact
resume.html     Resume: scroll-reveal Berkeley highlights + full layout
css/styles.css  All styling + the purple theme (edit colors at the top)
js/main.js      Scroll-reveal + current year (the only JS)
assets/         Put your headshot.jpg here
```

## How to preview
Open `index.html` in any browser (double-click it). That's it.

## How to edit
- Content is your real resume data. The only **TODO** left: replace the `#`
  placeholder `href`s for **LinkedIn** and **GitHub** with your real profile URLs
  (they appear in `index.html` and `resume.html`).
- **Your photo:** lives at `assets/headshot.jpeg` and is already wired in.
  Replace that file to change it.
- **Colors:** change the variables at the top of `css/styles.css` (`:root`).
  The bold color-block palette keys off `--lilac`, `--grape`, and `--aubergine`.
- **Fonts:** big headlines use **Anton** (heavy condensed); body uses **Inter**.

## How to publish (free)
- **GitHub Pages:** push this folder to a repo → Settings → Pages → deploy from
  `main` / root.
- **Netlify / Cloudflare Pages:** drag-and-drop this folder into their dashboard.
