/**
 * ORQIVA Design Tokens : TypeScript / React Native Definition
 * Generated automatically from examples/tokens.json. Do not edit manually.
 */

export const tokens = {
  "$schema": "https://orqiva.design/schema/tokens.json",
  "version": "1.0.0",
  "name": "ORQIVA Adaptive Design Tokens",
  "spatialGrid": {
    "base": 4,
    "scale": {
      "space-1": 4,
      "space-2": 8,
      "space-3": 12,
      "space-4": 16,
      "space-5": 20,
      "space-6": 24,
      "space-8": 32,
      "space-10": 40,
      "space-12": 48,
      "space-16": 64
    }
  },
  "typography": {
    "fontSans": [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "sans-serif"
    ],
    "fontMono": [
      "JetBrains Mono",
      "Fira Code",
      "monospace"
    ],
    "scale": {
      "xs": {
        "size": "12px",
        "lineHeight": "16px"
      },
      "sm": {
        "size": "14px",
        "lineHeight": "20px"
      },
      "base": {
        "size": "16px",
        "lineHeight": "24px"
      },
      "lg": {
        "size": "18px",
        "lineHeight": "28px"
      },
      "xl": {
        "size": "20px",
        "lineHeight": "28px"
      },
      "2xl": {
        "size": "24px",
        "lineHeight": "32px"
      },
      "3xl": {
        "size": "30px",
        "lineHeight": "36px"
      },
      "4xl": {
        "size": "36px",
        "lineHeight": "44px"
      }
    }
  },
  "radii": {
    "xs": "2px",
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "full": "9999px"
  },
  "color": {
    "light": {
      "bgCanvas": "#FAFAFA",
      "bgSurface": "#FFFFFF",
      "bgSurfaceRaised": "#F4F4F5",
      "borderSubtle": "#E4E4E7",
      "borderDefault": "#D4D4D8",
      "fgPrimary": "#09090B",
      "fgSecondary": "#52525B",
      "fgMuted": "#71717A",
      "accentDefault": "#0284C7",
      "accentHover": "#0369A1",
      "accentSubtle": "#E0F2FE",
      "statusSuccess": "#15803D",
      "statusWarning": "#B45309",
      "statusDanger": "#B91C1C"
    },
    "dark": {
      "bgCanvas": "#09090B",
      "bgSurface": "#121215",
      "bgSurfaceRaised": "#1C1C21",
      "borderSubtle": "#27272A",
      "borderDefault": "#3F3F46",
      "fgPrimary": "#FAFAFA",
      "fgSecondary": "#A1A1AA",
      "fgMuted": "#71717A",
      "accentDefault": "#38BDF8",
      "accentHover": "#7DD3FC",
      "accentSubtle": "#082F49",
      "statusSuccess": "#4ADE80",
      "statusWarning": "#FBBF24",
      "statusDanger": "#F87171"
    }
  }
} as const;

export type OrqivaTokens = typeof tokens;
