# OG Image Setup Instructions

## Quick Setup

1. **Update your Netlify domain** in `index.html`:
   - Replace `your-site.netlify.app` with your actual Netlify domain
   - Update all meta tag URLs

2. **Generate a static OG image** (recommended for better compatibility):

   **Option A: Using Browser Screenshot**
   - Deploy your site to Netlify
   - Visit `https://your-site.netlify.app/og-image.html`
   - Take a screenshot (1200x630px) or use browser DevTools
   - Save as `public/og-image.png`
   - Update `index.html` meta tags to point to `/og-image.png` instead of `/og-image.html`

   **Option B: Using Screenshot Service**
   - Use a service like `https://api.microlink.io/screenshot?url=https://your-site.netlify.app/og-image.html&width=1200&height=630`
   - Save the image as `public/og-image.png`
   - Update meta tags

   **Option C: Using Vercel OG Image (if available)**
   - Some services support HTML OG images directly
   - Your current setup should work, but static images are more reliable

3. **Test your OG image**:
   - Use Facebook's Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Use Twitter's Card Validator: https://cards-dev.twitter.com/validator
   - Use LinkedIn's Post Inspector: https://www.linkedin.com/post-inspector/

## Current Setup

- OG Image HTML: `public/og-image.html` (matches your hero section design)
- Meta tags: Added to `index.html`
- Image size: 1200x630px (standard OG image size)

## Notes

- The `og-image.html` file matches your hero section with the boxes pattern
- For best results, use a static PNG/JPG image
- Make sure to update all URLs with your actual Netlify domain

