TRISTAN SURAJBALI — HARDWARE PORTFOLIO (v2)

Open index.html in a browser to preview the site locally.

FILES
- index.html      Home page
- pdc.html        PDC Rev B case study
- lighting.html   Lighting board debugging case study
- fan.html        Temperature-Controlled Fan case study (photos pending — see below)
- styles.css      All styling (single stylesheet, CSS variables at the top)
- script.js       Image zoom/lightbox behavior (click any schematic/photo to enlarge)
- assets/         Photos, renders, and schematic exports

DESIGN NOTES
The layout borrows structural conventions from your actual Altium sheets —
title blocks, sheet numbers, revision tables, spec tables — instead of
generic startup-template cards. Fonts (Space Grotesk / IBM Plex Sans / IBM
Plex Mono) load from Google Fonts via <link> tags in each HTML file, so an
internet connection is needed for them to render as intended; otherwise the
page falls back gracefully to system fonts.

BEFORE PUBLISHING
1. Add your resume PDF as `resume.pdf` in this folder (the Resume buttons on
   both the homepage and footer already link to it — it will 404 until you
   add the file). Alternatively, point that link at a hosted PDF elsewhere.
2. LinkedIn is already wired up to https://www.linkedin.com/in/tristan-surajbali/
   Contact email is tsurajbali@wisc.edu everywhere (swap it if you'd rather
   use a personal address).
3. GitHub isn't currently linked anywhere — say the word if you want a
   GitHub button added (e.g. in the nav or footer).
4. I cropped assets/pdc-3d.jpeg to remove a phone-browser status bar/UI
   chrome that was visible in the original screenshot. If you have a cleaner
   export of that 3D view directly from Altium (File > Export > Image, or a
   screenshot without the browser frame), swap it in for a sharper result.
5. fan.html uses dashed "PENDING" placeholder boxes instead of real images
   for the Temperature-Controlled Fan project (block diagram, PCB layout,
   assembled board, bench bring-up, scope capture — 5 placeholders total).
   Once you have those images, drop them in assets/ and replace each
   `<div class="pd-figure pending">...</div>` block with a normal
   `<div class="pd-figure"><img data-zoom src="assets/your-file.jpg" alt="..."/>
   <div class="pd-caption">...</div></div>`, matching the pattern used on
   pdc.html and lighting.html. The homepage's third project tile
   (`.pt-media.pending` in index.html) needs the same treatment.
6. Confirm Badger Solar Racing is fine with the schematic/layout images
   being public, and double check the FSGP 2026 / ASC stats are worded the
   way your team would want them represented publicly.
7. Personal address and phone number from your resume were intentionally
   left off the public site — only email and LinkedIn are exposed. Say the
   word if you'd like a phone number listed too.

DEPLOYMENT
Free and simple: GitHub Pages.
1. Create a GitHub repo (e.g. `tristan-portfolio`).
2. Push these files to the repo root (or a `/docs` folder).
3. In repo Settings → Pages, set the source to that branch/folder.
4. Your site will be live at https://<username>.github.io/<repo-name>/

Netlify and Vercel also work by just dragging this folder into their
dashboard — no build step needed since this is plain HTML/CSS/JS.
