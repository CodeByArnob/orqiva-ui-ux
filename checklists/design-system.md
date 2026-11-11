# Quality Checklist: Design Systems & Component Libraries

Verify design systems, UI kits, and token architectures:

- [ ] **Semantic Token Hierarchy**: Raw values (e.g. `#0284C7`) are mapped to semantic tokens (`--color-accent-default`), not used directly in component classes.
- [ ] **Theme Switching Symmetry**: Dark and light modes share an identical set of token variables; no component breaks or disappears when switching themes.
- [ ] **4pt / 8pt Spatial Compliance**: All component margins, paddings, gaps, and widths use multiples of 4px or 8px.
- [ ] **Atomic Independence**: Primitive components (`Button`, `Badge`, `Input`) have zero application-specific domain logic and can be used in isolation.
- [ ] **Prop Interface Rigor**: Component props are strictly typed (TypeScript interfaces or PropTypes) with sensible defaults.
- [ ] **Ref Forwarding**: All interactive web components forward their DOM refs (`React.forwardRef`) to allow parent focus management and positioning.
- [ ] **Keyboard & Focus Handling**: Every interactive component handles keyboard events (`Enter`, `Space`, `Arrow` keys) and renders a visible `:focus-visible` state.
- [ ] **State Parity**: Primitives implement all interactive states: default, hover, focus, active, disabled, and loading.
- [ ] **Documentation & Examples**: Every component in the design system has working usage examples and prop table documentation.
- [ ] **Zero Unnecessary Dependencies**: Primitives do not import heavy external animation or utility libraries unless strictly required.
