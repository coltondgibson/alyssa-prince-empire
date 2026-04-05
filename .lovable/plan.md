

## Hero Section Mobile Layout Fix

### Problem
On mobile (428px wide), the hero content is displayed side-by-side (text left, image right) instead of stacking vertically. This makes both elements too small and leaves wasted space below.

### Root Cause
The flex container uses `flex-col md:flex-row`, which should stack on mobile — but the image container has `flex w-full md:w-[48%]` which keeps it inline. The issue is likely that `flex-col` isn't being applied, or the content still flows horizontally due to sizing. Need to verify the exact current markup.

### Changes — `src/components/HeroSection.tsx`

1. **Stack layout on mobile**: Ensure the outer flex container uses `flex-col md:flex-row` and that on mobile the image comes first (or after text) at full width.
2. **Reorder for mobile**: On mobile, show the image above or below the text at full width, then switch to side-by-side on `md:` breakpoint.
3. **Reduce heading size on mobile**: Scale down the "Alyssa" text size for small screens (e.g., `text-[4rem]` on mobile instead of `text-[5.5rem]`).
4. **Reduce empty space**: Tighten vertical padding on mobile so the section doesn't have excessive blank area below the buttons.

### Result
On mobile: vertically stacked layout with full-width image and properly sized text. On desktop: unchanged side-by-side layout.

