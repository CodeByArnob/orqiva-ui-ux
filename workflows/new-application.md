# Workflow: New Application UI Design

Use this workflow when designing and implementing a brand-new application interface (Web SaaS, mobile app, desktop tool, or internal enterprise console) from scratch.

---

## Step 1: Discover & Context Ingestion
1. Inspect the codebase for existing frameworks (React, Next.js, Vue, Svelte, Flutter, React Native, Jetpack Compose).
2. Check existing dependencies for styling engines (Tailwind, CSS modules, styled-components) and UI component packages (Radix, Headless UI, Material).
3. Identify the user personas, their primary tasks, and emotional context:
   - What is the user's primary goal upon landing on this screen?
   - What data needs to be visible immediately vs. behind on-demand disclosure?
4. Choose the appropriate visual direction from [references/design-directions.md](../references/design-directions.md) (e.g., Trust-Led, Utilitarian, Data-Dense).

---

## Step 2: Architecture & Layout Wireframing
1. Establish the primary layout shell:
   - Web: Choose between fixed left sidebar with independent canvas scroll or top navbar with tabs.
   - Mobile: Establish bottom navigation bar with 3–5 core tabs and top status bar.
2. Formulate navigation state and routing structure.
3. Map breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
4. Ensure primary call-to-action (CTA) sits in the visual focal zone (top right for desktop, natural thumb zone for mobile).

---

## Step 3: Design Tokens & Foundations
1. Ensure semantic color variables are mapped (canvas, surface, border, text, accent, status).
2. Verify font scales adhere to the modular scale (12px to 48px).
3. Apply the 4pt/8pt spatial grid to all layout margins and container paddings.

---

## Step 4: Component Implementation
1. Build atomic primitives first (Buttons, Badges, Inputs, Avatars).
2. Construct compound domain components (MetricsCard, DataTable, FilterBar, NavigationRail).
3. Implement all 6 state variations for every component:
   - Default / Populated
   - Hover / Focus-visible
   - Active / Pressed
   - Loading skeleton (no layout shift)
   - Empty state with CTA
   - Error state with recovery action

---

## Step 5: Accessibility & Ergonomics Verification
1. Verify color contrast meets WCAG 2.2 AA (4.5:1 for body copy).
2. Test keyboard navigation: Tab order, focus rings, Escape to close modals.
3. Verify touch targets on mobile viewports are at least 48×48px.
4. Run project typecheck and test suite.
