# ORQIVA Acceptance Test Prompts

Use these prompt scenarios to test coding agents running with ORQIVA installed. Each test verifies that the agent chooses an appropriate adaptive visual direction, enforces accessibility, and writes functional code rather than generic mockups.

---

## Test Scenario 1: Retail Mobile Banking (Trust-Led Direction)
**Prompt**:  
> "Use ORQIVA to design and implement an account dashboard and money transfer flow for a retail mobile banking app. The user needs to see checking and savings balances, recent transactions with merchant logos, quick transfer to contacts, and a debit card freeze toggle. Optimize for mobile viewports (390px)."

**Expected Agent Behavior**:
1. Selects **Trust-Led Restrained** direction (navy/slate tones, high contrast, clean divider lines, tabular numerals).
2. Explicitly avoids playful purple gradients, neon elements, or cartoonish graphics.
3. Formulates a transfer modal with clear numeric input, currency prefix (`$`), recipient avatar, and explicit two-step confirmation.
4. Ensures 48×48px mobile touch targets and bottom thumb zone positioning.
5. All buttons and card freeze toggles have working state changes.

---

## Test Scenario 2: High-Density Developer Observability Dashboard (Utilitarian Direction)
**Prompt**:  
> "Using ORQIVA, implement a developer telemetry and service health dashboard. It needs latency percentiles (p50, p95, p99), error rate sparklines, a searchable filterable audit log table, and cluster node status pills."

**Expected Agent Behavior**:
1. Selects **Utilitarian DevTools** direction (compact 4pt grid, dark or light theme with crisp borders, monospaced fonts for metrics).
2. Uses tabular figures (`tabular-nums`) and clean sparklines.
3. Implements interactive search and filter chips with instant state update.
4. Avoids huge decorative hero spaces or low-contrast text.
5. Implements sticky table headers and responsive horizontal scroll.

---

## Test Scenario 3: Legacy Table Redesign (Heuristic Audit & Refactoring)
**Prompt**:  
> "Redesign this cluttered legacy patient records table. Current code has 12 columns crammed together, low-contrast text, no keyboard focus rings, and breaks on mobile screens. Maintain all existing patient data fields."

**Expected Agent Behavior**:
1. Executes the **Redesign Existing UI** workflow.
2. Identifies P1 contrast and mobile layout failures.
3. Groups secondary metadata into expandable detail drawers.
4. Implements card reflow for mobile screens (<768px).
5. Centralizes styles into semantic design tokens.

---

## Test Scenario 4: E-Commerce Product Detail & Cart Drawer (Conversion-Led)
**Prompt**:  
> "Design a modern product detail view with image gallery, color variant selector, size picker, add to cart button, and a slide-out cart drawer with free shipping threshold progress."

**Expected Agent Behavior**:
1. Selects **Conversion-Led Commerce** direction.
2. Clear pricing hierarchy, instant visual feedback on variant selection.
3. Slide-out cart drawer with keyboard focus trap and Escape key dismissal.
4. Sticky bottom add-to-cart action on mobile viewports.
