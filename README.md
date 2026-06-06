# Marga Adventure

**The Gateway to Silence.**

Marga Adventure is a premium travel web application dedicated to high-end trekking, spiritual retreats, and cultural immersion in the Himalayas (Nepal, Bhutan, Tibet). This project is built to reflect the serenity and majesty of the mountains, combining modern web technologies with an aesthetic of "luxury minimalism."

## 🚀 Tech Stack

This project is built with a modern, performance-first stack:

- **Framework:** [Astro v5](https://astro.build/) - For zero-JS frontend architecture by default and lightning-fast performance.
- **UI Library:** [React v19](https://react.dev/) - Utilized for interactive components (Maps, Modals, Navigation).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - For a utility-first, responsive, and maintainable design system.
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Ensuring type safety and code reliability.
- **Bundler:** [Vite](https://vitejs.dev/) - Powered internally by Astro for next-generation tooling.

## ✨ Key Features

- **Internationalization (i18n) Engine:** Complete localized experience in English and French.
  - Dynamically routes requests through `src/pages/[...lang]/` (e.g., `/` for English, `/fr` for French).
  - High-performance translation hooks (`t()`, `useTranslation()`, `useAstroI18n()`) with type-safe structures and dynamic fallback support.
  - Translation files located under `public/locales/` (`common.json`, `trips.json`).
  - DOM-event-driven synchronization across React components and static page shells.
- **Immersive Design:** A visual-first approach with high-resolution imagery, subtle parallax effects, and smooth transitions.
- **Interactive Components:**
  - **Nepal Map:** Custom interactive map with hover behaviors.
  - **Elevation Graph:** Dynamic charts showing altitude progress for trekking paths using Recharts.
  - **Marga Menu:** A full-screen, visually rich navigation overlay.
  - **Featured Trip Carousel:** Auto-playing, mobile-responsive interactive sliders.
  - **Responsive Image Lightbox:** Modal overlays for viewing high-res gallery items.
  - **Web3Forms Integration:** Reliable, styled contact forms with localization.
- **Performance Optimized:**
  - **Lazy Loading:** Heavy assets like Google Maps are lazy-loaded via IntersectionObserver.
  - **Image Delivery:** Automatic WebP conversion, `srcSet` generation, and responsive sizing using Astro's Image API.
  - **Zero-Overhead:** Static HTML generation by default ensures near-instant page loads.
- **Accessibility & Responsiveness:**
  - Touch targets optimized for mobile users (>48px).
  - Full ARIA label support for screen readers.
  - Keyboard navigability across all interactive elements.

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/margaadventure/marga-adventure.git
   cd marga-adventure
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:4321`.

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## ⚙️ Development Scripts

Under the `scripts/` directory, several utility scripts are available:

- **Image Optimization & Reference Checker:**
  ```bash
  node scripts/optimize-images.mjs
  ```
  Scans, resizes, and optimizes project images under `src/assets/images` to reduce payload sizes, and verifies there are no broken static image references in the source files.

- **Favicon Generator:**
  ```bash
  node scripts/generate-favicon.mjs
  ```
  Generates a 96x96 transparent PNG favicon from `src/assets/logo.png` and saves it directly to `public/favicon.png`.

## 📂 Project Structure

```text
/
├── public/                 # Static assets (images, fonts, robots.txt)
│   └── locales/            # Localization dictionary files
│       ├── en/             # English translations (common.json, trips.json)
│       └── fr/             # French translations (common.json, trips.json)
├── src/
│   ├── assets/             # Source assets (processed by Vite/Astro)
│   ├── components/         # React UI components (Maps, Modals, Navigation, Pages)
│   ├── i18n/               # i18n Engine & Routing Helpers (i18n.ts, astro.ts)
│   ├── layouts/            # Astro layouts (Global HTML structure)
│   ├── pages/              # File-based localized routing
│   │   └── [...lang]/      # Localized routes (about, spiritual, nepal, etc.)
│   ├── styles/             # Global styles (Tailwind CSS imports)
│   ├── constants.tsx       # Global configuration, team data & trip constants
│   └── types.ts            # Common TypeScript type definitions
├── scripts/                # Development scripts (favicon generation, image check/optimization)
├── package.json            # Project dependencies and scripts
└── astro.config.mjs        # Astro configuration file
```

## 🎨 Design Philosophy

The design of Marga Adventure is inspired by the intersection of **Nature and Divinity**.
- **Colors:** Deep brands (Royal Blue/Orange) mixed with vast whites and subtle grays to mimic snow and sky.
- **Typography:** Elegant serif headings paired with clean sans-serif body text for readability and sophistication.
- **Motion:** Slow, deliberate animations that mimic the flow of wind and clouds.


**© 2026 Marga Adventure.** *Find your way home to yourself.*