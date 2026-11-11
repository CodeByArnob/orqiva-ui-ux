export interface DocPage {
  id: string;
  title: string;
  category: 'Getting Started' | 'Workflows' | 'Reference Library' | 'Checklists' | 'Examples' | 'Governance';
  description: string;
  content: string;
}

export const docPages: DocPage[] = [
  {
    id: 'quickstart',
    title: 'Quickstart & Installation',
    category: 'Getting Started',
    description: 'Install ORQIVA UI/UX across supported AI coding agents.',
    content: `
# Quickstart Guide

ORQIVA UI/UX is an open Agent Skill that equips AI coding agents with senior design intelligence, architectural heuristics, and WCAG 2.2 AA accessibility standards.

### Universal Installation (Open Agent Skills CLI)
\`\`\`bash
# Install globally for all supported coding agents
npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g -a '*'
\`\`\`

### Agent-Specific Installation
- **Claude Code**:
  \`\`\`bash
  npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g -a claude-code
  \`\`\`
- **Cursor / Windsurf**:
  Clone the repository directly into your project's \`.skills/\` directory or global skills folder.
- **Gemini CLI / Antigravity**:
  Place \`orqiva-ui-ux\` in \`~/.gemini/antigravity/builtin/skills/\` or pass via skill configuration.

### How to Invoke ORQIVA
Once installed, agents activate ORQIVA automatically when handling design, styling, refactoring, or audit requests. You can also explicitly trigger it:

> "Use ORQIVA to design an accessible, trust-led account transfer flow for a mobile banking application."  
> "Audit this React table component against WCAG 2.2 AA standards using ORQIVA."  
> "Redesign our SaaS telemetry dashboard for high-density monitoring using ORQIVA heuristics."
    `
  },
  {
    id: 'philosophy',
    title: 'Design Philosophy',
    category: 'Getting Started',
    description: 'The core tenets of adaptive design intelligence.',
    content: `
# Adaptive Design Philosophy

### Rejecting Generic AI Aesthetics
Standard AI coding models produce homogeneous interfaces: dark slate backgrounds, neon purple gradients, frosted glass cards, and oversized marketing buzzwords. Regardless of whether the user asks for a hospital charting system or a developer terminal, the output looks identical.

ORQIVA enforces **Adaptive Design Intelligence**:
1. **Context-Driven Direction**: Visual decisions derive from product domain, user emotional state, content density, and platform conventions.
2. **End-to-End System Thinking**: Every screen must account for default, loading skeleton, empty, error recovery, active, and disabled states.
3. **WCAG 2.2 Level AA Non-Negotiable**: 4.5:1 text contrast, visible keyboard focus rings, 48px touch targets, and accessible ARIA landmarks are enforced on every screen.
4. **Zero Placeholder Code**: Every button, input, toggle, and drawer has real working state management.
    `
  },
  {
    id: 'workflow-new-app',
    title: 'New Application Workflow',
    category: 'Workflows',
    description: 'Step-by-step procedure for designing new apps.',
    content: `
# Workflow: New Application UI Design

Use this workflow when creating a new application from scratch:

1. **Discover & Context Ingestion**:
   - Inspect existing project stack (\`package.json\`, styling setup).
   - Identify user job-to-be-done and select visual direction from \`references/design-directions.md\`.
2. **Architecture & Wireframing**:
   - Web: Select between persistent sidebar with independent canvas scroll or top tab navigation.
   - Mobile: Establish bottom navigation bar (3–5 tabs) and natural thumb zone CTAs.
3. **Design Tokens & Foundations**:
   - Centralize semantic tokens (canvas, surface, border, accent, text).
   - Apply strict 4pt/8pt spatial grid.
4. **Component Implementation**:
   - Implement all 6 lifecycle states (default, hover, focus, loading, empty, error).
5. **Accessibility Verification**:
   - Validate WCAG 2.2 AA contrast ratios and test full keyboard operability.
    `
  },
  {
    id: 'workflow-redesign',
    title: 'Redesign Existing UI Workflow',
    category: 'Workflows',
    description: 'Refactoring legacy, cluttered, or inaccessible interfaces.',
    content: `
# Workflow: Redesigning Existing User Interfaces

1. **Pre-Redesign Audit**:
   - Document current UX friction: contrast failures, broken mobile reflow, cluttered tables, missing focus rings.
2. **Information Restructuring**:
   - Demote secondary actions to overflow menus.
   - Elevate the primary user goal to the visual focal point.
3. **Token Alignment**:
   - Replace arbitrary magic numbers with semantic tokens.
4. **Responsive Reflow**:
   - Implement Table-to-Card reflow for screens under 768px.
5. **Regression Verification**:
   - Verify all original sorting, filtering, and pagination logic remains 100% operational.
    `
  },
  {
    id: 'ref-directions',
    title: 'Visual Design Directions',
    category: 'Reference Library',
    description: 'Taxonomy of domain-specific visual languages.',
    content: `
# Adaptive Visual Design Directions

| Direction | Domain | Key Traits | Anti-Patterns to Avoid |
|---|---|---|---|
| **Trust-Led Restrained** | Banking, Tax, Legal | Navy/slate tones, strict 8pt grid, tabular numbers, crisp dividers | Playful gradients, ambiguous gamification |
| **Calm Human-Centered** | Healthcare, Clinical | Soft teal/slate, generous whitespace, legible rounded sans | Alarmist red accents for non-emergencies |
| **Utilitarian DevTools** | IDEs, Terminals, CI/CD | 4pt compact grid, monospaced fonts, keyboard shortcuts, high density | Decorative whitespace, slow animations |
| **Data-Dense Professional** | ERP, CRM, Analytics | Sortable tables, sparklines, status pills, compact buttons | Huge floating cards that waste screen space |
| **Modern Minimal Editorial** | Luxury, Publishing | Bold typographic scales, monochromatic palette, expansive margins | Cluttered navigation, generic stock icons |
| **Conversion-Led Commerce** | Retail, Direct-to-Consumer | High-contrast CTAs, product focus, slide-out cart drawers | Hidden pricing, deceptive urgency banners |
    `
  },
  {
    id: 'ref-a11y',
    title: 'Accessibility (WCAG 2.2 AA)',
    category: 'Reference Library',
    description: 'In-depth accessibility guidelines and code examples.',
    content: `
# Accessibility & Inclusive Engineering

### WCAG 2.2 AA Contrast Standards
- **Body Copy (<18px)**: Minimum 4.5:1 contrast against adjacent background.
- **Large Text (>=18px bold or >=24px)**: Minimum 3.0:1 contrast.
- **UI Components & Borders**: Minimum 3.0:1 contrast.

### Keyboard & Focus Trapping
- Always provide \`:focus-visible\` rings with high-contrast outlines.
- When modals open, trap keyboard focus within the dialog.
- Pressing \`Escape\` must dismiss overlays and restore focus to trigger element.
- Respect \`prefers-reduced-motion: reduce\` across all transition animations.
    `
  },
  {
    id: 'ref-mobile',
    title: 'Mobile Platforms (iOS, Android, Flutter)',
    category: 'Reference Library',
    description: 'Platform conventions for HIG, Material Design 3, and Flutter.',
    content: `
# Mobile Platform Conventions

### iOS vs. Android
- **iOS (HIG)**: SF Pro typography, Large Titles collapsing on scroll, Tab Bar at bottom, Action Sheets.
- **Android (M3)**: Roboto / Product Sans typography, Navigation Bar with tonal pills, Floating Action Button (FAB).

### Touch Ergonomics
- Minimum touch target: 48×48px (Web/Android), 44×44pt (iOS).
- Primary actions anchored in bottom 40% (Natural Thumb Zone).
- Wrap views in \`SafeArea\` to respect notches and home indicator bars.
    `
  },
  {
    id: 'checklist-a11y',
    title: 'Accessibility Checklist',
    category: 'Checklists',
    description: 'Verification criteria before shipping UI.',
    content: `
# Quality Checklist: Accessibility (WCAG 2.2 AA)

- [ ] Text contrast meets minimum 4.5:1 (body) and 3.0:1 (large headings).
- [ ] Active UI borders and controls meet 3.0:1 contrast.
- [ ] All interactive elements render visible \`:focus-visible\` rings.
- [ ] Entire journey can be navigated via keyboard (\`Tab\`, \`Enter\`, \`Space\`, \`Escape\`).
- [ ] Modals trap focus and close upon \`Escape\`.
- [ ] Icon-only buttons have descriptive \`aria-label\` attributes.
- [ ] Error messages are tied to inputs via \`aria-describedby\`.
- [ ] Color is never used as the sole indicator of status.
    `
  },
  {
    id: 'release-notes',
    title: 'Changelog & Version History',
    category: 'Governance',
    description: 'Official release history and semantic versioning notes.',
    content: `
# Changelog

All notable changes to ORQIVA UI/UX are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

### [1.0.0] — Production Release (2026-11-11)
#### Added
- Complete ORQIVA Adaptive Design Intelligence skill ecosystem.
- 11 comprehensive design reference modules (Visual Directions, UX Architecture, Multi-Framework Systems, Responsive Reflow, Accessibility, etc.).
- 5 actionable workflows (New App, New Website, Redesign UI, Reference to Implementation, Design Review).
- 5 production quality checklists (Accessibility, Mobile, Responsive, Website, Design Systems).
- 8 real, fully-functional demonstration interfaces with real screenshots.
- Complete Documentation & Showcase website built with React, Vite, and Tailwind CSS.
- Automated validation and packaging pipelines generating release ZIPs and checksums.
    `
  }
];
