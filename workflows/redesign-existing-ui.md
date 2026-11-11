# Workflow: Redesigning Existing User Interfaces

Use this workflow when modernizing, restructuring, or fixing an existing, cluttered, legacy, or poorly functioning user interface without breaking existing business logic or routes.

---

## Step 1: Pre-Redesign Audit & Baseline Capture
1. Inspect the existing code, components, state management, and props.
2. Identify existing pain points using [references/quality-audit.md](../references/quality-audit.md):
   - Visual clutter, inconsistent margins, mismatched colors.
   - Low text contrast, inaccessible form controls, missing focus states.
   - Poor information hierarchy (e.g. secondary actions competing with primary CTA).
   - Broken or unoptimized mobile reflow.
3. Capture or document the baseline state so improvements can be objectively demonstrated.

---

## Step 2: Information Restructuring & De-cluttering
1. Group scattered controls into logical clusters (e.g., filter bar, primary actions, status summary).
2. Establish a clear visual hierarchy:
   - Downgrade low-frequency actions from loud primary buttons to subtle icon buttons or overflow menus.
   - Elevate the primary user objective to the visual focal point.
3. Replace visual clutter (heavy divider borders, random background boxes) with purposeful whitespace and subtle borders.

---

## Step 3: Design Token Alignment
1. Replace ad-hoc arbitrary inline styles (`style={{ marginTop: '17px', color: '#334155' }}`) with centralized semantic design tokens.
2. Standardize typography to the project's scale (e.g. `text-sm`, `text-base`, `text-lg`).
3. Ensure numbers and tabular data use monospaced or tabular figures (`tabular-nums`).

---

## Step 4: Incremental Code Implementation
1. Preserve existing component interfaces, props, and callbacks so dependent views do not break.
2. Implement clean state transitions and interactive micro-interactions.
3. Ensure empty, loading skeleton, and error recovery states exist.

---

## Step 5: Comparative Verification
1. Compare before and after states side-by-side.
2. Verify that all original functional capabilities (search, filtering, pagination, sorting) remain 100% operational.
3. Run test suites and verify that zero regression bugs were introduced.
