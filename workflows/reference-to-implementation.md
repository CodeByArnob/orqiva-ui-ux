# Workflow: Screenshot-to-Code & Design Reference Implementation

Use this workflow when translating a design mockup, wireframe, or reference screenshot into pixel-accurate, production-ready, responsive code.

---

## Step 1: Visual Deconstruction & Grid Mapping
1. Deconstruct the reference image into structural layout blocks:
   - Header, navigation rail, main content canvas, inspector sidebar, modal/drawer.
2. Identify the underlying spatial grid:
   - Identify base spacing unit (usually 4px or 8px).
   - Measure container max-widths, column gutters, and element gaps.
3. Identify the typographic hierarchy:
   - Map font families (Grotesque sans, geometric sans, monospace).
   - Identify scale increments (e.g., 32px display, 20px heading, 14px body, 12px caption).

---

## Step 2: Color & Token Extraction
1. Extract semantic color roles rather than hardcoded random hex values:
   - Canvas background, card surface, raised surface.
   - Border subtle, border strong.
   - Foreground primary, secondary, muted.
   - Brand accent and functional status colors (success, error, warning).
2. Note border radii (e.g., `rounded-md` 6px vs `rounded-2xl` 16px).
3. Note elevation shadows (e.g., flat borders with `shadow-sm` vs deep `shadow-xl`).

---

## Step 3: Semantic Component Mapping
1. Avoid translating visual blocks into endless unsemantic `<div>` elements.
2. Map visual elements to semantic HTML5 or native components:
   - Clickable actions -> `<button>` or `<a href="...">`
   - Form inputs -> `<input>`, `<select>`, `<textarea>` with explicit `<label>`
   - Layout regions -> `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
   - Lists of items -> `<ul>` and `<li>`

---

## Step 4: Responsive & Interactive Behavior Specification
1. Mockups are almost always static and desktop-only. As an engineer, infer and implement:
   - How does the layout reflow when viewport narrows to 390px (mobile)?
   - What happens on hover, focus, active, and disabled states?
   - What does the loading state look like?
   - What happens when a text string is 3x longer than the mockup (overflow, truncation)?

---

## Step 5: Visual Verification & Precision Tuning
1. Render the implemented component locally.
2. Place the rendered output alongside the reference mockup.
3. Compare alignment, typography, spacing, padding, and contrast.
4. Correct any micro-discrepancies until the implementation matches the design intent precisely.
