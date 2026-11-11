# Websites, Marketing & Landing Pages

Marketing websites and landing pages exist to communicate value, establish credibility, and guide qualified visitors toward conversion.

---

## 1. Landing Page Architecture

A high-converting landing page follows a proven structural narrative:

```
1. Sticky Header
   - Brand Logo, Navigation Links, Theme Toggle, Primary Action ("Get Started" / "Sign In")

2. Hero Section (Above the Fold)
   - Category Eyebrow: Crisp context tag ("AGENTIC UI/UX INTELLIGENCE")
   - Value Proposition Headline: Direct, specific, outcome-driven (6-12 words max)
   - Supporting Subhead: Explains HOW and for WHOM in 2 sentences
   - Dual Call-to-Action: Primary ("Install Skill") + Secondary ("View Live Demo" / "GitHub")
   - Real Product Visual / Interactive Preview: Never a stock photo; actual UI screenshot

3. Trust & Social Proof Bar
   - Compatible tool ecosystems, open-source badges, verified security standards

4. Problem vs. Solution / Core Capabilities
   - 3-4 distinct architectural pillars with deep visual evidence and clear micro-copy

5. Interactive Demo / Feature Deep-Dive
   - Interactive tabbed showcase showing real product execution across different domains

6. Comparison Matrix / Why Us
   - Objective comparison between generic AI generation and adaptive design intelligence

7. Transparent Pricing / Open Source Details
   - Clear tiers, self-hosted vs cloud, MIT license disclosure, zero hidden barriers

8. FAQ Accordion
   - Addresses real developer objections: compatibility, performance, customization, privacy

9. Final Conversion CTA & Global Footer
   - Re-assert primary CTA with one-click install command
   - Semantic footer with sitemap, legal links, GitHub repo, release notes, and copyright
```

---

## 2. Hero Section Visual Hierarchy

The hero must hook the visitor within 3 seconds:

- **Eyebrow Tag**: Monospaced or uppercase badge (`text-xs font-semibold tracking-wider text-accent uppercase bg-accent-subtle px-3 py-1 rounded-full`).
- **Headline**: Contrast-rich, scannable headline using strong type scales (`text-4xl sm:text-6xl font-extrabold tracking-tight`).
- **Subhead**: Clear explanation in `text-lg sm:text-xl text-primary-muted max-w-2xl mx-auto`.
- **CTA Group**: Flex row with wrap on mobile. Keep primary button visually heavy (solid fill), secondary button lighter (outline or subtle background).
- **One-Click Command Box**: For developer tools, provide an instant copyable install snippet (`npx skills add ...`) with a working copy button.

---

## 3. SEO, Meta Tags & Web Vitals

A world-class landing page must score 95+ across Core Web Vitals:
1. **Largest Contentful Paint (LCP)**: Optimize hero images (modern WebP/AVIF or SVG, explicit `width` and `height` attributes to avoid layout shifts).
2. **Cumulative Layout Shift (CLS)**: Reserve aspect ratio containers (`aspect-video`, `aspect-[16/9]`) for screenshots and interactive widgets.
3. **Open Graph & Twitter Cards**:
   - Explicit `<meta property="og:title" ...>`
   - `<meta property="og:description" ...>`
   - `<meta property="og:image" content="https://.../og-banner.png">`
   - `<meta name="twitter:card" content="summary_large_image">`
4. **Semantic Landmarks**:
   - `<header>`, `<main>`, `<section aria-labelledby="...">`, `<footer>`.
