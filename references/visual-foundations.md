# Visual Foundations & Design Tokens

Solid visual foundations create polish, rhythm, and confidence. Ad-hoc pixel values and mismatched colors degrade perceived product quality.

---

## 1. The 4pt / 8pt Spatial Grid

All spacing, padding, margins, and sizing must be multiples of 4px or 8px:

```css
--space-1:  4px;   /* Micro-offsets, badge padding, border adjustments */
--space-2:  8px;   /* Tight element grouping (icon to text, chip padding) */
--space-3: 12px;   /* Form field internal padding, compact card gap */
--space-4: 16px;   /* Standard component padding, list item gutter */
--space-5: 20px;   /* Moderate card padding */
--space-6: 24px;   /* Section headers, standard card padding */
--space-8: 32px;   /* Sub-layout gutters, module separation */
--space-10: 40px;  /* Large module separation */
--space-12: 48px;  /* Page block separation */
--space-16: 64px;  /* Hero padding, major section dividers */
```

### Layout Constraints:
- Content container max-widths:
  - Text reading column: `65ch`–`75ch` (650px–750px) for optimal legibility.
  - Standard app view: `1200px`–`1280px`.
  - Wide analytics canvas: `1440px`–`1600px`.
  - Full-width breakout: `100%` with lateral padding.

---

## 2. Typographic Scale & Rhythm

Use a harmonious modular type scale with proportional line-heights:

| Token | Size | Line Height | Weight | Typical Usage |
|---|---|---|---|---|
| `text-xs` | 12px (0.75rem) | 16px (1.33) | 500 | Badges, timestamps, helper captions |
| `text-sm` | 13px–14px (0.875rem) | 20px (1.43) | 400 / 500 | Table cells, compact controls, secondary labels |
| `text-base` | 15px–16px (1rem) | 24px (1.5) | 400 / 500 | Primary body copy, form inputs, button text |
| `text-lg` | 18px (1.125rem) | 28px (1.55) | 600 | Card titles, modal headers, subsection titles |
| `text-xl` | 20px (1.25rem) | 28px (1.4) | 600 / 700 | Page titles, drawer headers |
| `text-2xl` | 24px (1.5rem) | 32px (1.33) | 700 | Primary dashboard view titles |
| `text-3xl` | 30px (1.875rem) | 36px (1.2) | 700 | Metric numbers, marketing subtitles |
| `text-4xl` | 36px (2.25rem) | 44px (1.22) | 800 | Marketing section headers |
| `text-5xl` | 48px (3rem) | 56px (1.16) | 800 | Hero landing headlines |

### Typography Guidelines:
- **Font Pairing Rule**: Stick to 1 robust variable superfamily (Inter, Roboto, SF Pro, Outfit, Plus Jakarta Sans) or pair 1 clean grotesque sans with 1 distinctive editorial serif or monospace font.
- **Numbers & Telemetry**: Always apply `font-variant-numeric: tabular-nums` to ensure currency and counter columns align cleanly.
- **Line Length**: Never allow body paragraphs to stretch across full desktop viewports; limit width to `max-w-prose` (approx 680px).

---

## 3. Semantic Color Tokens

Avoid hardcoded hex values in component code. Map raw palettes to semantic tokens:

```css
:root {
  /* Surfaces */
  --color-bg-canvas: #FAFAFA;
  --color-bg-surface: #FFFFFF;
  --color-bg-surface-raised: #FFFFFF;
  --color-bg-surface-subtle: #F4F4F5;

  /* Borders */
  --color-border-subtle: #E4E4E7;
  --color-border-default: #D4D4D8;
  --color-border-strong: #A1A1AA;

  /* Text & Foreground */
  --color-fg-primary: #09090B;
  --color-fg-secondary: #52525B;
  --color-fg-muted: #71717A;
  --color-fg-inverse: #FFFFFF;

  /* Brand & Accents */
  --color-accent-default: #0284C7;
  --color-accent-hover: #0369A1;
  --color-accent-subtle: #E0F2FE;

  /* Functional Status */
  --color-success-fg: #15803D;
  --color-success-bg: #DCFCE7;
  --color-warning-fg: #B45309;
  --color-warning-bg: #FEF3C7;
  --color-danger-fg: #B91C1C;
  --color-danger-bg: #FEE2E2;
}

[data-theme="dark"] {
  --color-bg-canvas: #09090B;
  --color-bg-surface: #18181B;
  --color-bg-surface-raised: #27272A;
  --color-bg-surface-subtle: #27272A;

  --color-border-subtle: #27272A;
  --color-border-default: #3F3F46;
  --color-border-strong: #52525B;

  --color-fg-primary: #FAFAFA;
  --color-fg-secondary: #A1A1AA;
  --color-fg-muted: #71717A;
  --color-fg-inverse: #09090B;

  --color-accent-default: #38BDF8;
  --color-accent-hover: #7DD3FC;
  --color-accent-subtle: #082F49;

  --color-success-fg: #4ADE80;
  --color-success-bg: #052E16;
  --color-warning-fg: #FBBF24;
  --color-warning-bg: #451A03;
  --color-danger-fg: #F87171;
  --color-danger-bg: #450A0A;
}
```

---

## 4. Elevation, Radii & Depth

- **Border Radius**:
  - `rounded-xs`: 2px (sharp technical widgets, table tags).
  - `rounded-sm`: 4px (inputs, badges, small buttons).
  - `rounded-md`: 6px–8px (cards, dropdown menus, modals).
  - `rounded-lg`: 12px (feature banners, dialogs).
  - `rounded-full`: 9999px (avatars, status pills, icon buttons).
- **Elevation Layers**:
  - `shadow-sm`: Subtle border lift for inputs and buttons (`0 1px 2px 0 rgba(0, 0, 0, 0.05)`).
  - `shadow-md`: Floating cards, dropdown menus (`0 4px 6px -1px rgba(0, 0, 0, 0.1)`).
  - `shadow-xl`: Modal dialogs, overlay drawers (`0 20px 25px -5px rgba(0, 0, 0, 0.15)`).
