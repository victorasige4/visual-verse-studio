# PixelatedCanvas Component

An interactive canvas component that renders images as pixelated dots with mouse-reactive distortion effects.

## Quick Start

```tsx
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function MyComponent() {
  return (
    <PixelatedCanvas
      src="/images/your-image.jpg"
      width={400}
      height={500}
      interactive
      className="rounded-lg"
    />
  );
}
```

## Features

- 🎨 **Pixelated Rendering**: Converts images to artistic dot patterns
- 🖱️ **Mouse Interaction**: Swirl, attract, or repel effects on hover
- ⚡ **Performance Optimized**: Frame rate limiting and efficient rendering
- 🎭 **Customizable**: 20+ props for fine-tuning appearance and behavior
- 📱 **Responsive**: Optional window resize handling
- 🎯 **Accessible**: Proper ARIA labels and semantic HTML

## Current Integration

Currently used in:
- **Home Page**: About section (`src/components/home/AboutSection.tsx`)
- **About Page**: Hero image (`src/pages/About.tsx`)

For detailed documentation, see `PIXELATED_CANVAS_INTEGRATION.md` in the project root.

