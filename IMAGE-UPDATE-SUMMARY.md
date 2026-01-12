# Image Update Summary - Marga Adventure

## ✅ COMPLETED (Final State)

### 1. Asset Migration & Management
- **Source of Truth**: All images sourced from `src/assets/images/`.
- **Imports**: All `.astro` and `.tsx` files now use explicit ESM imports (e.g., `import img from '../assets/...'`) for better optimization and error checking.
- **Renaming**: Renamed Uppercase `.JPG` files to lowercase `.jpg` in `src/assets/images/Trekking/` and `src/assets/images/Nepal section/` to ensure compatibility.

### 2. Main Carousel (`src/constants.tsx`)
Updated `JOURNEY_CATEGORIES` to use the **original ranked images**:
- **Photography**: `Sadhu-photography_1.jpg`, `potrait-photography_2.jpg`, `machhapuchare-photography_3.jpg`, etc.
- **Spiritual**: `yoga-spiritual_1.jpeg`, `meditation-spiritual_2.png`, `plant-spiritual_3.jpg`, etc.
- **Wildlife**: `rhino-wildlife_1.jpg`, `tiger-wildlife_2.jpg`, `monkey-wildlife_3.jpg`, etc.
- **Trekking**: `congde-tekking_1.jpg`, `Thamserku-trekiking_2.jpg` (renamed), `manewall-trekking_3.jpg` (renamed), etc.

### 3. Category Pages
Updated to use the same **ranked images** via imports:
- **Photography Page**: Uses `Photography/photography-hero-bg.jpg` (new uploaded hero), `Sadhu-photography_1.jpg`.
- **Spiritual Page**: Uses `yoga-spiritual_1.jpeg`, `background.jpg` (hero).
- **Wildlife Page**: Uses `rhino-wildlife_1.jpg`, `wildlife background.jpg` (hero).
- **Trekking Page**: Uses `congde-tekking_1.jpg`, `background.jpg` (hero, renamed).

### 4. Nepal Section & Subpages
Updated to use specific images from `src/assets/images/Nepal section/` where available:
- **Langtang Valley**: Uses `Nepla_Trekking/langtang/DSC00006.jpg` (renamed).
- **Upper Mustang**: Uses `Nepla_Trekking/mustang/mustang-1.jpg` (renamed).
- **Red Panda**: Uses `Wildlife/3_red_panda.png` and `Wildlife/red_panda_walking.png`.
- **Snow Leopard**: Uses `Wildlife/snow-leopard-1.png` and `Wildlife/snow-leopard-2.png`.
- **Birdwatching**: Uses `Nepal_Wildlife/background.jpg` (hero), `Wildlife/peacock-wildlife_4.jpg`, and Nepal_Wildlife images.
- **Manaslu & Mohare**: Updated to use imported trekking assets (`manewall`, `ABC`).
- **Nepal Main Page**: Updated `NepalPage.tsx` to use imported assets for all cards and hero.

### 5. Other Components
- **About Us**: Updated `AboutPage.tsx` to use imported `buddhiman-tamang.webp` and `deepak-profile.webp`.
- **Blog**: Updated `philosophy-of-silence.astro` to use imported images.
- **404 Page**: Updated to use imported `manewall-trekking_3.jpg`.
- **Trip Stats**: Removed "People" suffix from groupSize and changed "Challenging" to "Hard".

## 📂 Key Dependencies
- `src/assets/images/Nepal section/Nepla_Trekking/` (Contains Langtang & Mustang specific subfolders).
- `src/assets/images/Trekking/` (Contains general trekking images).
- `src/assets/images/Wildlife/` (Contains Red Panda & Snow Leopard images).
- `src/assets/images/Nepal section/Nepal_Wildlife/` (Contains Birdwatching/Wildlife BG).

## ⚠️ Notes
- `Nepla_Trekking` folder name has a typo ("Nepla") but is preserved to match filesystem.
- Use `import` statements for all future image usage to ensure build-time verification.
