# Ivan Castillo — Portfolio Website

Personal portfolio showcasing full-stack, systems, and data engineering projects.

**Live site:** https://ivanncastillo.com

---

## Projects

| # | Project | Stack |
|---|---|---|
| 1 | **Maison Noir** — Restaurant website | HTML, CSS, JS |
| 2 | **Three Rivers Theater** — Community theater & event venue | HTML, CSS, JS |
| 3 | **Warehouse Conveyor Control** — Industrial simulation & SCADA dashboard | Python, SCADA |
| 4 | **Domain Data Pipeline** — E-commerce data engineering pipeline | Python, SQL, ETL |
| 5 | **Workhint UI** — Hiring dashboard | React, Tailwind CSS |
| 6 | **ConstructIQ** — Construction analytics dashboard | React 19, TypeScript, Tailwind CSS v4, Recharts |
| 7 | **Sensor Telemetry Simulator** — Multithreaded spacecraft sensor simulation | C++17, CMake, GoogleTest |

---

## Tech Stack

- Plain HTML/CSS/JS — no build system
- Bootstrap 5.2.3 (CDN)
- Font Awesome 6.3.0 (CDN)
- Google Fonts: Montserrat, Roboto Slab

---

## Structure

```
Portfolio_Website/
├── index.html              # Single-page portfolio
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── assets/
│   └── img/               # Portfolio images, logos, icons
└── beta_pages/            # Individual project sub-pages
```

## Local development

No build step — open `index.html` directly in a browser.

```bash
open index.html
# or
python3 -m http.server 8080   # then visit http://localhost:8080
```
