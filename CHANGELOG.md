# Changelog

Auto-generated from conventional commits.

### 2026-07-03

fix: add local three.js fallback for CDN issues
- Added local three.min.js in public/js/ as primary loader
- Fallback to cdnjs CDN on error

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

refactor: merge wallet + clock into one box with two titled sections
- Combined donate-box and clock-box into one unified box
- Section 1: 'حمایت مالی' with USDT TRC20 wallet + QR
- Section 2: 'وقت محلی من جهت همکاری ریموت در سطح جهانی' with Tehran clock
- Cleaned up unused clock-box CSS

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

fix: remove clock title, larger QR on right, remove map i18n keys
- Removed only clock-box heading/Tehran title (not the clock itself)
- Moved QR code to right side with larger size (200x200)
- Removed unused map_title/map_open i18n keys
- Cleaned up unused clock-head CSS

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

feat: replace TON wallet with USDT TRC20 + QR code + icon
- Wallet address changed to TM4uZRWBHDtzRQrYgdFhuiNrvDiaJgPFtS
- Added QR code via qrserver.com API
- Added USDT (Tether) SVG icon with TRX badge on bottom-right
- Label: 'SEND USDT TRC20' with i18n support (en/fa)
- Email remains mohammad@iodeck.ir

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

fix: unify Three.js scenes — fixed fullscreen background, mini scenes in skills/report sections
- Made main 3D background position: fixed (full viewport, z-index 0)
- Refactored makeOrbitRing into shared utility for both main and mini scenes
- Added initMiniThree() for smaller 3D scenes with configurable shape, rings, particles
- Placed mini3d in skills (icosahedron, purple, 2 rings) and report (dodecahedron, blue, no rings)
- Removed duplicate .hero-3d canvas CSS rule
- Adjusted mini-3d positioning and opacity for light/dark themes

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

feat: SEO overhaul, cleanup unused files, optimize speed, add robots.txt + sitemap

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

chore: replace map with live Tehran clock widget

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

feat: port GitHub Report, Three.js 3D background, scroll animations to bootstrap site

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

fix: clean node_modules/.next before Pages upload to reduce artifact size

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

revert: restore original index.html and static.yml for GitHub Pages
GitHub Pages back to original bootstrap-based design.
Vercel keeps the Next.js app with network-topology background.

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update CI status

### 2026-07-03

chore: update changelog

### 2026-07-03

fix: add .npmrc legacy-peer-deps for Vercel + clean up static.yml

### 2026-07-02
