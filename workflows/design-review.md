# Workflow: UI/UX Quality Review & Heuristic Audit

Use this workflow to conduct a structured, objective design and usability review of an application view, pull request, or user flow.

---

## Step 1: Scope & Journey Definition
1. Define the specific user journey under review (e.g., "New User Registration & Onboarding", "Search and Checkout Flow", "API Key Creation").
2. Identify the target platform (Web, iOS, Android) and primary viewport sizes (Mobile 390px, Desktop 1440px).

---

## Step 2: Heuristic Evaluation
Evaluate the implementation against the 5 core dimensions from [references/quality-audit.md](../references/quality-audit.md):

1. **Visual Hierarchy & Scanning**:
   - Is there a clear primary focal point?
   - Do headings, labels, and figures follow a clear visual hierarchy?
   - Is spatial rhythm (4pt/8pt grid) consistent?
2. **Interaction & Ergonomics**:
   - Are touch targets at least 48×48px on mobile?
   - Are critical actions easy to reach in the thumb zone?
   - Do buttons and inputs provide immediate feedback on click/tap?
3. **Accessibility**:
   - Do contrast ratios pass WCAG 2.2 AA (4.5:1 text, 3:1 controls)?
   - Can the flow be completed entirely using the keyboard (`Tab`, `Enter`, `Escape`)?
   - Do screen reader labels exist on icon-only elements?
4. **Responsive Resilience**:
   - Does content wrap or reflow cleanly without horizontal page scroll?
   - Are tables adapted to cards or scrollable containers on mobile?
5. **State Completeness**:
   - Do empty, loading skeleton, and error recovery states exist and look polished?

---

## Step 3: Synthesis & Audit Report Generation
Compile findings into an actionable audit report categorized by severity:
- **Blocker (P0)**: Issues preventing task completion.
- **Critical (P1)**: Accessibility violations or broken layouts.
- **Major (P2)**: Inconsistent styling or missing states.
- **Minor (P3)**: Visual polish or micro-alignment items.

Provide concrete code suggestions or CSS corrections for every discovered issue.
