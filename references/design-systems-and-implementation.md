# Design Systems & Multi-Framework Implementation

A design system is only as good as its implementation in real code. ORQIVA provides concrete mapping strategies from abstract tokens to production frameworks: React/Tailwind, Flutter, Jetpack Compose, and React Native.

---

## 1. Token Translation Architecture

Tokens originate in a platform-agnostic specification (JSON or CSS variables) and compile to target languages:

```
                  +---------------------------+
                  | Platform-Agnostic Tokens  |
                  |  (JSON / CSS Variables)   |
                  +-------------+-------------+
                                |
        +-----------+-----------+-----------+-----------+
        |           |                       |           |
        v           v                       v           v
   Web / React   Tailwind CSS            Flutter     Jetpack Compose
   (CSS Vars)   (tailwind.config.js)   (ThemeData)   (Material3 ColorScheme)
```

---

## 2. Framework-Specific Implementations

### A. Web / React with Tailwind CSS

Map custom CSS custom properties to Tailwind utility classes in `tailwind.config.js`:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-bg-canvas)',
        surface: {
          DEFAULT: 'var(--color-bg-surface)',
          raised: 'var(--color-bg-surface-raised)',
          subtle: 'var(--color-bg-surface-subtle)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          DEFAULT: 'var(--color-border-default)',
          strong: 'var(--color-border-strong)',
        },
        primary: {
          DEFAULT: 'var(--color-fg-primary)',
          secondary: 'var(--color-fg-secondary)',
          muted: 'var(--color-fg-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent-default)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
};
```

### B. Flutter (Dart)

Map design tokens cleanly to Flutter's `ThemeExtension` or `ThemeData`:

```dart
// app_theme.dart
import 'package:flutter/material.dart';

@immutable
class AppColors extends ThemeExtension<AppColors> {
  final Color bgCanvas;
  final Color bgSurface;
  final Color fgPrimary;
  final Color accent;

  const AppColors({
    required this.bgCanvas,
    required this.bgSurface,
    required this.fgPrimary,
    required this.accent,
  });

  @override
  AppColors copyWith({Color? bgCanvas, Color? bgSurface, Color? fgPrimary, Color? accent}) {
    return AppColors(
      bgCanvas: bgCanvas ?? this.bgCanvas,
      bgSurface: bgSurface ?? this.bgSurface,
      fgPrimary: fgPrimary ?? this.fgPrimary,
      accent: accent ?? this.accent,
    );
  }

  @override
  AppColors lerp(ThemeExtension<AppColors>? other, double t) {
    if (other is! AppColors) return this;
    return AppColors(
      bgCanvas: Color.lerp(bgCanvas, other.bgCanvas, t)!,
      bgSurface: Color.lerp(bgSurface, other.bgSurface, t)!,
      fgPrimary: Color.lerp(fgPrimary, other.fgPrimary, t)!,
      accent: Color.lerp(accent, other.accent, t)!,
    );
  }
}
```

### C. Android Jetpack Compose (Kotlin)

Use Compose's `MaterialTheme` with custom color schemes and typography:

```kotlin
// Theme.kt
package com.orqiva.designsystem.theme

import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = Color(0xFF38BDF8),
    onPrimary = Color(0xFF09090B),
    surface = Color(0xFF18181B),
    onSurface = Color(0xFFFAFAFA),
    background = Color(0xFF09090B),
    onBackground = Color(0xFFFAFAFA)
)

private val LightColorScheme = lightColorScheme(
    primary = Color(0xFF0284C7),
    onPrimary = Color(0xFFFFFFFF),
    surface = Color(0xFFFFFFFF),
    onSurface = Color(0xFF09090B),
    background = Color(0xFFFAFAFA),
    onBackground = Color(0xFF09090B)
)

@Composable
fun OrqivaTheme(
    darkTheme: Boolean = androidx.compose.foundation.isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme
    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
```

### D. React Native

Use StyleSheet or styled components with a typed theme provider:

```typescript
// theme.ts
export const tokens = {
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  radii: { sm: 4, md: 8, lg: 12, full: 9999 },
  colors: {
    dark: {
      canvas: '#09090B',
      surface: '#18181B',
      text: '#FAFAFA',
      accent: '#38BDF8',
      border: '#27272A',
    },
    light: {
      canvas: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#09090B',
      accent: '#0284C7',
      border: '#E4E4E7',
    },
  },
} as const;
```

---

## 3. Component Architecture Rules

1. **Atomic Composition**: Build primitives (`Button`, `Badge`, `Input`, `Avatar`) with zero domain logic. Compose them into domain widgets (`UserCard`, `TransferDrawer`, `LogStreamer`).
2. **Prop Interfaces**: Keep variant props strict and semantic:
   - `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'`
   - `size`: `'sm' | 'md' | 'lg'`
   - `isLoading`: boolean (renders inline spinner / disables click)
3. **Ref Forwarding & Accessibility**:
   - Always forward refs in web components (`React.forwardRef`).
   - Associate inputs with labels (`htmlFor` matching input `id`).
   - Expose ARIA attributes (`aria-expanded`, `aria-controls`, `aria-invalid`).
