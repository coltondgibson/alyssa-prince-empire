

## Plan: Increase Wellness Section Image Height

**What changes**: Make the "Feel better from the inside out" kitchen image taller so more of the photo is visible.

**File**: `src/components/ThreeLanes.tsx`

1. Increase mobile image height from `h-72` to `h-96`
2. Remove the desktop max-height cap (`md:max-h-[480px]` → `md:max-h-[560px]`)
3. Increase the container `minHeight` from `320` to `420`

This will make the image noticeably larger on both mobile and desktop, giving a clearer view of the scene.

