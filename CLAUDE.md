# CLAUDE.md : ORQIVA UI/UX Development & Skill Protocol

Welcome to the **ORQIVA UI/UX** repository. This document primes Claude Code with the operational protocols, architecture, testing rules, and design standards of this project.

---

## 1. Project Mission & Identity

ORQIVA UI/UX is an open-source **Adaptive Design Intelligence** ecosystem for AI coding agents. It equips Claude Code, Antigravity, Cursor, and Windsurf with senior-level UI/UX design heuristics, WCAG 2.2 AA accessibility standards, and framework-specific implementation patterns.

- **Primary Repository**: https://github.com/CodeByArnob/orqiva-ui-ux
- **Documentation & Showcase Site**: https://codebyarnob.github.io/orqiva-ui-ux/
- **Specification Standard**: Open Agent Skills Specification (entrypoint: [SKILL.md](SKILL.md))
- **MCP Server**: [mcp/server.js](mcp/server.js) (JSON-RPC 2.0 stdio)
- **Developer CLI**: [bin/orqiva.js](bin/orqiva.js) (`npx orqiva-ui-ux`)

---

## 2. Essential CLI & Validation Commands

Always run these commands to verify changes before committing:

```bash
# Run full repository test suite (129+ checks: links, frontmatter, tokens, em-dash)
npm test

# Run validation script directly
npm run validate

# Build documentation & showcase site (Vite + React + Tailwind)
npm run build:site

# Run the interactive developer CLI locally
node bin/orqiva.js help
node bin/orqiva.js showcase
node bin/orqiva.js audit

# Run the MCP server
node bin/orqiva-mcp.js
```

---

## 3. Strict Development Constraints

1. **Zero Em-Dash Rule**: The em-dash character (`\u2014`) is strictly prohibited in all `.md`, `.js`, `.mjs`, `.ts`, `.tsx`, and `.json` files. Always use a standard hyphen with spaces (` - `), a colon, or rewrite the sentence. Automated CI (`npm test`) fails if any em-dash is detected.
2. **Markdown Link Integrity**: All internal relative links must resolve to real files on disk. Do not write broken or speculative links.
3. **No Visual Illusions**: Never implement fake metrics, placeholder reviews, unhandled loading states, or dummy buttons without real functionality.
4. **WCAG 2.2 Level AA**: All color pairings must pass 4.5:1 contrast for normal text and 3:1 for large text and UI controls.
5. **Mobile Touch Ergonomics**: Minimum 44x44px touch targets on iOS, 48x48px on Android/Web.

---

## 4. Claude Code UI/UX Generation Protocol

Whenever Claude is asked to design, implement, or review UI components in any project:

### Step 1: Discover & Select Archetype
Do not default to generic dark purple gradients. Match the domain to one of the 7 codified archetypes:
1. **Luxury Editorial E-Commerce** (AuraGlow): Obsidian `#0B0B0D` + Champagne Gold `#D4AF37` + Playfair Display Serif.
2. **Cosmic FinTech SaaS** (OrbitFinance): Cosmic Void `#060714` + Neon Violet `#8B5CF6` + Cyan `#06B6D4` + Radial Nebulae.
3. **Liquid Chrome Neo-Banking** (NovaBank): Pure Obsidian `#050505` + Coral Crimson `#FF3B56` + 56px Keypad.
4. **Dark Pulse Personal Metrics** (PulseFocus): Stealth Navy `#0C0D14` + SVG Goal Rings + 7-Day Velocity Bars.
5. **Timetable Calendar & Stopwatch** (ChronoTask): Minimal Dark `#0E0F13` + Date Scrubber + Live Timetable Needle.
6. **Neumorphic Dark Workspace** (Synthetix): Matte Charcoal `#0E0E12` + Soft Elevated Cards + Absence Matrix.
7. **Dual Mint Cards & Donut Analytics** (Veritas): Dark Slate `#111214` + Mint `#2DD4BF` + 6-Segment Donut Chart.

### Step 2: Implement Complete Interactive States
Never output half-baked components. Always provide:
- **Default state** with crisp layout hierarchy
- **Hover state** with subtle transition (`transition-all duration-200`)
- **Focus-visible state** with prominent ring (`focus-visible:ring-2 focus-visible:ring-sky-500`)
- **Active state** with tactile feedback
- **Disabled state** with reduced opacity and `cursor-not-allowed`
- **Loading state** with animated skeleton cards
- **Empty state** with descriptive illustration and action button
- **Error state** with clear recovery mechanism

### Step 3: Enforce Keyboard & Screen Reader Accessibility
- Use semantic tags: `<main>`, `<nav>`, `<header>`, `<article>`, `<button type="button">`.
- Provide `aria-label` on icon-only buttons.
- Use `tabular-nums` for financial numbers, time counters, and data tables.
- Constrain text column width with `max-w-prose` (65ch-75ch).

---

## 5. Repository Structure Reference

- [SKILL.md](SKILL.md) : Primary Agent Skill definition and comprehensive heuristic manual.
- [references/specialized-archetypes.md](references/specialized-archetypes.md) : Deep token, typography, and layout rules for the 7 archetypes.
- [references/visual-foundations.md](references/visual-foundations.md) : 4pt/8pt spatial grid, typography scales, semantic color system.
- [references/accessibility.md](references/accessibility.md) : Comprehensive WCAG 2.2 AA accessibility audit guide.
- [references/mobile-platforms.md](references/mobile-platforms.md) : iOS Human Interface Guidelines and Android Material Design 3.
- [workflows/new-application.md](workflows/new-application.md) : End-to-end workflow for designing from scratch.
- [workflows/redesign-existing-ui.md](workflows/redesign-existing-ui.md) : System for upgrading legacy or dated interfaces.
- [mcp/server.js](mcp/server.js) : Stdio Model Context Protocol server exposing accessibility audit and token tools.
- [site/src/components/RealAppGallery.tsx](site/src/components/RealAppGallery.tsx) : Showcase gallery displaying real reference images.
