# Changelog

Auto-generated from conventional commits.

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

chore: update CI status

### 2026-07-02

chore: update CI status

### 2026-07-02

chore: update changelog

### 2026-07-03

fix: add force-static to sitemap and robots for static export

### 2026-07-02

chore: update CI status

### 2026-07-02

chore: update changelog

### 2026-07-03

fix: npm ci --legacy-peer-deps for react 18 compatibility

### 2026-07-02

chore: update CI status

### 2026-07-02

chore: update CI status

### 2026-07-02

chore: update changelog

### 2026-07-03

feat: network-topology 3D background, GitHub report section, Reveal progressive-enhancement, comprehensive stats-sync
- Redesigned ThreeBackground: dodecahedron core, 3 orbital rings with traveling
  nodes, 24 network-connection lines, 120-particle constellation field
- Fixed Reveal component: initial={false} + mounted-state CSS fallback so
  content is visible without JavaScript (fixes Vercel blank page in Iran)
- Added comprehensive GitHub Report section at bottom of homepage with:
  overview grid, 30-day contribution bars, language breakdown, activity feed,
  focus-area tags
- Updated content.json with githubReport keys (en + fa)
- Updated stats.json with user-level data (followers, PRs, languages,
  contribution days, repos, last-year contributions)
- Updated stats-sync.yml workflow to fetch user stats, languages, contributions
  via GraphQL
- Updated static.yml to build Next.js with STATIC_EXPORT=true and deploy out/

### 2026-07-02

chore: update CI status

### 2026-07-02

chore: update changelog

### 2026-07-03

feat: sync 3D Skyline badge to README

### 2026-07-02

chore: update CI status

### 2026-07-02

chore: update changelog

### 2026-07-03

feat: sync README with profile repo - animated mermaid, ASCII art, yaml bio, collapsible links, fixed trophy/stats endpoints

### 2026-07-02

chore: update CI status

### 2026-07-02

generated: profile-3d-contrib [skip ci]
