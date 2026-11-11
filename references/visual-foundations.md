# Visual Foundations

Typography: define display, page title, section title, body, supporting text, labels, and code/data styles. Use a deliberate type scale, readable line height, and suitable font weights.

Color: define semantic background, surface, text, muted text, border, primary action, success, warning, danger, information, focus, and selection tokens. Check contrast; never rely on color alone.

Layout: use a consistent spacing scale, align related elements, use whitespace to communicate grouping, and avoid arbitrary fixed dimensions.

Shape/depth: define a restrained radius scale. Use borders, elevation, and shadows to clarify layering, not decorate every container.

Icons: use one coherent icon family, consistent stroke/fill, meaningful symbols, and accessible labels. Do not use emoji as production icon substitutes.

Imagery: use relevant licensed assets, preserve aspect ratios, and provide appropriate alt behavior.

Motion: communicate state and feedback; respect reduced-motion preferences.

Illustrative tokens (adapt, never copy blindly):
```css
:root {
 --color-bg:#fff; --color-surface:#f7f8fa; --color-text:#17191f;
 --color-muted:#626a76; --color-border:#e3e6eb; --color-primary:#3157d5;
 --space-1:.25rem; --space-2:.5rem; --space-4:1rem; --space-6:1.5rem;
 --radius-sm:.375rem; --radius-md:.625rem;
}
```
