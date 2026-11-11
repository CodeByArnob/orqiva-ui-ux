# Web Applications, Dashboards & Developer Tools

Modern web applications range from simple CRUD dashboards to complex, multi-pane workspaces like cloud consoles, data analytics suites, and IDEs.

---

## 1. Complex Application Layout Anatomy

High-productivity web applications demand structured layouts with independent scrolling panes:

```
+-------------------------------------------------------------------------------+
| App Header: Global Search [⌘K], Org Switcher, Environment Badge, User Profile |
+---------------+-----------------------------------------------+---------------+
| Navigation    | Primary Workspace / Canvas                    | Context Panel |
| Sidebar       | - Filter Bar (Search, Date Range, Status)     | (Inspector /  |
| (Collapsible) | - Telemetry Cards (ARR, Latency, Error Rate)  | Audit Log /   |
|               | - Interactive Data Table (Sortable, Paged)    | Quick Actions)|
|               | - Scrollable Viewport (overflow-y-auto)       |               |
+---------------+-----------------------------------------------+---------------+
| Status Bar (Optional): System health, cluster latency, websocket connection    |
+-------------------------------------------------------------------------------+
```

### Essential Rules:
- **Independent Scroll Areas**: Never scroll the entire window when navigating a complex workspace. The sidebar and header remain fixed; only the canvas scrolls (`overflow-y: auto`).
- **Command Palette (`⌘K` / `Ctrl+K`)**: Provide a global keyboard-accessible launcher for instant navigation, actions, and search.
- **Density Controls**: Allow users to toggle between compact, default, and comfortable row heights in large data tables.

---

## 2. Telemetry & Metrics Design

Dashboard metric cards must convey actionable status, not vanity numbers:

```
+------------------------------------------------------+
| Monthly Recurring Revenue (MRR)         [ℹ️ Tooltip] |
| $284,520                                             |
| +12.4% vs last month  [▲ Trending up]                |
| [ Sparkline visualization over last 30 days ]        |
+------------------------------------------------------+
```

### Telemetry Guidelines:
- **Unit Clarity**: Always display currency symbols (`$`, `€`), percentages (`%`), or units (`ms`, `req/s`, `GB`) explicitly.
- **Trend Significance**: Do not use green/red purely based on whether a number went up or down. For server errors or latency, going *down* is positive (green), and going *up* is negative (red).
- **Sparklines**: Use sparklines without confusing axes to show 30-day directional momentum.

---

## 3. Data Tables & High-Throughput Lists

For tables displaying dozens or hundreds of records:
1. **Column Alignment**:
   - Text, names, emails: **Left-aligned**.
   - Numbers, currency, percentages, dates: **Right-aligned** (enables rapid vertical scanning).
   - Status badges, actions, toggles: **Center-aligned** or **Right-aligned**.
2. **Column Sorting**:
   - Indicate sortable columns with subtle up/down arrows.
   - Display active sort state clearly: `Sorted by Created Date (Descending)`.
3. **Bulk Selection & Actions**:
   - Provide a header checkbox to select all visible items.
   - Reveal a sticky bulk actions bar (`3 items selected: [Export] [Tag] [Delete]`).
4. **Pagination vs. Infinite Scroll**:
   - For administrative and financial data, use **explicit pagination** with items-per-page selector (`25`, `50`, `100`). Infinite scroll makes finding a specific past record frustrating and prevents reaching the page footer.
