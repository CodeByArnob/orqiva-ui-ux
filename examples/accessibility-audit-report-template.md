# Accessibility Audit Report: [Target View / Feature]

**Target**: `[URL / Component Path]`  
**Date**: `[YYYY-MM-DD]`  
**Auditor**: `[Name / Agent]`  
**Standard**: WCAG 2.2 Level AA  
**Compliance Status**: [PASS / PASS WITH WARNINGS / FAIL]

---

## 1. Executive Summary
[Brief 2-3 sentence overview of accessibility health, primary barriers discovered, and remediation priority.]

---

## 2. Quantitative Scores
- **Contrast Compliance**: [ ] % passing WCAG AA
- **Keyboard Operability**: [ ] % features operable without mouse
- **Touch Target Floor**: [ ] % touch targets meeting 48×48px
- **Screen Reader Parity**: [ ] % controls with explicit accessible names

---

## 3. Discovered Issues & Remediation Plan

### Issue A11Y-01: [Title of issue]
- **Severity**: [Blocker (P0) / Critical (P1) / Major (P2) / Minor (P3)]
- **WCAG Success Criterion**: [e.g. 1.4.3 Contrast (Minimum) / 2.1.1 Keyboard]
- **Affected Element**: `[Selector or component name, e.g. .btn-ghost-secondary]`
- **Current Observation**: [e.g. Text color #94A3B8 on background #F8FAFC yields 2.4:1 contrast ratio.]
- **Expected Behavior**: [e.g. Minimum 4.5:1 contrast required for body text.]
- **Remediation Code**:
```css
/* Recommended Fix */
.btn-ghost-secondary {
  color: var(--color-fg-secondary); /* #475569 yields 5.2:1 contrast */
}
```

### Issue A11Y-02: [Title of issue]
- **Severity**: ...
- **WCAG Success Criterion**: ...
- **Affected Element**: ...
- **Current Observation**: ...
- **Expected Behavior**: ...
- **Remediation Code**: ...

---

## 4. Verification & Retest Results
- [ ] Keyboard Tab navigation test re-run and passed.
- [ ] Color contrast re-measured and verified.
- [ ] Screen reader announcement verified via live region.
