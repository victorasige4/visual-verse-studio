/**
 * Script to generate OG image for VisualVerse
 * 
 * To use this script:
 * 1. Install puppeteer: npm install --save-dev puppeteer
 * 2. Run: node scripts/generate-og-image.js
 * 
 * This will create public/og-image.png (1200x630) representing your hero section
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to OG image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2,
  });

  // Create HTML content matching hero section
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VisualVerse OG Image</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@300;400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Space Grotesk', sans-serif;
      position: relative;
      overflow: hidden;
    }
    
    /* Animated background pattern */
    .background-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.15;
      background-image: 
        linear-gradient(to right, rgba(46, 185, 223, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(46, 185, 223, 0.2) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    
    .content {
      text-align: center;
      z-index: 10;
      padding: 60px;
    }
    
    .logo {
      font-size: 140px;
      font-weight: 700;
      background: linear-gradient(135deg, #ffffff 0%, #2EB9DF 50%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 30px;
      letter-spacing: -3px;
      line-height: 1.1;
    }
    
    .tagline {
      font-size: 42px;
      color: #cbd5e1;
      font-weight: 300;
      font-family: 'Inter', sans-serif;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
    
    .accent-line {
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, transparent, #2EB9DF, transparent);
      margin: 30px auto;
      border-radius: 2px;
    }
    
    /* Glow effect */
    .glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(46, 185, 223, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(60px);
      z-index: 1;
    }
  </style>
</head>
<body>
  <div class="glow"></div>
  <div class="background-pattern"></div>
  <div class="content">
    <h1 class="logo">VisualVerse</h1>
    <div class="accent-line"></div>
    <p class="tagline">Bold. Creative. Cinematic.</p>
  </div>
</body>
</html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  // Wait a bit for fonts to load
  await page.waitForTimeout(1000);
  
  // Take screenshot
  const screenshot = await page.screenshot({
    type: 'png',
    path: path.join(__dirname, '../public/og-image.png'),
    fullPage: false,
  });
  
  await browser.close();
  
  console.log('✅ OG image generated successfully at public/og-image.png');
  console.log('📐 Dimensions: 1200x630px');
}

// Run if called directly
if (require.main === module) {
  generateOGImage().catch(console.error);
}

module.exports = { generateOGImage };

