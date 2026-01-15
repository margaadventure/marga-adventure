# Marga Adventure

**The Gateway to Silence.**

Marga Adventure is a premium travel web application dedicated to high-end trekking, spiritual retreats, and cultural immersion in the Himalayas (Nepal, Bhutan, Tibet). This project is built to reflect the serenity and majesty of the mountains, combining modern web technologies with an aesthetic of "luxury minimalism."

## 🚀 Tech Stack

This project is built with a modern, performance-first stack:

-   **Framework:** [Astro v5](https://astro.build/) - For zero-JS frontend architecture by default and lightning-fast performance.
-   **UI Library:** [React v19](https://react.dev/) - Utilized for interactive components (Maps, Modals, Navigation).
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - For a utility-first, responsive, and maintainable design system.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) - Ensuring type safety and code reliability.
-   **Bundler:** [Vite](https://vitejs.dev/) - Powered internally by Astro for next-generation tooling.

## ✨ Key Features

-   **Immersive Design:** A visual-first approach with high-resolution imagery, subtle parallax effects, and smooth transitions.
-   **Interactive Components:**
    -   Custom Nepal Map with hover interactions.
    -   "Marga Menu" - A full-screen, visually rich navigation overlay.
    -   Responsive Image Lightbox for viewing high-res gallery items.
    -   Web3Forms integration for reliable contact form submissions.
-   **Responsive Layout:** Fully optimized for Mobile, Tablet, and Desktop experiences with strict overflow handling.
-   **Performance Optimized:**
    -   **Lazy Loading:** Heavy assets like Google Maps are lazy-loaded via IntersectionObserver.
    -   **Image Delivery:** Automatic WebP conversion, `srcSet` generation, and responsive sizing using Astro's Image API.
    -   **Zero-Overhead:** Static HTML generation by default ensures near-instant page loads.
-   **Accessibility First:**
    -   Touch targets optimized for mobile users (>48px).
    -   Full ARIA label support for screen readers.
    -   Keyboard navigability across all interactive elements.
-   **Content Focused:** Dedicated sections for "The Journal" (Blog) and detailed Destination Guides with rich storytelling.

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/margaadventure/marga-adventure.git
    cd marga-adventure
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:4321`.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
/
├── public/             # Static assets (images, fonts, robots.txt)
├── src/
│   ├── assets/         # Source assets (processed by Vite/Astro)
│   ├── components/     # React UI components (Header, Footer, Maps)
│   ├── layouts/        # Astro layouts (Global HTML structure)
│   ├── pages/          # File-based routing (pages and API endpoints)
│   ├── styles/         # Global styles (Tailwind CSS imports)
│   └── constants.tsx   # Global configuration and data
├── package.json        # Project dependencies and scripts
└── astro.config.mjs    # Astro configuration file
```

## 🎨 Design Philosophy

The design of Marga Adventure is inspired by the intersection of **Nature and Divinity**.
-   **Colors:** Deep brands (Royal Blue/Orange) mixed with vast whites and subtle grays to mimic snow and sky.
-   **Typography:** Elegant serif headings paired with clean sans-serif body text for readability and sophistication.
-   **Motion:** Slow, deliberate animations that mimic the flow of wind and clouds.


**© 2026 Marga Adventure.** *Find your way home to yourself.*