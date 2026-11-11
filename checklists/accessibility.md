# Quality Checklist: Accessibility (WCAG 2.2 AA)

Ensure your interface satisfies these verifiable criteria before shipping:

- [ ] **Contrast**: Text contrast is at least 4.5:1 for body copy and 3.0:1 for large text (>=18px bold or >=24px normal) against its background.
- [ ] **UI Component Contrast**: Interactive borders, input outlines, and active state indicators meet 3.0:1 contrast against adjacent colors.
- [ ] **Focus Visibility**: Every interactive element (buttons, links, inputs, checkboxes) renders a high-visibility focus ring when focused via keyboard (`:focus-visible`).
- [ ] **Keyboard Operability**: Entire user journey can be navigated and completed using `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Arrow` keys.
- [ ] **Modal Trapping & Escape**: Modals trap keyboard focus within the dialog while open, and close immediately upon pressing the `Escape` key, restoring focus to the trigger element.
- [ ] **Accessible Names**: All icon-only buttons (`aria-label`), image elements (`alt`), and form controls (`<label for="...">`) have clear, descriptive accessible names.
- [ ] **Form Error Association**: Error messages are explicitly linked to input fields via `aria-describedby` and marked with `aria-invalid="true"` when invalid.
- [ ] **Non-Color Status Cues**: Status (success, error, warning, info) is communicated through icons or text labels in addition to color alone.
- [ ] **Reduced Motion Support**: Layout adheres to `prefers-reduced-motion: reduce` by disabling non-essential motion, auto-scrolling, or large transitions.
- [ ] **Zoom & Reflow**: Content reflows without loss of information or two-dimensional scrolling when browser is zoomed up to 200%.
