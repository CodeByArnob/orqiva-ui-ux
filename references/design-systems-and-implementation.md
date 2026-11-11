# Design Systems and Implementation

Build components around repeated patterns and meaningful behavior. Avoid duplication and unnecessary abstraction.

Define component purpose, variants, sizes, states, content rules, accessibility, and responsive behavior.

Centralize semantic tokens for color, typography, spacing, radius, elevation, border, motion, and breakpoints. Prefer names like surface-primary, text-muted, and action-danger.

Inspect dependencies first. Preserve conventions. Use typed props, clear component APIs, understandable state, semantic controls, testable components, and licensed assets/fonts.

React: composition, semantic elements, stable keys, clear state ownership.
Next.js: respect server/client boundaries and routing conventions.
Flutter: centralize ThemeData/tokens and use responsive constraints.
Jetpack Compose: follow Material/platform conventions and state hoisting.
Other frameworks: follow project idioms.

A design system should improve consistency without blocking product-specific decisions.
