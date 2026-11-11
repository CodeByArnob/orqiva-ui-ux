# Quality Checklist: Responsive Reflow & Layout Integrity

Verify layout resilience across viewport dimensions from 320px to 1920px+:

- [ ] **No Horizontal Scroll**: Page body never triggers unintended horizontal scrolling (`overflow-x: hidden` is not used as a band-aid for broken layout math).
- [ ] **Fluid Typography**: Headings and titles scale proportionally between mobile (e.g. 28px) and desktop (e.g. 48px) without breaking container bounds.
- [ ] **Data Table Reflow**: Multi-column data tables gracefully adapt to cards, collapsible accordions, or sticky-column scrollable containers on screens <768px.
- [ ] **Grid Degradation**: Multi-column grids (4-col desktop) step down cleanly to 2-col on tablets and 1-col on mobile phones.
- [ ] **Navigation Adaptation**: Desktop navigation bars/sidebars collapse into bottom navigation or an accessible mobile drawer on screens <1024px.
- [ ] **Image Aspect Ratio Locking**: Images and media containers have fixed aspect ratios (`aspect-video`, `aspect-square`) to prevent Cumulative Layout Shifts (CLS).
- [ ] **Text Overflow Handling**: Truncation (`truncate`, `line-clamp-2`) is paired with tooltips or expansion toggles for long user-generated text.
- [ ] **Wide Screen Constraints**: Main content containers have explicit max-width caps (`max-w-7xl` or `max-w-screen-2xl`) so content does not stretch unnaturally on ultra-wide monitors.
- [ ] **Flex Wrap Resilience**: Button groups, chips, and tags wrap cleanly without clipping or overlapping adjacent lines.
- [ ] **Device Orientation Testing**: Interfaces function cleanly in both portrait and landscape orientations on mobile and tablet devices.
