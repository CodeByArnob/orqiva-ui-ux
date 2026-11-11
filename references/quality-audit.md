# Quality Audit & Heuristic Review

Use this comprehensive inspection protocol to audit existing user interfaces or perform pre-release checks on newly designed screens.

---

## 1. Heuristic Inspection Protocol

Grade interfaces across 5 critical dimensions:

### Dimension A: Visual Hierarchy & Scanning (Weight: 25%)
- [ ] Is there an unmistakable primary focal point on the screen?
- [ ] Does the visual weight correspond directly to functional priority?
- [ ] Is spacing consistent with the 4pt/8pt grid?
- [ ] Is typographic rhythm maintained (proportional font-size and line-height)?
- [ ] Are numeric values displayed with tabular figures (`tabular-nums`)?

### Dimension B: Usability & Interaction Ergonomics (Weight: 25%)
- [ ] Can primary actions be performed with minimum cognitive load?
- [ ] Are destructive actions (delete, revoke, cancel) safeguarded by confirmation?
- [ ] Are mobile touch targets at least 48×48px with generous spacing?
- [ ] Do all interactive controls provide immediate visual feedback (<100ms)?
- [ ] Is form validation timed appropriately (onBlur/submit, onChange to clear)?

### Dimension C: Accessibility & Inclusivity (Weight: 20%)
- [ ] Do text and UI borders meet WCAG 2.2 AA contrast ratios (4.5:1 text, 3:1 controls)?
- [ ] Is keyboard navigation fully functional with visible `:focus-visible` rings?
- [ ] Are modal dialogs and slide-out drawers properly trapping and releasing focus?
- [ ] Do icon-only buttons possess explicit `aria-label` tags?
- [ ] Does the layout respect `prefers-reduced-motion`?

### Dimension D: Responsive Resilience & Edge Cases (Weight: 15%)
- [ ] Does the layout adapt fluidly from 320px mobile to 1920px desktop?
- [ ] How does the interface handle extreme string lengths (overflow, truncation, tooltips)?
- [ ] Are empty, loading skeleton, and error recovery states fully rendered?
- [ ] Does the interface maintain usability when zoomed to 200% in the browser?

### Dimension E: Code Hygiene & Performance (Weight: 15%)
- [ ] Are components decomposed into reusable, single-responsibility units?
- [ ] Are design tokens centralized rather than hardcoded with magic numbers?
- [ ] Are unnecessary heavy third-party dependencies avoided?
- [ ] Does the code pass typecheck and linting without warnings or suppressed errors?

---

## 2. Severity Classification Matrix

When reporting issues during an audit, assign a severity tier:

| Severity | Definition | SLA / Remediation |
|---|---|---|
| **Blocker (P0)** | Primary user journey is broken (e.g., checkout button dead, form cannot submit, keyboard trap). | Fix immediately before release. |
| **Critical (P1)** | Severe accessibility failure (contrast <3:1, missing focus rings), data loss risk, or layout broken on major mobile viewport. | Fix before deployment. |
| **Major (P2)** | Inconsistent spacing, missing empty states, awkward mobile reflow, unoptimized loading shifts. | Fix in current milestone. |
| **Minor (P3)** | Subtle alignment discrepancy (<4px), minor typography polish, non-critical micro-animation easing. | Address in fast-follow polish. |
