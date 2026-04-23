# Portfolio Website - CLAUDE.md

## Project Overview
Ivan Castillo's personal portfolio website. A single-page application built on the Start Bootstrap Agency theme.

## Structure
```
Portfolio_Website/
├── index.html          # Main single-page portfolio
├── default.php         # PHP entry point
├── css/
│   └── styles.css      # Main stylesheet (includes Bootstrap customizations)
├── js/
│   └── scripts.js      # Main JavaScript
├── assets/
│   ├── favicon.ico
│   └── img/            # Images (portfolio/, about/, team/, logos/)
└── beta_pages/         # Sub-pages for individual portfolio projects
    └── maison_noir_one_page_starter.html
```

## Tech Stack
- Plain HTML/CSS/JS — no build system, no bundler, no package manager
- Bootstrap 5.2.3 (via CDN)
- Font Awesome 6.3.0 (via CDN)
- Google Fonts: Montserrat, Roboto Slab
- SB Forms (via CDN) for contact form

## Page Sections
- **Navigation** — fixed top navbar with smooth-scroll links
- **Masthead** — hero header
- **Services (#services)** — expertise cards (Creative Solutions, Responsive Designs, Collaborative Efforts)
- **Portfolio (#portfolio)** — 6-item grid with modal popups
- **About (#about)** — timeline section
- **Team (#team)** — team member cards
- **Clients** — logo strip
- **Contact (#contact)** — SB Forms contact form
- **Footer** — copyright, social links, legal links

## Portfolio Items
1. Maison Noir — Restaurant Website (links to `beta_pages/maison_noir_one_page_starter.html`)
2. LAAPA — Performing Arts Academy Website
3. Finish — Identity
4. Lines — Branding
5. Southwest — Website Design
6. Window — Photography

## Key Notes
- No build step — edit files directly and open in browser
- CDN dependencies require internet connection to render correctly
- Contact form requires an SB Forms API token (`data-sb-form-api-token="API_TOKEN"` in `index.html`)
- Several sections still contain Lorem Ipsum placeholder text
- Typo exists in index.html:97 — "Callaborative" should be "Collaborative"
