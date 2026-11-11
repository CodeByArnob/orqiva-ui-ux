# Adaptive Visual Design Directions

ORQIVA's core premise is **adaptive visual intelligence**. Generic AI models apply a uniform aesthetic—dark backgrounds, purple gradients, frosted glass, and oversized cards—regardless of whether the product is a medical charting system or a banking app.

ORQIVA requires deliberate selection of a visual direction anchored in product purpose, user mental models, content density, and platform conventions.

---

## 1. Direction Taxonomy & Decision Matrix

| Direction | Archetypal Industries | Primary Design Attributes | Typography & Spacing | Anti-Patterns to Avoid |
|---|---|---|---|---|
| **Trust-Led Restrained** | Wealth management, retail banking, tax, compliance, legal | Subdued slate/navy/neutral tones, crisp borders, high contrast, explicit confirmation, status indicators with clear iconography | Tabular/monospaced figures, 14–16px body, strict 8pt grid, clear divider lines | Gimmicky animations, ambiguous gamification, bright novelty colors, low-contrast text |
| **Calm Human-Centered** | Healthcare, clinical tools, therapy, wellness, insurance | Soft neutral backgrounds, accessible greens/blues, generous whitespace, legible rounded or humanist sans, prominent emergency/alert hierarchy | 16–18px base text for readability, 1.6 line height, 16–24px padding | Alarmist red accents for non-emergencies, dense multi-column layouts, medical jargon without tooltips |
| **Utilitarian DevTools** | IDEs, terminal wrappers, CI/CD pipelines, API gateways, system monitoring | Dense information hierarchy, monospaced code blocks, collapsible sidebars, keyboard shortcuts everywhere, high contrast dark or light theme | 12–13px compact body, monospaced system fonts (JetBrains Mono, Fira Code), 4pt grid | Decorative whitespace, oversized headers, slow transition animations, missing keyboard focus |
| **Data-Dense Professional** | ERP, CRM, trading terminals, supply chain analytics, BI dashboards | Sortable filterable data tables, sparklines, time-series charts, status pills, compact button groups, sticky headers | 13–14px body, tabular numbers (`font-variant-numeric: tabular-nums`), 4–8px cell padding | Huge floating cards, unnecessary whitespace that forces scrolling, unpaginated tables |
| **Modern Minimal Editorial** | Architecture, design agencies, publishing, curated blogs, luxury brands | Bold typographic hierarchy, deliberate whitespace, monochromatic palettes with single accent, asymmetrical grids | Serif headlines paired with clean grotesque sans, large display scales, expansive margins | Cluttered navigation, generic iconography, stock photo placeholders, busy borders |
| **Conversion-Led Commerce** | Retail, SaaS checkout, marketplace, direct-to-consumer | Clear product imagery, prominent pricing hierarchy, instant social validation, high-contrast CTA buttons, low friction checkout | 16px body, bold price displays, sticky bottom action bar on mobile | Hidden pricing, deceptive urgency banners, intrusive popups, tiny tap targets |
| **Platform-Native** | iOS Utility, Android System App, macOS App, Windows Native | Strict adherence to Apple Human Interface Guidelines or Google Material Design 3 | System fonts (SF Pro, Roboto), native navigation bars, segmented controls, native dialogs | Custom re-invented navigation bars that break OS gestures (e.g. swipe-back) |

---

## 2. Decision Framework

When confronted with a new design task, follow this 4-step selection framework:

```
1. Identify User Task & Emotional State
   Is the user stressed (banking fraud, health symptoms)? -> Prioritize reassurance and clarity.
   Is the user in flow (coding, analyzing logs)? -> Prioritize keyboard ergonomics and high density.
   Is the user evaluating a purchase? -> Prioritize trust, value proposition, and frictionless CTAs.

2. Assess Information Density Need
   High density: 100+ items on screen (tables, code, logs).
   Medium density: 10–50 items (dashboards, forms, settings).
   Low density: 1–5 items (login, landing hero, payment confirmation).

3. Select Primary Direction + Optional Accent
   Example: Utilitarian DevTools (Primary) + Modern Minimal (Accent) for an API dashboard.
   Example: Trust-Led Restrained (Primary) + Platform-Native (Accent) for an iOS mobile wallet.

4. Document Rationale in 2-3 Sentences
   State explicitly why the direction was selected and what compromises were made.
```

---

## 3. Forbidden Generic Trappings

Unless explicitly requested by the user, **NEVER** default to:
1. Neon purple / pink linear gradient backgrounds (`from-purple-600 to-indigo-600`).
2. Blanket `backdrop-blur-md bg-white/10` frosted glass on opaque content.
3. Giant 72px hero headings with vague marketing buzzwords ("Empower your synergy").
4. Cards wrapped inside cards wrapped inside cards with identical shadows.
5. Inaccessible low-contrast gray text (`#94A3B8` on `#0F172A`).
6. Unlabeled decorative icons that provide no semantic clarity.
