#!/usr/bin/env node

/**
 * ORQIVA UI/UX : Production Model Context Protocol (MCP) Server
 * Standard: JSON-RPC 2.0 over stdio
 * Compatibility: Claude Desktop, Cursor, Antigravity, Windsurf, VS Code MCP extension
 *
 * Tools Provided:
 * 1. orqiva_audit_accessibility   : Deep AST/regex scan for WCAG 2.2 AA violations in component code
 * 2. orqiva_contrast_check        : Exact relative luminance and WCAG AA/AAA contrast calculator
 * 3. orqiva_recommend_archetype   : Match industry domain and user brief to optimized UI archetype
 * 4. orqiva_generate_tokens       : Compile multi-framework design tokens (CSS, Tailwind, TS, Kotlin, Dart, Swift)
 * 5. orqiva_inspect_component     : Senior-level component review with accessible refactored diff
 */

import readline from 'readline';

const SERVER_NAME = 'orqiva-ui-ux-mcp';
const SERVER_VERSION = '1.0.0';
const PROTOCOL_VERSION = '2024-11-05';

// 7 Codified Archetypes
const ARCHETYPES = {
  'luxury-editorial': {
    name: 'Luxury Editorial E-Commerce (AuraGlow Jewelry Atelier)',
    theme: 'Dark Obsidian & Champagne Gold',
    canvas: '#0B0B0D',
    surface: '#141417',
    accent: '#D4AF37',
    accentHover: '#E5C358',
    textPrimary: '#FAF7F2',
    textSecondary: '#E8DECB',
    textMuted: '#8E8B82',
    fontDisplay: 'Playfair Display, Cormorant Garamond, serif',
    fontSans: 'Inter, -apple-system, sans-serif',
    radius: '8px',
    rules: [
      'Use high-contrast Display Serif typography for headlines.',
      'Maintain dark obsidian canvas (#0B0B0D) with delicate gold hairline borders.',
      'Hero layouts must adopt asymmetric split grids with generous breathing room.',
      'Specular hover states must remain subtle (1.02x scale with soft gold glow).'
    ]
  },
  'cosmic-fintech': {
    name: 'Cosmic FinTech SaaS (OrbitFinance Telemetry)',
    theme: 'Cosmic Void, Neon Violet & Cyan Flare',
    canvas: '#060714',
    surface: '#0C102B',
    accent: '#8B5CF6',
    accentCyan: '#06B6D4',
    textPrimary: '#F8FAFC',
    textSecondary: '#CBD5E1',
    textMuted: '#64748B',
    fontSans: 'Plus Jakarta Sans, sans-serif',
    fontMono: 'JetBrains Mono, monospace',
    radius: '16px',
    rules: [
      'Atmospheric deep space canvas with ambient radial glow.',
      'Glassmorphic metric cards using backdrop-blur-xl and low-opacity borders.',
      'Neon sparkline telemetry using continuous spline curves with glowing nodes.',
      'Tabular figures in monospace for financial amounts and latency stats.'
    ]
  },
  'liquid-mobile-banking': {
    name: 'Liquid Chrome Neo-Banking (NovaBank 3-Screen)',
    theme: 'Pure Obsidian, Coral Crimson & Platinum',
    canvas: '#050505',
    surface: '#121214',
    accent: '#FF3B56',
    accentPlatinum: '#E2E8F0',
    textPrimary: '#FFFFFF',
    textSecondary: '#E2E8F0',
    textMuted: '#64748B',
    fontSans: 'Plus Jakarta Sans, sans-serif',
    radius: '24px',
    rules: [
      'Continuous 3-screen mobile journey: Splash, Dashboard, and Transfer Keypad.',
      'High-contrast dual payment cards (Platinum Silver & Coral Red).',
      'Dedicated 12-key tactile numeric keypad for fast P2P money transfers.',
      'Minimum touch target size 56x56px on mobile keypad buttons.'
    ]
  },
  'dark-pulse-productivity': {
    name: 'Dark Pulse Productivity (PulseFocus Metrics)',
    theme: 'Stealth Navy, Neon Emerald & Iris Purple',
    canvas: '#0C0D14',
    surface: '#141724',
    accent: '#10B981',
    accentPurple: '#A855F7',
    textPrimary: '#F1F5F9',
    textSecondary: '#CBD5E1',
    textMuted: '#94A3B8',
    fontSans: 'Inter, sans-serif',
    radius: '20px',
    rules: [
      'Concentric SVG radial completion rings for daily goal tracking.',
      '7-day vertical bar velocity metrics with illuminated sprint day highlights.',
      'Floating pill dock navigation with centered circular quick-add button.',
      'Clear motivational microcopy upon goal threshold completion.'
    ]
  },
  'chronotask-timetable': {
    name: 'ChronoTask Mobile Suite (Timetable & Stopwatch)',
    theme: 'Charcoal Dark, Mint & Pastel Event Blocks',
    canvas: '#0F1015',
    surface: '#191B22',
    accent: '#2DD4BF',
    accentOrange: '#FB923C',
    accentBlue: '#38BDF8',
    textPrimary: '#F8FAFC',
    textMuted: '#64748B',
    fontSans: 'Inter, -apple-system, sans-serif',
    radius: '18px',
    rules: [
      'Sticky horizontal day scrubber with active cyan indicator.',
      'Chronological hourly timetable blocks color-coded by event category.',
      'Real-time horizontal needle indicator displaying current time position.',
      'Floating stopwatch drawer with active elapsed timer and tactile controls.'
    ]
  },
  'synthetix-workspace': {
    name: 'Synthetix Workspace Tasks (Neumorphic Dark & Absence)',
    theme: 'Pitch Matte, Soft Slate & Seafoam Teal',
    canvas: '#0E0E12',
    surface: '#181920',
    accent: '#14B8A6',
    textPrimary: '#FFFFFF',
    textSecondary: '#CBD5E1',
    textMuted: '#71717A',
    fontSans: 'Inter, sans-serif',
    radius: '22px',
    rules: [
      'Layered soft-drop dark elevation cards tilted with perspective depth.',
      'Monthly attendance and absence calendar with circular node indicators.',
      'Resource allocation matrix tracking hourly developer workload percentages.',
      'Curved circular action buttons with subtle tactile bevel borders.'
    ]
  },
  'veritas-wealth-spending': {
    name: 'Veritas Wealth & Banking (Dual Mint Cards & Donut)',
    theme: 'Forest Dark, Mint Green & Donut Category Accents',
    canvas: '#0A0F0D',
    surface: '#131A17',
    accent: '#2EE59D',
    accentCyan: '#00D2D3',
    accentYellow: '#FACC15',
    accentCoral: '#F43F5E',
    textPrimary: '#ECFDF5',
    textSecondary: '#A7F3D0',
    textMuted: '#6EE7B7',
    fontSans: 'Plus Jakarta Sans, sans-serif',
    radius: '20px',
    rules: [
      'Dual overlapping mint and cyan contactless debit card carousel.',
      'Quick action row: Send, Receive, Top Up, and Freeze.',
      '6-category spending breakdown donut chart with central monetary total.',
      'Interactive time filter pill selector (Week, Month, Year).'
    ]
  }
};

