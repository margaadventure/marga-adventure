# Font Download Instructions

To complete the optimization, you need to download the Google Font files and place them in `public/fonts/`.

## Download Links (use browser, then save to public/fonts/):

1. **Montserrat Variable (Normal)**
   - URL: https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2
   - Save as: `public/fonts/montserrat-variable.woff2`

2. **Montserrat Variable (Italic)**
   - URL: https://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R8aX8.woff2
   - Save as: `public/fonts/montserrat-variable-italic.woff2`

3. **Plus Jakarta Sans Variable (Normal)**
   - URL: https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4Ko.woff2
   - Save as: `public/fonts/plus-jakarta-sans-variable.woff2`

4. **Plus Jakarta Sans Variable (Italic)**
   - URL: https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4Ko4xCBxqCc.woff2
   - Save as: `public/fonts/plus-jakarta-sans-variable-italic.woff2`

## Quick PowerShell commands to download (run in project root):

```powershell
# Create fonts directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public\fonts"

# Download Montserrat Variable Normal
Invoke-WebRequest -Uri "https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2" -OutFile "public\fonts\montserrat-variable.woff2"

# Download Montserrat Variable Italic
Invoke-WebRequest -Uri "https://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R8aX8.woff2" -OutFile "public\fonts\montserrat-variable-italic.woff2"

# Download Plus Jakarta Sans Variable Normal
Invoke-WebRequest -Uri "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4Ko.woff2" -OutFile "public\fonts\plus-jakarta-sans-variable.woff2"

# Download Plus Jakarta Sans Variable Italic
Invoke-WebRequest -Uri "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4Ko4xCBxqCc.woff2" -OutFile "public\fonts\plus-jakarta-sans-variable-italic.woff2"
```

After downloading, rebuild the site with `npm run build` to verify everything works.

## What this achieves:
- Eliminates 2-3 external DNS lookups (fonts.googleapis.com, fonts.gstatic.com)
- Eliminates 4+ external HTTP requests for font files
- Fonts load from same domain = faster, better caching
- Works offline
- No GDPR/privacy concerns with Google
