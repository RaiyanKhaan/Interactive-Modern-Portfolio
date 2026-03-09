<div align="center">

# ✨ Sanjana Maria — Interactive Modern Portfolio

A sleek, fully responsive portfolio website with **dark-first reddish theme**, smooth Framer Motion animations, and interactive sections.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-e11d48?style=flat-square)](LICENSE)

</div>

---

## 🚀 Live Demo

> Deploy to Vercel ([see guide below](#%EF%B8%8F-deployment-to-vercel)) and replace this line with your live URL.

---

## ✨ Features

- **Dark-first** — Defaults to deep rose/crimson dark theme; fully toggleable light mode
- **Reddish gradient theme** — `rose → purple` primary palette with amber accents
- **Framer Motion animations** — Scroll-in reveals, hover lifts, floating profile image, typewriter role text
- **Fully responsive** — Mobile hamburger menu, fluid grids, touch-friendly targets
- **Filterable Projects grid** — Category filters + click-to-open detail modal; icon fallbacks for imageless projects
- **Alternating Experience timeline** — Image banners, Achievement / Teaching / Research type badges
- **Animated Skill bars** — Intersection-Observer–triggered progress bars across 3 skill categories
- **Contact form** — Formspree-powered with success/error feedback states
- **Resume download** — Navbar + About section; links to actual PDF in `public/docs/`
- **SEO ready** — React Helmet Async, Open Graph meta tags in `index.html`
- **Vercel ready** — `vercel.json` SPA rewrite rule included

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite` plugin — CSS `@theme` config) |
| Animations | Framer Motion |
| Icons | React Icons (Font Awesome 5 set) |
| Routing | React Router DOM v6 |
| SEO | React Helmet Async |
| Contact Form | Formspree |
| Deployment | Vercel |

> ⚠️ **Tailwind v4 Note**: This project uses `@tailwindcss/vite` — the `tailwind.config.js` file is **not used**. All theme customisation is done via CSS `@theme` directives in `src/App.css`.

---

## 📁 Project Structure

```
sanjana-portfolio/
│
├── public/                            # Static assets (URL: /<file>)
│   ├── docs/
│   │   └── _SanjanaMariaResumeForECE_TA1.pdf
│   ├── images/
│   │   └── profile_pic.jpeg           # Used by Hero + About sections
│   ├── experience pic/
│   │   ├── solvio_ai_hackathon.jpg
│   │   └── ta_work.jpg
│   └── project images/
│       ├── inventory_management.jpg
│       ├── license_plate_enhance.jpg
│       ├── mathscriber.jpg
│       ├── multi-crop plant disease.jpg
│       ├── pawcare.jpg
│       ├── rag_chatbot_yt.jpg
│       └── tomato_leaf_disase.png
│
├── src/
│   ├── App.jsx                         # Root: HelmetProvider → ThemeProvider → Layout
│   ├── App.css                         # ★ Tailwind v4 theme config (@theme, @custom-variant)
│   │
│   ├── context/
│   │   └── ThemeContext.jsx            # Dark/light state (defaults to DARK)
│   │
│   ├── data/                           # ★ ALL content lives here — edit freely
│   │   ├── personalInfo.js
│   │   ├── projects.js                 # 10 projects with image paths + icon fallbacks
│   │   ├── skills.js
│   │   ├── experience.js               # 4 entries incl. Solvio AI Hackathon 2025
│   │   └── education.js
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useIntersectionObserver.js
│   │   └── useScrollAnimation.js
│   │
│   ├── utils/
│   │   └── helpers.js                  # scrollToSection(), animation variants
│   │
│   ├── components/
│   │   ├── ui/          Button, Badge, Card, SectionTitle, SocialLinks, ThemeToggle
│   │   ├── common/      AnimatedSection, LoadingSpinner, ScrollToTop
│   │   ├── layout/      Navbar, Footer, Layout
│   │   └── sections/    Hero, About, Skills, Projects, Experience, Education, Contact
│   │
│   └── pages/
│       └── Home.jsx                    # Assembles all sections
│
├── vercel.json                         # SPA rewrite rule for Vercel
├── index.html                          # HTML shell with SEO meta tags + Google Fonts
├── vite.config.js
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
git clone https://github.com/RaiyanKhaan/Interactive-Modern-Portfolio.git
cd Interactive-Modern-Portfolio
npm install
npm run dev
```

Opens at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview   # preview locally before deploying
```

---

## ✏️ Customisation

### Personal Information

Edit `src/data/personalInfo.js`:
```js
export const personalInfo = {
  name: "Your Name",
  email: "your@email.com",
  phone: "+1234567890",
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourprofile",
  // ...
};
```

### Projects

Edit `src/data/projects.js`. Each project object:
```js
{
  id: 1,
  title: "Project Name",
  description: "Short description",
  technologies: ["Python", "React"],
  category: "ML/AI",
  image: "/project images/your-image.jpg",  // or null for icon fallback
  icon: "FaRobot",                           // React Icons name (fallback when no image)
  github: "https://github.com/...",
  live: null,
  featured: true,
  highlights: ["Highlight 1", "Highlight 2"],
}
```

### Skills

Edit `src/data/skills.js` — adjust `level` (0–100) for each skill:
```js
programming: [
  { name: "Python", level: 90 },
  ...
]
```

### Theme Colours

Edit the `@theme` block in `src/App.css`:
```css
@theme {
  --color-primary: #e11d48;       /* rose */
  --color-secondary: #a855f7;     /* purple */
  --color-accent: #f59e0b;        /* amber */
  --color-dark-bg: #0c0507;
  --color-dark-card: #1a0f14;
}
```

### Contact Form

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form → copy the form ID
3. In `src/components/sections/Contact.jsx`, replace `YOUR_FORM_ID`:
   ```js
   await fetch('https://formspree.io/f/xyzabcde', ...);
   ```

### Resume

Replace `public/docs/_SanjanaMariaResumeForECE_TA1.pdf` with your PDF.  
Then update the `href` in `src/components/layout/Navbar.jsx` and `src/components/sections/About.jsx` to match the new filename.

### Profile Photo

Replace `public/images/profile_pic.jpeg` with your photo (keep the same filename, or update the paths in `Hero.jsx` and `About.jsx`).

---

## ☁️ Deployment to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** your GitHub repo
3. Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy** ✅

The `vercel.json` in the root handles SPA client-side routing automatically:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

### Other Platforms

| Platform | Command |
|---|---|
| **Netlify** | `npm run build` → drag & drop `dist/` or connect repo |
| **GitHub Pages** | Add `base: '/repo-name/'` to `vite.config.js`, then deploy `dist/` to `gh-pages` |

---

## 🎨 Design Decisions

- **Tailwind v4** — Uses `@custom-variant dark (&:where(.dark, .dark *))` instead of `darkMode: 'class'` config
- **Rose/crimson palette** — Chosen to be bold and memorable while remaining professional
- **Icon fallbacks** — Projects without images display a themed React Icon instead of broken images
- **Glass-morphism navbar** — Transparent when at top, frosted glass effect on scroll
- **Intersection Observer** on Skills — Progress bars animate only when the section is visible

---

## 📄 License

MIT — fork freely and personalise for your own portfolio.

---

<div align="center">
Built with ❤️ by <strong>Sanjana Maria</strong> · React + Vite + Tailwind CSS v4 + Framer Motion
</div>
# Interactive-Modern-Portfolio
