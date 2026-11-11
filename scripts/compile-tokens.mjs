import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const examplesDir = path.join(rootDir, 'examples');

const tokensRaw = fs.readFileSync(path.join(examplesDir, 'tokens.json'), 'utf8');
const tokens = JSON.parse(tokensRaw);

console.log('\n========================================');
console.log('ORQIVA Multi-Framework Token Compiler');
console.log('========================================\n');

// 1. Compile to TypeScript / React Native: examples/tokens.ts
const tsContent = `/**
 * ORQIVA Design Tokens : TypeScript / React Native Definition
 * Generated automatically from examples/tokens.json. Do not edit manually.
 */

export const tokens = ${JSON.stringify(tokens, null, 2)} as const;

export type OrqivaTokens = typeof tokens;
`;
fs.writeFileSync(path.join(examplesDir, 'tokens.ts'), tsContent);
console.log('  ✓ Compiled: examples/tokens.ts');

// 2. Compile to Android Jetpack Compose: examples/DesignTokens.kt
const kotlinContent = `package com.orqiva.designsystem.theme

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * ORQIVA Design Tokens : Android Jetpack Compose
 * Generated automatically from examples/tokens.json. Do not edit manually.
 */
object OrqivaDesignTokens {
    object SpatialGrid {
        val base = ${tokens.spatialGrid.base}.dp
        val space1 = ${tokens.spatialGrid.scale['space-1']}.dp
        val space2 = ${tokens.spatialGrid.scale['space-2']}.dp
        val space3 = ${tokens.spatialGrid.scale['space-3']}.dp
        val space4 = ${tokens.spatialGrid.scale['space-4']}.dp
        val space5 = ${tokens.spatialGrid.scale['space-5']}.dp
        val space6 = ${tokens.spatialGrid.scale['space-6']}.dp
        val space8 = ${tokens.spatialGrid.scale['space-8']}.dp
        val space12 = ${tokens.spatialGrid.scale['space-12']}.dp
        val space16 = ${tokens.spatialGrid.scale['space-16']}.dp
    }

    object DarkColors {
        val bgCanvas = Color(0xFF09090B)
        val bgSurface = Color(0xFF121215)
        val bgSurfaceRaised = Color(0xFF1C1C21)
        val fgPrimary = Color(0xFFFAFAFA)
        val fgSecondary = Color(0xFFA1A1AA)
        val accentDefault = Color(0xFF38BDF8)
        val statusSuccess = Color(0xFF4ADE80)
        val statusWarning = Color(0xFFFBBF24)
        val statusDanger = Color(0xFFF87171)
    }

    object LightColors {
        val bgCanvas = Color(0xFFFAFAFA)
        val bgSurface = Color(0xFFFFFFFF)
        val bgSurfaceRaised = Color(0xFFF4F4F5)
        val fgPrimary = Color(0xFF09090B)
        val fgSecondary = Color(0xFF52525B)
        val accentDefault = Color(0xFF0284C7)
        val statusSuccess = Color(0xFF15803D)
        val statusWarning = Color(0xFFB45309)
        val statusDanger = Color(0xFFB91C1C)
    }
}
`;
fs.writeFileSync(path.join(examplesDir, 'DesignTokens.kt'), kotlinContent);
console.log('  ✓ Compiled: examples/DesignTokens.kt');

// 3. Compile to Flutter Dart: examples/app_theme.dart
const dartContent = `import 'package:flutter/material.dart';

/**
 * ORQIVA Design Tokens : Flutter ThemeData & ThemeExtension
 * Generated automatically from examples/tokens.json. Do not edit manually.
 */
class OrqivaColors extends ThemeExtension<OrqivaColors> {
  final Color bgCanvas;
  final Color bgSurface;
  final Color fgPrimary;
  final Color fgSecondary;
  final Color accent;
  final Color statusSuccess;
  final Color statusWarning;
  final Color statusDanger;

  const OrqivaColors({
    required this.bgCanvas,
    required this.bgSurface,
    required this.fgPrimary,
    required this.fgSecondary,
    required this.accent,
    required this.statusSuccess,
    required this.statusWarning,
    required this.statusDanger,
  });

  static const dark = OrqivaColors(
    bgCanvas: Color(0xFF09090B),
    bgSurface: Color(0xFF121215),
    fgPrimary: Color(0xFFFAFAFA),
    fgSecondary: Color(0xFFA1A1AA),
    accent: Color(0xFF38BDF8),
    statusSuccess: Color(0xFF4ADE80),
    statusWarning: Color(0xFFFBBF24),
    statusDanger: Color(0xFFF87171),
  );

  static const light = OrqivaColors(
    bgCanvas: Color(0xFFFAFAFA),
    bgSurface: Color(0xFFFFFFFF),
    fgPrimary: Color(0xFF09090B),
    fgSecondary: Color(0xFF52525B),
    accent: Color(0xFF0284C7),
    statusSuccess: Color(0xFF15803D),
    statusWarning: Color(0xFFB45309),
    statusDanger: Color(0xFFB91C1C),
  );

  @override
  OrqivaColors copyWith({
    Color? bgCanvas,
    Color? bgSurface,
    Color? fgPrimary,
    Color? fgSecondary,
    Color? accent,
    Color? statusSuccess,
    Color? statusWarning,
    Color? statusDanger,
  }) {
    return OrqivaColors(
      bgCanvas: bgCanvas ?? this.bgCanvas,
      bgSurface: bgSurface ?? this.bgSurface,
      fgPrimary: fgPrimary ?? this.fgPrimary,
      fgSecondary: fgSecondary ?? this.fgSecondary,
      accent: accent ?? this.accent,
      statusSuccess: statusSuccess ?? this.statusSuccess,
      statusWarning: statusWarning ?? this.statusWarning,
      statusDanger: statusDanger ?? this.statusDanger,
    );
  }

  @override
  OrqivaColors lerp(ThemeExtension<OrqivaColors>? other, double t) {
    if (other is! OrqivaColors) return this;
    return OrqivaColors(
      bgCanvas: Color.lerp(bgCanvas, other.bgCanvas, t)!,
      bgSurface: Color.lerp(bgSurface, other.bgSurface, t)!,
      fgPrimary: Color.lerp(fgPrimary, other.fgPrimary, t)!,
      fgSecondary: Color.lerp(fgSecondary, other.fgSecondary, t)!,
      accent: Color.lerp(accent, other.accent, t)!,
      statusSuccess: Color.lerp(statusSuccess, other.statusSuccess, t)!,
      statusWarning: Color.lerp(statusWarning, other.statusWarning, t)!,
      statusDanger: Color.lerp(statusDanger, other.statusDanger, t)!,
    );
  }
}
`;
fs.writeFileSync(path.join(examplesDir, 'app_theme.dart'), dartContent);
console.log('  ✓ Compiled: examples/app_theme.dart');

console.log('\nAll tokens compiled to multi-framework targets successfully!\n');