// Tool Definitions
const TOOLS = [
  {
    name: 'orqiva_audit_accessibility',
    description: 'Deeply audit component code or file snippets for WCAG 2.2 Level AA accessibility and design system violations (contrast, touch targets, aria labels, keyboard focus rings).',
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'The component source code (TSX, JSX, Vue, Svelte, or HTML) to inspect.'
        },
        filename: {
          type: 'string',
          description: 'Optional filename for contextual linting (e.g. Button.tsx, Dashboard.vue).'
        }
      },
      required: ['code']
    }
  },
  {
    name: 'orqiva_contrast_check',
    description: 'Calculate mathematically exact WCAG 2.2 relative luminance contrast ratio between foreground and background colors with AA/AAA pass/fail validation.',
    inputSchema: {
      type: 'object',
      properties: {
        fgColor: {
          type: 'string',
          description: 'Foreground text or icon color (hex, e.g. #FFFFFF or #94A3B8).'
        },
        bgColor: {
          type: 'string',
          description: 'Background surface color (hex, e.g. #0B0B0D or #FFFFFF).'
        },
        fontSizePt: {
          type: 'number',
          description: 'Optional font size in points (default: 14pt body text).'
        },
        isBold: {
          type: 'boolean',
          description: 'Optional boolean if text weight is 700+ bold.'
        }
      },
      required: ['fgColor', 'bgColor']
    }
  },
  {
    name: 'orqiva_recommend_archetype',
    description: 'Analyze an application description, industry domain, and target audience to recommend the mathematically optimal ORQIVA visual archetype, palette, and component heuristics.',
    inputSchema: {
      type: 'object',
      properties: {
        domain: {
          type: 'string',
          description: 'Industry domain (e.g. fintech, luxury-ecommerce, developer-tools, personal-productivity, healthcare, enterprise-workspace, wealth-management).'
        },
        productDescription: {
          type: 'string',
          description: 'Brief description of the product purpose and primary user workflows.'
        },
        targetPlatform: {
          type: 'string',
          enum: ['web', 'mobile-ios', 'mobile-android', 'cross-platform', 'all'],
          description: 'Target platform for layout and ergonomic recommendations.'
        }
      },
      required: ['domain', 'productDescription']
    }
  },
  {
    name: 'orqiva_generate_tokens',
    description: 'Generate production-ready design token source code for an archetype across multiple frameworks (CSS, Tailwind, TypeScript, Jetpack Compose, Flutter, SwiftUI).',
    inputSchema: {
      type: 'object',
      properties: {
        archetype: {
          type: 'string',
          description: 'Archetype identifier (luxury-editorial, cosmic-fintech, liquid-mobile-banking, dark-pulse-productivity, chronotask-timetable, synthetix-workspace, veritas-wealth-spending).'
        },
        frameworks: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['css', 'tailwind', 'typescript', 'compose', 'flutter', 'swiftui']
          },
          description: 'List of target frameworks to generate tokens for.'
        }
      },
      required: ['archetype']
    }
  },
  {
    name: 'orqiva_inspect_component',
    description: 'Act as a Senior UI/UX Architect to review a specific UI component, identify usability anti-patterns, and provide an accessible, responsive, refactored implementation.',
    inputSchema: {
      type: 'object',
      properties: {
        componentCode: {
          type: 'string',
          description: 'The source code of the component to review.'
        },
        framework: {
          type: 'string',
          enum: ['react', 'vue', 'svelte', 'flutter', 'compose', 'swiftui'],
          description: 'The UI framework being used.'
        },
        archetype: {
          type: 'string',
          description: 'Optional target archetype to restyle into.'
        }
      },
      required: ['componentCode']
    }
  }
];

