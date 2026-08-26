# Yousef Sherif — Portfolio Site

A single-page, mobile-first portfolio site (dark "blueprint / circuit" theme) ready to publish on GitHub Pages.

## Files

```
index.html          the whole page
css/style.css        styling
js/script.js          scroll animations + the glowing side trace
assets/profile.jpg          <- add your own photo here (see below)
assets/profile-placeholder.svg   shown automatically until you add profile.jpg
assets/resume.pdf            currently your print portfolio PDF — swap for a real CV if you have one
```

## 1. Add your photo

Drop a photo file named exactly **`profile.jpg`** into the `assets/` folder (square photo, plain/no background works best, at least 400×400px). The page already looks for it — nothing else to change. Until you add it, a clean "YS" placeholder badge shows instead.

## 2. Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload all the files in this folder, keeping the same structure (`index.html` at the root, `css/`, `js/`, `assets/` as sub-folders).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/(root)**.
5. Save. GitHub gives you a link like `https://yourusername.github.io/portfolio/` within a minute or two.

If you'd rather do it from the command line:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/Yousef-07/YOUR-REPO-NAME.git
git push -u origin main
```

Then turn on Pages as in step 3–5 above.

## 3. Things worth double-checking before you publish

- **Resume button** currently links to your print portfolio PDF (`assets/resume.pdf`). Replace that file with a dedicated one-page CV if you have one — same filename, no code changes needed.
- **"Traffic Navigator Project"** — you mentioned this project but I didn't have any details on it from your portfolio, so I left it out rather than guess. Send me two lines about what it does and I'll add a fourth project card.
- **Codeforces link** — not included as a button since the handle in your source file was incomplete; happy to add it as a 7th button once you confirm the full profile URL.
