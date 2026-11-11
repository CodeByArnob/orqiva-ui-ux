# Specialized Interface Archetypes

This reference module establishes precise visual tokens, structural layout rules, typography pairings, and interaction models for 7 production-grade application archetypes supported by ORQIVA.

---

## Archetype Index

1. **Luxury Editorial E-Commerce** (AuraGlow Jewelry Atelier)
2. **Cosmic FinTech SaaS** (OrbitFinance SaaS Telemetry)
3. **Liquid Chrome Neo-Banking** (NovaBank 3-Screen Mobile)
4. **Dark Pulse Productivity** (PulseFocus Personal Metrics)
5. **ChronoTask Mobile Suite** (ChronoTask Timetable & Stopwatch)
6. **Synthetix Workspace Tasks** (Synthetix Workspace & Absence)
7. **Veritas Wealth & Banking** (Veritas Dual-Card & Donut Analytics)

---

## 1. Luxury Editorial E-Commerce (AuraGlow Jewelry Atelier)

### Target Domains
High-end jewelry, luxury fashion, horology, bespoke fragrances, art auctions, premium architecture.

### Color Palette & Design Tokens
```css
:root {
  --editorial-bg: #0B0B0D;
  --editorial-surface: #141417;
  --editorial-surface-raised: #1C1C21;
  --editorial-gold: #D4AF37;
  --editorial-gold-muted: #B38F24;
  --editorial-gold-glow: rgba(212, 175, 55, 0.18);
  --editorial-champagne: #E8DECB;
  --editorial-silk: #FAF7F2;
  --editorial-text-muted: #8E8B82;
  --editorial-border: rgba(212, 175, 55, 0.2);
}
```

### Typography Hierarchy
* **Display / Brand Heading**: High-contrast Serif (`Playfair Display`, `Cormorant Garamond`, `Cinzel`, weight 400/500, letter-spacing -0.02em).
* **Body / Meta / Commerce Data**: Clean, neutral Grotesque Sans (`Inter`, `Plus Jakarta Sans`, weight 400/500, uppercase letter-spacing +0.08em for category pills).
* **Pricing & Carat Weight**: Tabular figures, medium weight, champagne tone.

### Key Architectural Patterns
* **Asymmetric Hero Canvas**: Off-grid split layout pairing editorial hero title ("Timeless Elegance Diamond Collection") with floating product cards and pill buttons ("Explore Collection").
* **Product Showcase Grid**: High-fashion photography on matte black backgrounds, framed in hairline golden borders with soft radial spotlights behind hero pendants and rings.
* **Micro-Pills & Spec Tags**: Translucent dark pills ("18K White Gold", "Bridal Edition", "Crafted to Perfection") positioned near gemstone accents.
* **Interactive Hover States**: Subtle 1.02x scale transitions, golden border brightenings, and smooth cursor-following specular reflections.

---

## 2. Cosmic FinTech SaaS (OrbitFinance SaaS Telemetry)

### Target Domains
Modern developer platforms, AI infrastructure, cosmic financial telemetry, crypto analytics, startup operations.

### Color Palette & Design Tokens
```css
:root {
  --cosmic-bg: #060714;
  --cosmic-surface: #0C102B;
  --cosmic-surface-glass: rgba(12, 16, 43, 0.7);
  --cosmic-neon-purple: #8B5CF6;
  --cosmic-neon-cyan: #06B6D4;
  --cosmic-neon-amber: #F59E0B;
  --cosmic-text-primary: #F8FAFC;
  --cosmic-text-secondary: #94A3B8;
  --cosmic-glow-purple: 0 0 24px rgba(139, 92, 246, 0.35);
  --cosmic-glow-cyan: 0 0 24px rgba(6, 182, 212, 0.35);
}
```

### Typography Hierarchy
* **Hero Headline**: Bold display Sans (`Plus Jakarta Sans`, `Geist Sans`, weight 700/800, tight tracking -0.03em).
* **Telemetry & Numeric Readouts**: Monospaced tabular numerals (`JetBrains Mono`, `Geist Mono`).

