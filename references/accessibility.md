# Accessibility (a11y) & Inclusive Engineering

Accessibility is not an afterthought or compliance checklist; it is an engineering discipline that guarantees software is usable by everyone, including people with vision, motor, cognitive, or situational impairments.

ORQIVA mandates compliance with **WCAG 2.2 Level AA** as a non-negotiable minimum standard.

---

## 1. Contrast Requirements (WCAG 2.2 Level AA)

| Element Category | Minimum Contrast Ratio | Preferred Target | Testing Technique |
|---|---|---|---|
| **Body copy & subheaders (<18px)** | **4.5 : 1** | 7.0 : 1 | Color picker contrast formula |
| **Large text (>=18px bold or >=24px normal)** | **3.0 : 1** | 4.5 : 1 | Large display headers |
| **Active UI components & graphical borders** | **3.0 : 1** | 4.5 : 1 | Form input borders, checkboxes, toggle switches |
| **Incidental / Disabled controls** | No requirement | 2.5 : 1 recommended | Still maintain discernibility |

> [!WARNING]
> Never use pure light gray `#9CA3AF` text on white `#FFFFFF` (contrast ratio 2.8:1 - FAILS WCAG AA). Use `#4B5563` or darker (minimum 4.6:1 - PASSES).

---

## 2. Keyboard Navigation & Focus Management

Every function available via mouse must be executable via keyboard alone:

1. **Logical Tab Order**: Follow the visual reading order (left-to-right, top-to-bottom). Never use `tabindex` greater than `0`.
2. **Visible Focus Rings**: Never remove `:focus { outline: none; }` without providing a distinct `:focus-visible` ring.
   ```css
   :focus-visible {
     outline: 2px solid var(--color-accent-default);
     outline-offset: 2px;
   }
   ```
3. **Modal & Drawer Focus Trapping**:
   - When a modal opens, immediately trap focus within the dialog.
   - Set focus to the first interactive element or close button.
   - Pressing `Tab` from the last element cycles to the first element.
   - Pressing `Escape` closes the modal immediately and restores focus to the triggering element.
4. **Skip to Main Content Link**:
   - Provide an off-screen link at the top of the DOM: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>`.

---

## 3. Screen Reader Semantics & ARIA

Use native semantic HTML5 before reaching for ARIA:
- Prefer `<button>` over `<div onClick="...">`. A `<div>` lacks Enter/Space key triggers, role declaration, and focusability.
- Prefer `<dialog>` or native form controls (`<input type="checkbox">`, `<select>`).

### Crucial ARIA Patterns:
- **Icon-Only Buttons**: Must have `aria-label`:
  ```html
  <button aria-label="Close dialog" class="icon-btn">
    <svg aria-hidden="true">...</svg>
  </button>
  ```
- **Collapsible Disclosures & Accordions**:
  ```html
  <button aria-expanded="false" aria-controls="faq-answer-1" id="faq-btn-1">
    How does ORQIVA work?
  </button>
  <div id="faq-answer-1" role="region" aria-labelledby="faq-btn-1" hidden>
    ORQIVA uses adaptive intelligence...
  </div>
  ```
- **Live Regions for Dynamic Feedback**:
  ```html
  <div role="status" aria-live="polite" class="sr-only">
    24 search results loaded.
  </div>
  ```

---

## 4. Reduced Motion & Sensory Support

Users with vestibular disorders can experience nausea from parallax scrolling and aggressive spring animations.

Respect the system preference across CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
