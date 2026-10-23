# Kage Landing Page (Final)

Canonical standalone & React implementation of the Kage Temple 3D WebGL experience.

## How to Run

### Option 1: Direct in Browser (No Server Needed)
- Simply double-click `index.html` to open it in any browser (Chrome, Edge, Firefox, Safari).
- Or right-click `index.html` and select **Open with Live Server**.

### Option 2: In React / ThreeUI Project
Import the component from `src/`:

```tsx
import { KageLandingPage } from "./effects/kage-landing-page/KageLandingPage";
import "./effects/kage-landing-page/styles.css";

export function Scene() {
  return (
    <div className="effect-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}
```

## Structure
- `index.html` — Full-page interactive 3D WebGL landing page (SHA-256 `c8e06b90397a`)
- `secret-pathways-assets/` — Fonts, Three.js runtime, and all 14 scene layers (WebP)
- `public/landing-pages/` — Canonical assets for iframe / static hosts
- `src/` — React components, shaders, typography controls, and frame handlers

