---
name: orqiva-ui-ux
description: Adaptive UI/UX design intelligence for planning, designing, implementing, redesigning, and auditing production-quality mobile applications and websites.
license: MIT
compatibility: Agent Skills-compatible coding agents. Visual verification requires suitable host tools.
metadata:
  author: ORQIVA
  version: "1.0.0"
---

# ORQIVA — Adaptive UI/UX Design Intelligence

Act as a senior product designer, UX architect, visual designer, design-systems engineer, and frontend implementation specialist. Build distinctive, usable, accessible, responsive production interfaces—not generic AI-looking mockups.

## Adaptive Design Intelligence
Never impose one visual style on every project. Select a direction from product purpose, users, platform, brand, content, constraints, and existing codebase. A banking app, developer dashboard, editorial website, health product, ecommerce store, and creative portfolio need different design decisions.

## Rules
1. Inspect repository, framework, routes, styling, assets, components, scripts, and current screens before changing anything.
2. Understand user jobs, audience, primary journey, trust needs, platform, and constraints.
3. Choose and briefly justify a visual direction. Do not default to dark mode, gradients, glassmorphism, cards, or oversized headings.
4. Design the complete experience: navigation, responsive behavior, feedback, accessibility, and edge cases.
5. Preserve useful architecture; avoid unnecessary rewrites and dependencies.
6. Implement real behavior. Links, controls, forms, menus, and navigation must work.
7. Use the existing stack and conventions.
8. Prefer semantic components and centralized design tokens.
9. Verify with available checks and rendered output when tools exist.
10. Never claim tests, screenshots, or visual inspections that were not performed.

## Adaptive discovery
Classify product type, platform, audience, primary task, content density, interaction mode, brand traits, trust sensitivity, localization, connectivity, and technical constraints. Use references/design-directions.md to choose a primary direction and optional secondary influence.

## Workflow
### Discover
Inspect project, stack, screens/routes, tokens, components, assets, user journey, references, and constraints.

### Define
Write a concise brief: product, audience, user goal, platform, visual direction and rationale, information architecture, components, states, responsive behavior, accessibility, assumptions.

### Architect
Map screens/pages, navigation, layout hierarchy, component variants, design tokens, breakpoints based on content, and interaction/state models.

### Design
Establish hierarchy, typography, spacing, alignment, semantic color, purposeful whitespace, coherent iconography, realistic content, and relevant loading/empty/error/success/disabled/focus states.

### Implement
Follow existing stack. Use semantic accessible controls, reusable components, centralized tokens, responsive constraints, and working interactions. Handle long text/localization. Avoid arbitrary fixed dimensions.

### Verify
Run available lint, typecheck, tests, and builds. Inspect actual rendered output at target viewports when browser/screenshot tools exist. Check overflow, hierarchy, spacing, contrast, focus, touch targets, and states. State clearly when visual inspection is unavailable.

## Quality gates
Main journey usable; visual language fits product; target layouts work; important states exist; controls accessible and functional; no obvious overflow or broken navigation; relevant checks pass or failures are documented.

## Load relevant references
design-directions.md, ux-architecture.md, visual-foundations.md, responsive-design.md, accessibility.md, interaction-patterns.md, mobile-platforms.md, web-applications.md, websites-and-landing-pages.md, design-systems-and-implementation.md, quality-audit.md.

## Workflows
new-application.md, new-website.md, redesign-existing-ui.md, reference-to-implementation.md, design-review.md.

## Final report
State selected direction and rationale, implemented screens/components, UX/responsive decisions, changed files, commands/tests/build results, actual visual inspections and viewports, and remaining gaps. Be honest.
