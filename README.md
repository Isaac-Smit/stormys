# stormys

Stormys Man Cave Barbershop landing page.

This is a static site served from the `src` directory, styled with SCSS (compiled via VS Code Live Sass Compiler), and using a small amount of vanilla JavaScript.

## Prerequisites
- VS Code
- VS Code extensions:
  - Live Server
  - Live Sass Compiler

## Quick Start (Local)
1) Open the repo in VS Code.
2) Start Sass compile: press `F1` → "Watch Sass".
   - Outputs `.css` and `.min.css` to `src/assets/css/` (configured in `.vscode/settings.json`).
3) Open `src/index.html` with Live Server (right‑click → "Open with Live Server").
   - Live Server is configured to serve the `src` folder on `http://localhost:5501/`.

## Editing Guide

### HTML
- Entry file: `src/index.html`.
- Sections are anchored for nav: `#Home`, `#Pricing`, `#Reviews`, `#About`.
- Carousel images are set via inline `background-image:url(...)` in the Reviews section.

### Styles (SCSS → CSS)
- Edit SCSS in `src/assets/scss/`.
- Main entry: `src/assets/scss/stormys_landing.scss` which imports partials:
  - `_navbar.scss`, `_location.scss`, `_logo.scss`, `_appointment.scss`, `_pricing.scss`, `_picture-break.scss`, `_reviews.scss`, `_footer.scss`, `_reset.scss`, `_colors.scss`.
- Live Sass Compiler generates both expanded `.css` and compressed `.min.css` to `src/assets/css/`.
- HTML links to the minified stylesheet: `assets/css/stormys_landing.min.css`.
- Do not edit generated files under `src/assets/css/` directly.

### JavaScript
- Edit `src/assets/js/stormys_landing.js`.
- The page loads `src/assets/js/stormys_landing.min.js`.
- After editing, re-minify to update the `.min.js` (use a VS Code minify extension or any JS minifier). Commit both files.

## Project Structure
- `src/index.html` — main page.
- `src/assets/scss/` — SCSS entry + partials (site sections and variables).
- `src/assets/css/` — compiled CSS outputs (`.css`, `.min.css`, and maps) from Live Sass.
- `src/assets/js/` — site JavaScript (`stormys_landing.js` and `.min.js`).
- `src/assets/images/` — images, icons, and carousel assets.
- `.vscode/settings.json` — Live Server root (`/src`), port (`5501`), and Live Sass output config.
- `CNAME` — custom domain (`stormysbarbershop.co.nz`).
- `LICENSE` — MIT license.

## Deployment
- The site uses absolute asset paths like `/assets/...`. Ensure the deployed web root is the contents of `src` so these paths resolve.
- GitHub Pages:
  - Keep `CNAME` at the deployed site root to retain the custom domain.
  - If deploying from a branch or action, publish the contents of `src/` as the site root.
- Other hosts:
  - Serve the contents of `src/` as the document root.

## Troubleshooting
- Seeing 404s for assets locally? Ensure you’re using Live Server (not `file://`), and that the server root is `src` (configured in `.vscode/settings.json`).
- No styles after editing SCSS? Make sure Live Sass is watching and that `stormys_landing.min.css` regenerated in `src/assets/css/`.
- JS changes not reflected? Re-minify `stormys_landing.js` to update `stormys_landing.min.js`.

## License
MIT — see `LICENSE`.
