# OG Image for VisualVerse

The Open Graph (OG) image is the preview thumbnail that appears when you share your website on social media platforms like Facebook, Twitter, LinkedIn, etc.

## ✅ Current Setup

I've created an SVG version (`og-image.svg`) that matches your hero section. This works immediately!

**Note**: Some social media platforms prefer PNG over SVG. If you encounter issues, convert the SVG to PNG (see Option 2 below).

## Option 1: Convert SVG to PNG (Recommended for Better Compatibility)

To convert the existing SVG to PNG:

1. **Using Online Tool**:
   - Visit https://svgtopng.com/ or https://cloudconvert.com/svg-to-png
   - Upload `public/og-image.svg`
   - Set dimensions to 1200x630
   - Download and save as `public/og-image.png`
   - Update `index.html` to use `/og-image.png` instead of `/og-image.svg`

2. **Using Command Line** (if you have ImageMagick):
   ```bash
   convert -background none -resize 1200x630 public/og-image.svg public/og-image.png
   ```

3. **Using Browser**:
   - Open `public/og-image.svg` in your browser
   - Take a screenshot at exactly 1200x630 pixels
   - Save as `public/og-image.png`

## Option 2: Use the HTML Template

1. Open `public/og-image.html` in your browser
2. Take a screenshot or use a browser extension to capture it at exactly 1200x630 pixels
3. Save it as `og-image.png` in the `public` folder

## Option 2: Use the Puppeteer Script

1. Install puppeteer:
   ```bash
   npm install --save-dev puppeteer
   ```

2. Run the script:
   ```bash
   node scripts/generate-og-image.js
   ```

This will automatically generate `public/og-image.png` with the correct dimensions (1200x630px).

## Option 3: Create Manually

Create an image with these specifications:
- **Dimensions**: 1200x630 pixels (1.91:1 aspect ratio)
- **Content**: Should match your hero section
  - Dark background (slate-900)
  - "VisualVerse" text with gradient (white to accent color)
  - "Bold. Creative. Cinematic." tagline
  - Subtle background pattern/grid
- **Format**: PNG
- **File location**: `public/og-image.png`

## Option 4: Use Online Tools

You can use online OG image generators:
- https://www.opengraph.xyz/
- https://og-image.vercel.app/
- https://www.canva.com/ (search for "Open Graph Image" template)

## Testing

After creating the image:

1. Deploy to Netlify
2. Test with:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

## Current Meta Tags

The meta tags in `index.html` are already configured to use `/og-image.png`. Once you add the image file, it will automatically work on your deployed site.