### Key Architectural Patterns
* **Celestial Depth Backdrop**: Deep space canvas featuring subtle celestial lunar imagery and glowing radial ambient nebula gradients.
* **Glassmorphic Telemetry Widget**: Low-contrast backdrop-blurred dashboard card (`backdrop-blur-xl bg-slate-900/60 border border-slate-800/80`) anchored at the lower viewport.
* **Neon Financial Sparkline**: Continuous spline curves with glowing peak nodes and subtle gradient area fills under the curve.
* **Floating Gradient Card Balance**: Multi-stop gradient virtual card (`from-indigo-600 via-purple-600 to-pink-500`) with dual-level balance readout and network chip logo.

---

## 3. Liquid Chrome Neo-Banking (NovaBank 3-Screen Mobile)

### Target Domains
Consumer neo-banking, multi-currency wallets, instant peer-to-peer transfers, Gen-Z financial products.

### Color Palette & Design Tokens
```css
:root {
  --novabank-bg: #050505;
  --novabank-surface: #121214;
  --novabank-coral: #FF3B56;
  --novabank-platinum: #E2E8F0;
  --novabank-card-dark: #1E1E24;
  --novabank-sheet-bg: #FFFFFF;
  --novabank-sheet-text: #0F172A;
  --novabank-text-muted: #64748B;
}
```

### 3-Screen Continuous Architecture
1. **Screen 1 : Liquid Splash & Onboarding**:
   * Pure obsidian background with central chrome 3D fluid art asset.
   * Bold value proposition: "Finances become cosmically simple!"
   * Full-width floating pill button: "Get Started" with smooth right-arrow navigation icon.
2. **Screen 2 : Core Dashboard**:
   * Top app bar: Red starburst logo, notification bell, user profile pill.
   * Total Balance Hero: `$10,620` in 36px font with subtle comma grouping.
   * Dual Card Carousel: Platinum silver card (`$6,945`) and Coral red card (`$3,675`) with masked card numbers (`.. 1742`).
   * Bottom Sheet Drawer: White sheet with transaction records featuring crisp merchant icons (Figma, YouTube Premium, Apple Arcade) and negative debit amounts.
3. **Screen 3 : Send Money & Tactile Keypad**:
   * Recipient profile card with rounded avatar and recipient name ("Jayden Church").
   * Source card dropdown selector ("VISA .. 1759").
   * Centered large amount display: `$250` with real-time fee caption ("2% commission. Total amount $255").
   * Dedicated 12-key numeric touch keypad (1-9, ., 0, backspace) with min 56px touch target height.
   * Bottom action bar: Full-width dark button ("Send Money ->").

---

## 4. Dark Pulse Productivity (PulseFocus Personal Metrics)

### Target Domains
Habit tracking, deep-work timers, personal OKRs, fitness analytics, sprint goal management.

### Color Palette & Design Tokens
```css
:root {
  --pulse-bg: #0C0D14;
  --pulse-surface: #141724;
  --pulse-surface-elevated: #1D2133;
  --pulse-accent-blue: #3B82F6;
  --pulse-accent-emerald: #10B981;
  --pulse-accent-purple: #A855F7;
  --pulse-text-primary: #F1F5F9;
  --pulse-text-secondary: #94A3B8;
}
```

### Key Architectural Patterns
* **Segmented Mode Pill**: Segmented navigation switcher at top ("Overview" vs "Productivity") with active blue pill transition.
* **Radial Goal Ring Widget**: Circular SVG completion ring (e.g. 3/5 tasks) with centered hexagon glyph, accompanied by motivational microcopy ("You marked 3/5 tasks are done").
* **7-Day Velocity Bar Graph**: Vertical bar chart comparing daily output across Monday to Sunday, highlighting active sprint velocity with neon purple bar tops.
* **Bottom Dock Navigation**: Floating pill navigation bar with active blue glow, central circular Quick-Add button (+), and direct access to Tasks, Alerts, and Search.

---

## 5. ChronoTask Mobile Suite (ChronoTask Timetable & Stopwatch)

### Target Domains
Agile task management, daily scheduling, agency project tracking, time-blocking workflows.

### Color Palette & Design Tokens
```css
:root {
  --chrono-bg: #0F1015;
  --chrono-surface: #191B22;
  --chrono-surface-light: #242731;
  --chrono-mint: #2DD4BF;
  --chrono-orange: #FB923C;
  --chrono-blue: #38BDF8;
  --chrono-magenta: #F43F5E;
  --chrono-text-light: #F8FAFC;
}
```