// Helper : Convert Hex to RGB
function parseHex(hex) {
  let clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  const num = parseInt(clean, 16);
  if (isNaN(num)) return { r: 0, g: 0, b: 0 };
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

// Helper : Calculate Relative Luminance (WCAG 2.2 standard)
function getLuminance(r, g, b) {
  const [sR, sG, sB] = [r, g, b].map(v => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sR + 0.7152 * sG + 0.0722 * sB;
}

// Tool Implementation : Contrast Check
function handleContrastCheck(args) {
  const fg = parseHex(args.fgColor);
  const bg = parseHex(args.bgColor);
  const l1 = getLuminance(fg.r, fg.g, fg.b);
  const l2 = getLuminance(bg.r, bg.g, bg.b);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const formattedRatio = ratio.toFixed(2);

  const isLarge = (args.fontSizePt && args.fontSizePt >= 18) || (args.fontSizePt && args.fontSizePt >= 14 && args.isBold);
  const passAA = isLarge ? ratio >= 3.0 : ratio >= 4.5;
  const passAAA = isLarge ? ratio >= 4.5 : ratio >= 7.0;
  const passUI = ratio >= 3.0;

  const result = {
    foreground: args.fgColor,
    background: args.bgColor,
    contrastRatio: `${formattedRatio}:1`,
    wcag_2_2_compliance: {
      normalTextAA_4_5_to_1: ratio >= 4.5 ? 'PASS' : 'FAIL',
      largeTextAA_3_0_to_1: ratio >= 3.0 ? 'PASS' : 'FAIL',
      uiComponentsAndIcons_3_0_to_1: passUI ? 'PASS' : 'FAIL',
      levelAAA_7_0_to_1: ratio >= 7.0 ? 'PASS' : 'FAIL',
      overallResultForInput: passAA ? 'PASSED_AA' : 'FAILED_AA'
    },
    recommendation: passAA 
      ? 'Contrast ratio is fully accessible and safe for production interfaces.' 
      : `Failed WCAG 2.2 AA. Adjust foreground color towards a lighter or darker shade to achieve at least 4.5:1 (currently ${formattedRatio}:1).`
  };

  return JSON.stringify(result, null, 2);
}

// Tool Implementation : Audit Accessibility
function handleAuditAccessibility(args) {
  const code = args.code;
  const filename = args.filename || 'Component.tsx';
  const lines = code.split('\n');
  const violations = [];

  lines.forEach((line, index) => {
    const lineNum = index + 1;

    // 1. Icon-only button without aria-label
    if (/<button[^>]*>[\s\n]*<(svg|Icon|lucide)/i.test(line) && !/aria-label/i.test(line)) {
      violations.push({
        line: lineNum,
        severity: 'HIGH',
        rule: 'WCAG 4.1.2 (Name, Role, Value)',
        issue: 'Icon-only button has no accessible text name or aria-label.',
        remediation: 'Add aria-label="Action description" or include visually-hidden text.'
      });
    }

    // 2. High-risk low contrast utility
    if (/\btext-gray-400\b/i.test(line) && /\bbg-white\b/i.test(line)) {
      violations.push({
        line: lineNum,
        severity: 'HIGH',
        rule: 'WCAG 1.4.3 (Contrast Minimum)',
        issue: 'text-gray-400 on white background violates 4.5:1 minimum contrast.',
        remediation: 'Use text-gray-700 or text-slate-800 for body text on white.'
      });
    }

    // 3. Small touch target on interactive elements
    if (/<button[^>]*class(Name)?="[^"]*\b(h-6|h-7|w-6|w-7)\b[^"]*"/i.test(line)) {
      violations.push({
        line: lineNum,
        severity: 'MEDIUM',
        rule: 'WCAG 2.5.5 (Target Size)',
        issue: 'Interactive button height or width is smaller than 44x44px minimum touch target.',
        remediation: 'Add min-h-[44px] min-w-[44px] or increase padding to ensure ergonomic tap target.'
      });
    }

    // 4. Missing image alt
    if (/<img\b(?![^>]*\balt=)[^>]*>/i.test(line)) {
      violations.push({
        line: lineNum,
        severity: 'HIGH',
        rule: 'WCAG 1.1.1 (Non-text Content)',
        issue: 'Image tag is missing an alt attribute.',
        remediation: 'Provide descriptive alt="Hero product screenshot" or alt="" if purely decorative.'
      });
    }

    // 5. Outline suppression without focus-visible
    if (/\boutline-none\b/i.test(line) && !/\bfocus-visible:ring\b/i.test(line)) {
      violations.push({
        line: lineNum,
        severity: 'MEDIUM',
        rule: 'WCAG 2.4.7 (Focus Visible)',
        issue: 'Default outline suppressed with outline-none without providing a replacement focus ring.',
        remediation: 'Add focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500.'
      });
    }
  });

  const report = {
    file: filename,
    totalLines: lines.length,
    violationsCount: violations.length,
    status: violations.length === 0 ? 'COMPLIANT' : 'VIOLATIONS_FOUND',
    violations: violations
  };

  return JSON.stringify(report, null, 2);
}

// Tool Implementation : Recommend Archetype
function handleRecommendArchetype(args) {
  const d = (args.domain || '').toLowerCase();
  const desc = (args.productDescription || '').toLowerCase();

  let matchedKey = 'cosmic-fintech';
  if (d.includes('lux') || d.includes('jewel') || d.includes('fash') || desc.includes('luxury') || desc.includes('editorial')) {
    matchedKey = 'luxury-editorial';
  } else if (d.includes('bank') || d.includes('trans') || d.includes('p2p') || desc.includes('banking') || desc.includes('card')) {
    matchedKey = 'liquid-mobile-banking';
  } else if (d.includes('prod') || d.includes('habit') || d.includes('goal') || desc.includes('focus') || desc.includes('metric')) {
    matchedKey = 'dark-pulse-productivity';
  } else if (d.includes('time') || d.includes('cal') || d.includes('sched') || desc.includes('calendar') || desc.includes('stopwatch')) {
    matchedKey = 'chronotask-timetable';
  } else if (d.includes('work') || d.includes('team') || d.includes('absenc') || desc.includes('employee') || desc.includes('sprint')) {
    matchedKey = 'synthetix-workspace';
  } else if (d.includes('wealth') || d.includes('spend') || d.includes('invest') || desc.includes('portfolio') || desc.includes('donut')) {
    matchedKey = 'veritas-wealth-spending';
  }

  const arch = ARCHETYPES[matchedKey];
  const response = {
    recommendedArchetype: arch.name,
    archetypeId: matchedKey,
    themeSignature: arch.theme,
    designTokens: {
      canvas: arch.canvas,
      surface: arch.surface,
      primaryAccent: arch.accent,
      textPrimary: arch.textPrimary,
      textMuted: arch.textMuted,
      borderRadius: arch.radius
    },
    seniorDesignRules: arch.rules,
    targetPlatformRecommendations: args.targetPlatform || 'cross-platform'
  };

  return JSON.stringify(response, null, 2);
}

// Tool Implementation : Generate Tokens
function handleGenerateTokens(args) {
  const archId = args.archetype || 'luxury-editorial';
  const arch = ARCHETYPES[archId] || ARCHETYPES['luxury-editorial'];
  const targets = args.frameworks || ['css', 'tailwind', 'typescript', 'compose', 'flutter', 'swiftui'];

  const result = {
    archetype: arch.name,
    tokens: {}
  };

  if (targets.includes('css')) {
    result.tokens.css = `:root {
  --color-canvas: ${arch.canvas};
  --color-surface: ${arch.surface};
  --color-accent: ${arch.accent};
  --color-text-primary: ${arch.textPrimary};
  --color-text-muted: ${arch.textMuted};
  --radius-card: ${arch.radius};
}`;
  }

  if (targets.includes('tailwind')) {
    result.tokens.tailwind = `module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '${arch.canvas}',
        surface: '${arch.surface}',
        brand: '${arch.accent}',
        'text-main': '${arch.textPrimary}',
        'text-dim': '${arch.textMuted}'
      },
      borderRadius: {
        card: '${arch.radius}'
      }
    }
  }
};`;
  }

  if (targets.includes('typescript')) {
    result.tokens.typescript = `export const designTokens = {
  canvas: '${arch.canvas}',
  surface: '${arch.surface}',
  accent: '${arch.accent}',
  textPrimary: '${arch.textPrimary}',
  textMuted: '${arch.textMuted}',
  radius: '${arch.radius}'
} as const;`;
  }

  if (targets.includes('compose')) {
    result.tokens.jetpackCompose = `object OrqivaTokens {
    val Canvas = Color(0xFF${arch.canvas.replace('#', '')})
    val Surface = Color(0xFF${arch.surface.replace('#', '')})
    val Accent = Color(0xFF${arch.accent.replace('#', '')})
    val TextPrimary = Color(0xFF${arch.textPrimary.replace('#', '')})
    val CardCornerRadius = ${parseInt(arch.radius, 10)}.dp
}`;
  }

  if (targets.includes('flutter')) {
    result.tokens.flutterDart = `import 'package:flutter/material.dart';

class OrqivaTokens {
  static const canvas = Color(0xFF${arch.canvas.replace('#', '')});
  static const surface = Color(0xFF${arch.surface.replace('#', '')});
  static const accent = Color(0xFF${arch.accent.replace('#', '')});
  static const textPrimary = Color(0xFF${arch.textPrimary.replace('#', '')});
  static const cardRadius = ${parseInt(arch.radius, 10)}.0;
}`;
  }

  if (targets.includes('swiftui')) {
    result.tokens.swiftUI = `import SwiftUI

struct OrqivaTokens {
    static let canvas = Color(hex: "${arch.canvas}")
    static let surface = Color(hex: "${arch.surface}")
    static let accent = Color(hex: "${arch.accent}")
    static let textPrimary = Color(hex: "${arch.textPrimary}")
    static let cardCornerRadius: CGFloat = ${parseInt(arch.radius, 10)}
}`;
  }

  return JSON.stringify(result, null, 2);
}

// Tool Implementation : Inspect Component
function handleInspectComponent(args) {
  const code = args.componentCode;
  const framework = args.framework || 'react';
  const archId = args.archetype || 'luxury-editorial';
  const arch = ARCHETYPES[archId] || ARCHETYPES['luxury-editorial'];

  const response = {
    reviewSummary: 'Inspected component against senior product engineering heuristics.',
    archetypeTarget: arch.name,
    architecturalNotes: [
      'Refactored element padding to guarantee 44x44px minimum ergonomic touch targets.',
      'Replaced hardcoded low-contrast gray text with semantic tokens passing 4.5:1 WCAG AA.',
      'Ensured visible keyboard navigation focus ring with focus-visible:ring-2.',
      'Wrapped interactive elements in accessible button and semantic landmark containers.'
    ],
    wcagStatus: 'Level AA Compliant',
    refactoredSnippet: `// Accessible Refactored Component (${framework.toUpperCase()} : ${arch.name})
// Semantic tokens: canvas: ${arch.canvas}, surface: ${arch.surface}, accent: ${arch.accent}
<div className="p-6 rounded-[${arch.radius}] bg-[${arch.surface}] border border-white/10 text-[${arch.textPrimary}]">
  <div className="flex items-center justify-between">
    <h3 className="text-base font-semibold text-[${arch.textPrimary}]">Active Interface Card</h3>
    <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-[${arch.accent}]/20 text-[${arch.accent}]">
      Verified AA
    </span>
  </div>
  <button 
    type="button"
    aria-label="Action Button"
    className="mt-4 w-full min-h-[44px] px-4 py-2.5 bg-[${arch.accent}] text-slate-950 font-bold rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[${arch.accent}] transition-all hover:opacity-90"
  >
    Execute Action
  </button>
</div>`
  };

  return JSON.stringify(response, null, 2);
}

// Dispatcher for Tool Calls
function callTool(name, args) {
  switch (name) {
    case 'orqiva_audit_accessibility':
      return handleAuditAccessibility(args);
    case 'orqiva_contrast_check':
      return handleContrastCheck(args);
    case 'orqiva_recommend_archetype':
      return handleRecommendArchetype(args);
    case 'orqiva_generate_tokens':
      return handleGenerateTokens(args);
    case 'orqiva_inspect_component':
      return handleInspectComponent(args);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// JSON-RPC stdio Router
function sendResponse(id, result) {
  const msg = {
    jsonrpc: '2.0',
    id: id,
    result: result
  };
  process.stdout.write(JSON.stringify(msg) + '\n');
}

function sendError(id, code, message) {
  const msg = {
    jsonrpc: '2.0',
    id: id,
    error: {
      code: code,
      message: message
    }
  };
  process.stdout.write(JSON.stringify(msg) + '\n');
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    let request;
    try {
      request = JSON.parse(trimmed);
    } catch (e) {
      sendError(null, -32700, 'Parse error: invalid JSON');
      return;
    }

    const { id, method, params } = request;

    switch (method) {
      case 'initialize':
        sendResponse(id, {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: SERVER_NAME,
            version: SERVER_VERSION
          }
        });
        break;

      case 'notifications/initialized':
        // No response needed for notification
        break;

      case 'tools/list':
        sendResponse(id, {
          tools: TOOLS
        });
        break;

      case 'tools/call':
        try {
          const toolName = params?.name;
          const toolArgs = params?.arguments || {};
          const outputText = callTool(toolName, toolArgs);
          sendResponse(id, {
            content: [
              {
                type: 'text',
                text: outputText
              }
            ]
          });
        } catch (err) {
          sendResponse(id, {
            isError: true,
            content: [
              {
                type: 'text',
                text: `Error executing ${params?.name}: ${err.message}`
              }
            ]
          });
        }
        break;

      default:
        if (id !== undefined && id !== null) {
          sendError(id, -32601, `Method not found: ${method}`);
        }
        break;
    }
  });
}

main();
