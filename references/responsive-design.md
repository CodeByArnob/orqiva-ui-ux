# Responsive & Adaptive Design Architecture

Responsive design in ORQIVA is more than shrinking desktop columns into a single stack. It is an intentional reflow strategy where information architecture adapts to user context, hardware capabilities, and input modes.

---

## 1. Breakpoint Taxonomy

Do not target specific device brands; target content breakpoints:

| Breakpoint | Min-Width | Primary Target Context | Layout Paradigm |
|---|---|---|---|
| `sm` | 640px | Large phones in landscape, small tablets | Single-column cards, bottom sheets replace modals |
| `md` | 768px | Tablets, split-screen desktop windows | Two-column cards, sidebar collapses to icon-rail |
| `lg` | 1024px | Laptops, medium desktop monitors | Full multi-column dashboard, persistent sidebar |
| `xl` | 1280px | Standard 1080p desktop monitors | Expanded data tables, auxiliary contextual drawers |
| `2xl` | 1536px | Ultra-wide monitors, 4K displays | Max-width content capping (`max-w-7xl` or `max-w-screen-2xl`) |

---

## 2. Reflow Patterns

### A. Data Table to Card Reflow
Data tables with 6+ columns become illegible on mobile viewports. Use the **Table-to-Card** or **Horizontal Scroll with Sticky Key Column** pattern:
- **Mobile (<768px)**: Render each record as an individual card with key metric highlighted, secondary metadata stacked below, and an expander toggle for full details.
- **Desktop (>=768px)**: Render full tabular view with sortable columns, fixed headers, and inline action buttons.

### B. Off-Canvas Sidebar to Bottom Navigation
- **Desktop**: Persistent 240px sidebar on left edge with sub-navigation.
- **Mobile**: Hide sidebar completely; expose top 4 destinations via bottom bar (height 56px–64px) and place secondary settings inside an off-canvas drawer triggered by an avatar or hamburger icon.

### C. Modal Dialog to Bottom Sheet
- **Desktop**: Centered modal dialog (`max-w-lg`, centered with backdrop).
- **Mobile**: Anchored bottom sheet (`bottom-0 w-full rounded-t-2xl max-h-[85vh] overflow-y-auto`) with swipe-to-dismiss gesture handle. Thumb ergonomics make top-centered modals hard to reach on phones.

---

## 3. Touch Ergonomics & Thumb Zone

On handheld devices, 75% of one-handed interactions occur in the **Natural Thumb Zone**:

```
+---------------------------+  ^ Top 20%: Difficult to reach
| Back Button   Page Title  |  | Used for reading, status, back
+---------------------------+  |
|                           |  |
|       Neutral Zone        |  | Middle 40%: Reachable with grip shift
|   (Content / Cards / Text)|  |
|                           |  |
+---------------------------+  |
| Primary CTAs / Inputs     |  v Bottom 40%: Natural Thumb Zone
| [ Transfer Now ]          |  | Fast, ergonomic, comfortable
+---------------------------+  |
| Bottom Nav [ 1 | 2 | 3 ]  |  v
+---------------------------+
```

### Mobile Input Rules:
- **Minimum Target Size**: `48px × 48px` clickable/tappable area (even if icon is 20px, pad with hit area).
- **Sticky Actions**: Pin critical submission buttons (`Pay $45.00`, `Save Changes`) to the bottom viewport with safe-area padding: `pb-safe` or `env(safe-area-inset-bottom)`.
- **Keyboard Protection**: Ensure mobile forms do not obscure active inputs when the virtual keyboard pops up (`scrollIntoView({ behavior: 'smooth', block: 'center' })`).

---

## 4. Container Queries vs. Media Queries

When building reusable design system components, prefer CSS Container Queries (`@container`) over global viewport Media Queries (`@media`):
- A card rendered in a narrow 300px sidebar should render in mobile-stack layout, even if the user is on a 2560px 4K monitor.
- Declare parent container: `container-type: inline-size; container-name: card-container;`
- Adapt child layout: `@container card-container (min-width: 400px) { ... }`
