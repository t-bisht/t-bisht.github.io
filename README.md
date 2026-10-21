```
 _____ ___ ___  _   _ ___ _  _ _____   ___ ___ ___ _  _ _____
|_   _| _ ) __|| | | / __| || |_   _| |   \ _ \_ _| \| |_   _|
  | | | _ \__ \| |_| \__ \ __ | | |_ _| |) |  _/| || .` | | |
  |_| |___/___/ \___/|___/_||_| |_(_)|___/|_| |___|_|\_| |_|

              t-bisht.github.io  ::  portfolio
```

# Tushar Bisht — Portfolio

Static site at [t-bisht.github.io](https://t-bisht.github.io). Plain HTML, CSS, vanilla JS. No build.

---

## Layout

```
.
├── index.html             # entry point
├── css/styles.css         # dark theme, grid bg, gradients
├── js/script.js           # data (projects, blogs, socials) + renderers
├── blogs/                 # published posts (HTML)
│   └── raw_docs/          # AsciiDoc sources
├── asciidocs/             # extra AsciiDoc material + book notes
├── notes/                 # research, interview prep, resources
└── repo-context.json      # design tokens + repo metadata
```

---

## Sections

- **Profile** — intro, socials (LinkedIn, X, WordPress, email), resume.
- **Projects** — active builds: `Artha-Setu`, `Hiemdall`.
- **Blog** — long-form on distributed systems, backend, security. Authored in AsciiDoc → rendered HTML.

Data lives in arrays inside `js/script.js`. Edit array, reload — no template work.

---

## Run locally

```bash
python3 -m http.server 8000
# or
npx serve .
```

Open <http://localhost:8000>.

---

## Add content

**Project** → append to `projects` in `js/script.js`:

```js
{ title, description, tech: [...], status, url? }
```

**Blog** → drop HTML in `blogs/`, source AsciiDoc in `blogs/raw_docs/`, then append to `blogs`:

```js
{ title, date: 'YYYY.MM.DD', url, readTime }
```

**Social** → append to `socialLinks`: `{ name, url, icon }`.

---

## Deploy

Push to `main` → GitHub Pages publishes. No pipeline.

---

## Contact

- Email: [tushar.bisht10@gmail.com](mailto:tushar.bisht10@gmail.com)
- LinkedIn: [tushar-bisht-16a9b373](https://www.linkedin.com/in/tushar-bisht-16a9b373)
- X: [@tushar_bisht_](https://x.com/tushar_bisht_)
- Blog: [wanderingbisht.wordpress.com](https://wanderingbisht.wordpress.com/)

---

_© 2026 Tushar Bisht_