### 3-Screen Time-Block Workflow
1. **Screen 1 : Daily Progress & Card Scroller**:
   * Gradient progress banner: "7 tasks to complete today : Your productivity for the day is shown here" with fraction indicator `2/7`.
   * Horizontal project cards with avatar badges and deadline chips.
   * Filter pill tabs: "To do", "In progress", "On review", "Completed".
2. **Screen 2 : Chronological Timetable**:
   * Sticky horizontal day scrubber: numbered date pills with active cyan highlight (e.g., Wed 25).
   * Vertical hour markers: 09:00 AM through 03:00 PM.
   * Color-coded event blocks: Orange for Team Meeting, Sky Blue for Design Review, Magenta for PM Meeting.
   * Real-time cursor needle: Floating pill indicator (e.g. 11:24 AM) showing current time position across scheduled blocks.
3. **Screen 3 : Task Detail & Integrated Stopwatch**:
   * Task header: Task number ("Task #43"), Priority pill ("High Priority"), Assignee chip.
   * Interactive Checklist: Checkboxes with strikethrough states and completion indicators.
   * Active Stopwatch Dock: Pill-shaped time tracker displaying live elapsed time ("3h 36m") with active Pause/Resume tactile button.

---

## 6. Synthetix Workspace Tasks (Synthetix Workspace & Absence)

### Target Domains
Enterprise team productivity, remote work hubs, attendance management, resource planning.

### Color Palette & Design Tokens
```css
:root {
  --synthetix-bg: #0E0E12;
  --synthetix-surface: #181920;
  --synthetix-surface-soft: #21222C;
  --synthetix-teal: #14B8A6;
  --synthetix-teal-light: #5EEAD4;
  --synthetix-text-main: #FFFFFF;
  --synthetix-text-dim: #71717A;
}
```

### Key Architectural Patterns
* **Angled Glass Floating Cards**: Multi-card preview with progress bars (`70%`), date chips, and avatar clusters tilted with perspective depth.
* **Curved Soft Action Buttons**: Teal circular action buttons with directional arrows and smooth 3D bevel edges.
* **Quick Announcement Modules**: Neumorphic curved rounded-square tiles for "Sprint Planning", "Meeting Notes", and "Expenses".
* **Absence & Team Attendance Grid**: Clean monthly calendar grid with circular date nodes, paired with an hourly workload breakdown matrix showing employee allocation percentages.

---

## 7. Veritas Wealth & Banking (Veritas Dual-Card & Donut Analytics)

### Target Domains
Wealth management, investment portfolios, automated budget tracking, multi-card management.

### Color Palette & Design Tokens
```css
:root {
  --veritas-bg: #0A0F0D;
  --veritas-surface: #131A17;
  --veritas-mint: #2EE59D;
  --veritas-cyan: #00D2D3;
  --veritas-yellow: #FACC15;
  --veritas-coral: #F43F5E;
  --veritas-text: #ECFDF5;
  --veritas-text-muted: #6EE7B7;
}
```

### Key Architectural Patterns
* **Dual Mint Floating Cards**: Overlapping mint and cyan debit cards featuring realistic chip circuitry, contactless wave glyphs, and masked account identifiers.
* **Circular Quick Action Strip**: 4 rounded utility buttons on dark surface: "Send", "Receive", "Top Up", and "Freeze" with clear icon glyphs.
* **Spending Donut Chart with Category Breakdown**:
  * Multi-colored SVG donut chart with central monetary total (`$7,683.21`).
  * 6 distinct category segments: Transport (Mint), Food (Yellow), Travel (Coral), Health (Pink), Clothes (Sky Blue), Investments (Cyan).
  * Time filter tabs: "Week", "Month", "Year".
  * Merchant transaction list with authentic brand avatars (Starbucks, DKNY, Dior).

---

## Progressive Loading Rule

When an agent is requested to design an interface in one of these 7 domains:
1. Load this reference module (`references/specialized-archetypes.md`).
2. Extract the relevant color tokens and typographic scales.
3. Structure components following the exact layout and interaction rules documented above.
4. Ensure full WCAG 2.2 AA contrast compliance on all active text and interactive controls.
