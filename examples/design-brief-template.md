# ORQIVA Design Brief Template

Use this template to document the architectural and visual direction for a UI/UX project before beginning implementation.

---

## 1. Project Overview & Context
- **Product Name**: [e.g. ApexBank Mobile / Orqiva Cloud Console]
- **Target Platform**: [e.g. iOS / Android Native / Web Application / Responsive Landing Page]
- **Target Audience**: [e.g. Retail banking customers / Senior backend engineers / Medical staff]
- **Primary Job-to-be-Done (JTBD)**: [What single task must the user accomplish quickly and reliably?]

---

## 2. Visual Direction & Rationale
- **Selected Direction**: [e.g. Trust-Led Restrained / Utilitarian DevTools / Calm Human-Centered / Modern Minimal]
- **Secondary Influences**: [e.g. Platform-Native iOS / Data-Dense Professional]
- **Rationale**: [2-3 sentences explaining why this visual language was chosen and how it serves user trust and operational efficiency]
- **Anti-Patterns Explicitly Avoided**: [e.g. No dark-mode purple gradients, no low-contrast gray text, no distracting animations]

---

## 3. Information Architecture & Key Screens
1. **Primary Screen / View**: [Layout description, focal point, primary action]
2. **Secondary Views**: [Detail panels, modals, drawers, settings]
3. **Navigation Paradigm**: [e.g. Bottom Tab Bar (5 tabs) / Collapsible Left Sidebar / Top App Bar]

---

## 4. Design Tokens & Foundations
- **Primary Accent**: [e.g. Deep Cobalt `#0284C7` (Light) / Cyan `#38BDF8` (Dark)]
- **Surfaces & Borders**: [e.g. Slate `#0F172A`, Surface `#1E293B`, Border `#334155`]
- **Typography**: [e.g. Inter for UI, JetBrains Mono for telemetry/code]
- **Density Tier**: [Compact / Standard / Spacious]

---

## 5. Accessibility & Responsive Constraints
- **Target Compliance**: WCAG 2.2 Level AA (minimum 4.5:1 text contrast)
- **Breakpoints**: Mobile (390px), Tablet (768px), Desktop (1280px)
- **Touch Target Floor**: 48×48px minimum on mobile
- **Focus Management**: Explicit `:focus-visible` ring on all interactive elements
