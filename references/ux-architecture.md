# UX Architecture & Information Architecture

Information architecture (IA) is the structural blueprint of an interface. A clean visual layer over poor information architecture produces an unusable product.

---

## 1. Hierarchy & Mental Models

Every screen must have an unmistakable focal point and a predictable layout anatomy:

```
+-------------------------------------------------------------------+
| Top Navigation: Global context (Brand, Global Search, User Profile) |
+-------------------+-----------------------------------------------+
| Primary Navigation| Main Work Area / Canvas                       |
| (Sidebar / Rail / | - View Header: Page Title, Breadcrumbs, Actions|
| Tabs)             | - Telemetry / Key Summaries (3-4 metrics max)  |
|                   | - Primary Data View (Table / Feed / Canvas)   |
|                   | - Contextual Drawer / Secondary Panel         |
+-------------------+-----------------------------------------------+
| Bottom Bar (Mobile only): Primary destinations (3-5 items max)     |
+-------------------------------------------------------------------+
```

### Hierarchy Rules:
- **Level 1 (Immediate Context)**: What page is this? Where am I? (Page title, active breadcrumb, active nav tab).
- **Level 2 (Primary Operation)**: What is the main action the user came here to perform? (Single primary button: "New Deployment", "Transfer Funds", "Add Patient").
- **Level 3 (Supporting Content)**: Filtering, sorting, data inspection, pagination.
- **Level 4 (Destructive / Rare Actions)**: Archive, delete, advanced settings (placed in secondary dropdowns or behind explicit confirmation dialogs).

---

## 2. Navigation Architectures

Choose the navigation architecture matching device constraints and depth:

### A. Sidebar Navigation (Complex Web & Desktop Apps)
- Best for applications with 5+ top-level sections, multi-tenant accounts, or collapsible submenus.
- Keep sidebar width fixed (240px–280px) or collapsible to icons-only (64px) with tooltips.
- Pin user profile and workspace switcher at the top or bottom of the sidebar.

### B. Top App Bar with Tabs (Medium-Depth Web Products)
- Best for focused productivity suites, documentation portals, or ecommerce storefronts.
- Limit visible top-level links to 5–7 items; collapse remainder into a "More" dropdown.

### C. Bottom Navigation Bar (Mobile Apps)
- Limit to 3–5 destinations. Never wrap or scroll the bottom navigation bar.
- Use persistent labels beneath icons to avoid ambiguous icon guessing.
- Anchor primary thumb-friendly action in the center or rightmost position.

### D. Breadcrumbs & Deep Linking
- Mandatory for hierarchical paths deeper than 2 levels (e.g., `Settings > Billing > Invoices > #INV-2026-081`).
- Keep the current item unclickable; allow previous segments to be clicked.

---

## 3. Density Tiers

Select a density tier appropriate for the tool:

| Density Tier | Typical Use Case | Row Height | Base Font | Padding | Target Users |
|---|---|---|---|---|---|
| **Compact** | Trading, Terminal, Code Editors, Log Viewers | 28px–32px | 12px–13px | 4px–6px | Domain experts, power users |
| **Standard** | SaaS Dashboards, Project Management, CRM | 44px–48px | 14px–15px | 10px–14px | General knowledge workers |
| **Spacious** | Consumer Apps, Patient Portals, Marketing | 56px–64px | 16px–18px | 16px–24px | Casual, broad public, elderly |

---

## 4. State Completeness Checklist

Every UI component and screen must handle all 6 core lifecycle states:

1. **Initial / Default**: Populated with standard, balanced data.
2. **Loading**: Use shimmering skeleton screens matching actual layout geometry rather than spinning wheels, preventing layout shifts (CLS).
3. **Empty / First Run**: Never show a blank screen. Provide an explanatory illustration or icon, a friendly explanation of why it is empty, and a clear call-to-action to create or import the first item.
4. **Partial / Filtered Out**: When search or filters yield 0 results, indicate: *"No results match 'xyz'. [Reset filters]"*.
5. **Error**: Provide human-readable explanations of what failed, actionable remedies (e.g. "Retry", "Check Connection"), and preserve any unsaved form inputs.
6. **Disabled / Read-Only**: Dim controls to 50% opacity, adjust cursor to `not-allowed`, and explain via tooltip why the action is unavailable if non-obvious.
