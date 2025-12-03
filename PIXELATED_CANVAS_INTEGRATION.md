# PixelatedCanvas Component Integration Guide

## ✅ Project Setup Verification

Your project is properly configured:
- ✅ **shadcn/ui structure** - All Radix UI components in place
- ✅ **Tailwind CSS v3.4.18** - Fully configured with custom theme
- ✅ **TypeScript** - With path aliases (`@/*`) configured
- ✅ **Components folder** - Located at `src/components/ui/`

## 📁 Files Created

### 1. Core Component
**Location:** `src/components/ui/pixelated-canvas.tsx`
- The main PixelatedCanvas component
- Renders images as interactive pixelated dots/squares
- Supports mouse interaction with swirl/attract/repel effects

### 2. Demo Component
**Location:** `src/components/pixelated-canvas-demo.tsx`
- Pre-configured demo using your photographer.jpg image
- Ready-to-use example with optimal settings

## 🎨 Integration Applied

The PixelatedCanvas has been integrated into your photographer image in:

### Home Page - About Section
**File:** `src/components/home/AboutSection.tsx`
- Interactive pixelated effect on hover
- Swirl distortion mode
- Accent color tint for brand consistency

### About Page - Hero Section
**File:** `src/pages/About.tsx`
- Larger canvas with enhanced effects
- More pronounced distortion on interaction
- Responsive to mouse movements

## 🎮 Component Features

### Interactive Effects
- **Mouse Following**: Smooth pointer tracking
- **Swirl Distortion**: Pixels swirl around cursor
- **Jitter Animation**: Random motion near pointer
- **Fade on Leave**: Smooth transition when mouse exits

### Visual Customization
- **Cell Size**: Adjustable pixel/dot size
- **Dot Scale**: Size of each rendered dot
- **Shape**: Circle or square dots
- **Dropout**: Removes dots in low-contrast areas for artistic effect
- **Tint**: Applies brand color overlay

### Performance
- **Frame Rate Cap**: Limited to 60 FPS
- **Sample Averaging**: Smoother color transitions
- **Canvas Optimization**: Uses hardware acceleration
- **Responsive**: Optional resize handling

## 🔧 Usage Examples

### Basic Usage
```tsx
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

<PixelatedCanvas
  src="/images/photographer.jpg"
  width={400}
  height={500}
  interactive
  className="rounded-lg"
/>
```

### With Custom Settings
```tsx
<PixelatedCanvas
  src="/images/your-image.jpg"
  width={600}
  height={600}
  cellSize={3}
  dotScale={0.9}
  shape="square"
  backgroundColor="hsl(var(--background))"
  dropoutStrength={0.4}
  interactive
  distortionStrength={5}
  distortionRadius={120}
  distortionMode="swirl"
  followSpeed={0.2}
  jitterStrength={6}
  jitterSpeed={4}
  sampleAverage
  tintColor="hsl(var(--accent))"
  tintStrength={0.15}
  className="w-full h-full rounded-lg"
  objectFit="cover"
/>
```

### Different Distortion Modes
```tsx
// Repel Effect
<PixelatedCanvas
  src="/images/photo.jpg"
  distortionMode="repel"
  distortionStrength={8}
/>

// Attract Effect
<PixelatedCanvas
  src="/images/photo.jpg"
  distortionMode="attract"
  distortionStrength={6}
/>

// Swirl Effect (default)
<PixelatedCanvas
  src="/images/photo.jpg"
  distortionMode="swirl"
  distortionStrength={5}
/>
```

## ⚙️ Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Image source URL |
| `width` | number | 400 | Canvas width in pixels |
| `height` | number | 500 | Canvas height in pixels |
| `cellSize` | number | 3 | Size of each sampling cell |
| `dotScale` | number | 0.9 | Dot size as fraction of cell (0-1) |
| `shape` | "circle" \| "square" | "square" | Shape of rendered dots |
| `backgroundColor` | string | "#000000" | Canvas background color |
| `grayscale` | boolean | false | Convert to grayscale |
| `interactive` | boolean | true | Enable mouse interaction |
| `distortionStrength` | number | 3 | Max pixel offset on interaction |
| `distortionRadius` | number | 80 | Radius of distortion effect |
| `distortionMode` | "repel" \| "attract" \| "swirl" | "swirl" | Type of distortion |
| `followSpeed` | number | 0.2 | Mouse follow smoothing (0-1) |
| `jitterStrength` | number | 4 | Random motion amplitude |
| `jitterSpeed` | number | 4 | Speed of random motion |
| `dropoutStrength` | number | 0.4 | Dot removal in low-contrast (0-1) |
| `sampleAverage` | boolean | true | Average multiple samples per cell |
| `tintColor` | string | "#FFFFFF" | Color tint to apply |
| `tintStrength` | number | 0.2 | Tint intensity (0-1) |
| `fadeOnLeave` | boolean | true | Fade effect when mouse leaves |
| `fadeSpeed` | number | 0.1 | Speed of fade transition (0-1) |
| `maxFps` | number | 60 | Maximum animation frame rate |
| `objectFit` | "cover" \| "contain" \| "fill" \| "none" | "cover" | Image fit behavior |
| `responsive` | boolean | false | Redraw on window resize |
| `className` | string | - | Additional CSS classes |

## 🎨 Styling Tips

### Match Your Theme
```tsx
// Use CSS variables for theme consistency
backgroundColor="hsl(var(--background))"
tintColor="hsl(var(--accent))"
```

### Responsive Sizing
```tsx
// Use Tailwind classes for responsive behavior
className="w-full h-auto md:w-96 md:h-96 rounded-lg"
```

### Border Effects
```tsx
// Add borders and shadows
className="rounded-xl border border-neutral-800 shadow-2xl"
```

## 🚀 Performance Tips

1. **Cell Size**: Larger cells = faster rendering
2. **Max FPS**: Lower FPS for mobile/slow devices
3. **Sample Average**: Disable for faster processing
4. **Responsive**: Only enable if resize is critical
5. **Distortion Radius**: Smaller radius = better performance

## 📱 Mobile Optimization

```tsx
// Use smaller settings for mobile
<PixelatedCanvas
  src="/images/photo.jpg"
  cellSize={5}  // Larger cells
  maxFps={30}   // Lower FPS
  distortionRadius={60}  // Smaller radius
  jitterStrength={2}     // Less jitter
/>
```

## 🎯 Use Cases

1. **Hero Images**: Make landing pages more engaging
2. **Team Photos**: Add interactivity to team member images
3. **Portfolio**: Artistic effect for photography/design work
4. **Product Images**: Unique presentation style
5. **Backgrounds**: Subtle animated backgrounds

## 🐛 Troubleshooting

### Image Not Loading
- Ensure image path is correct
- Check CORS settings for external images
- Verify image file exists in `/public/images/`

### Performance Issues
- Reduce `cellSize` or increase `maxFps`
- Disable `sampleAverage`
- Reduce `distortionRadius`
- Use smaller canvas dimensions

### No Interaction
- Verify `interactive={true}`
- Check if pointer events are blocked by overlays
- Ensure canvas is visible in viewport

## 📦 Build Status

✅ **Production Build**: Successful
- About page bundle: 18.71 kB (gzipped: 6.60 kB)
- No linter errors
- All optimizations applied

## 🎉 What's Next?

Try experimenting with:
- Different `distortionMode` settings
- Adjusting `cellSize` for various effects
- Using `grayscale` for artistic looks
- Creating hover effects with `fadeOnLeave`
- Adding to other portfolio images

---

**Note**: The component works best with high-resolution images. For optimal results, use images at least 800x800px.

