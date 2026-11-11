# Quality Checklist: Mobile UI & Ergonomics

Verify these mobile-first requirements across iOS, Android, and mobile web:

- [ ] **Touch Target Sizing**: All interactive touch targets are at least 48×48px (Web/Android) or 44×44pt (iOS), with at least 8px spacing between adjacent targets.
- [ ] **Thumb Zone Positioning**: Primary conversion and action buttons are anchored within the lower 40% of the screen (the natural thumb reach area).
- [ ] **Safe Area Compliance**: Layouts respect device hardware cutouts (notch, dynamic island, pill home indicator) using safe-area insets (`env(safe-area-inset-bottom)` / `SafeArea`).
- [ ] **Bottom Sheet vs Modal**: Complex actions or selectors on mobile render as bottom-anchored sheets with swipe-down handles rather than centered desktop modals.
- [ ] **Sticky CTAs**: Checkout, submit, or transfer buttons remain sticky at the bottom of the viewport with safe-area padding.
- [ ] **Form Input Auto-Zoom Prevention**: Input font size on mobile web is at least 16px to prevent iOS Safari from automatically zooming into the field.
- [ ] **Virtual Keyboard Ergonomics**: Forms do not get obscured behind the software keyboard; active fields automatically scroll into view.
- [ ] **Touch Feedback**: Taps on buttons and list items provide immediate visual feedback (ripple effect, background highlight, or opacity change).
- [ ] **No Unintentional Gestures**: Horizontal swipe gestures do not conflict with the operating system's edge-swipe back navigation.
- [ ] **Haptic Feedback**: Meaningful tactile feedback is provided for success/failure transitions on supported native platforms.
