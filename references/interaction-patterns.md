# Interaction Patterns & Micro-Interactions

Smooth, predictable interaction patterns transform static mockups into living, trustworthy software.

---

## 1. Micro-Interactions & State Transitions

Every action initiated by a user must provide immediate visual confirmation:

```
[Trigger] ---> [Immediate Feedback (<100ms)] ---> [Async Execution] ---> [Resolution]
 Button click     State: isSubmitting = true         Network call          Toast / Redirect
                  Spinner replaces icon                                    Success checkmark
                  Button disabled
```

### Micro-Interaction Principles:
- **Duration**: Micro-animations should complete within `150ms`–`250ms`. Animations longer than `300ms` feel sluggish.
- **Easing**: Use natural curves: `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) for entering elements, and standard ease-in for exiting elements.
- **Transform-Only**: Animate only GPU-accelerated properties (`transform`, `opacity`). Never animate `width`, `height`, `margin`, or `top` directly, as they trigger expensive layout recalculations (reflow).

---

## 2. Form Validation & Error Prevention

Forms are the most critical and error-prone touchpoints in any application.

### The 4 Laws of Form UX:
1. **Inline Validation Timing**:
   - Do NOT validate fields as the user types their first character (premature red error creates anxiety).
   - Validate on `onBlur` (when the user leaves the input) or after initial form submit attempt.
   - Once an error is shown, re-validate `onChange` to clear the error immediately as soon as the input is valid.
2. **Explicit Error Messages**:
   - Never say: *"Invalid input"*.
   - Say: *"Password must contain at least 8 characters, including 1 number."*
   - Render the error message directly below the input with `aria-describedby="input-error-id"`.
3. **Preserve User Work**:
   - If form submission fails due to a server error, NEVER clear the form inputs.
   - Scroll the viewport to the first invalid field and set focus to it.
4. **Destructive Actions Confirmation**:
   - For high-consequence operations (deleting a database, terminating an account), require two-factor confirmation:
     - Require typing the project name: *"Type 'my-production-db' to confirm deletion"*.
     - Use explicit red styling on the final confirm button.

---

## 3. Data Tables, Filtering & Search

For data-dense applications:

- **Debounced Instant Search**: Debounce search input by `250ms`–`350ms` to avoid flooding backend requests while feeling instant.
- **Clear Active Filters**: Show active filter chips (`Status: Active [×]`, `Role: Admin [×]`) with a 1-click `Clear all` button.
- **Sticky Table Headers**: Keep `<thead>` sticky (`sticky top-0 z-10 bg-surface`) during vertical scroll.
- **Empty Filter State**: Show a dedicated empty state when filters return 0 records, distinct from the initial empty database state. Provide a one-click button: `[Reset All Filters]`.

---

## 4. Modal Dialogs vs. Slide-Out Drawers

| Factor | Modal Dialog | Slide-Out Drawer |
|---|---|---|
| **Best For** | Short, focused decisions (<5 fields), alerts, confirmations | Complex multi-step configurations, editing existing records, inspecting item details |
| **Canvas Visibility** | Centers over canvas; obscures primary context | Slides from right; leaves left 50–70% of canvas partially visible |
| **Mobile Adaption** | Adapts to bottom sheet | Adapts to full-screen slide-over |
| **Keyboard Dismiss** | `Escape` key + backdrop click | `Escape` key + backdrop click |
