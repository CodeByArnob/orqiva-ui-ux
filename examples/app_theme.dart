import 'package:flutter/material.dart';

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
