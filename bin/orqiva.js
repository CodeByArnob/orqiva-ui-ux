#!/usr/bin/env node

/**
 * ORQIVA UI/UX CLI
 * Adaptive Design Intelligence and Token Initializer for AI Coding Agents and Production Interfaces.
 *
 * Usage:
 *   npx orqiva-ui-ux init       : Interactive design system and token setup wizard
 *   npx orqiva-ui-ux install    : Install ORQIVA skill into Cursor, Claude, Windsurf, or Antigravity
 *   npx orqiva-ui-ux audit      : Audit project code for accessibility and contrast anti-patterns
 *   npx orqiva-ui-ux tokens     : Export tokens to CSS, Tailwind, TypeScript, Flutter, or Compose
 *   npx orqiva-ui-ux showcase   : View design archetypes and architectural specs
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const VERSION = '1.0.0';

// ANSI Colors
const isColor = process.stdout.isTTY && !process.env.NO_COLOR;
const color = {
  reset: isColor ? '\x1b[0m' : '',
  bold: isColor ? '\x1b[1m' : '',
  dim: isColor ? '\x1b[2m' : '',
  cyan: isColor ? '\x1b[36m' : '',
  green: isColor ? '\x1b[32m' : '',
  yellow: isColor ? '\x1b[33m' : '',
  blue: isColor ? '\x1b[34m' : '',
  magenta: isColor ? '\x1b[35m' : '',
  red: isColor ? '\x1b[31m' : '',
  gold: isColor ? '\x1b[38;5;220m' : '',
};

function banner() {
  console.log(`
${color.cyan}${color.bold}  ___  ____   ___  _____     ___     _   _ ___   _   _ __  __
 / _ \\|  _ \\ / _ \\|_ _\\ \\   / / \\   | | | |_ _| | | | |\\ \\/ /
| | | | |_) | | | || | \\ \\ / / _ \\  | | | || |  | | | | \\  / 
| |_| |  _ <| |_| || |  \\ V / ___ \\ | |_| || |  | |_| | /  \\ 
 \\___/|_| \\_\\\\__\\_\\___|  \\_/_/   \\_\\ \\___/|___|  \\___/ /_/\\_\\${color.reset}
  ${color.dim}Adaptive UI/UX Design Intelligence : v${VERSION}${color.reset}
  ${color.dim}https://github.com/CodeByArnob/orqiva-ui-ux${color.reset}
`);
}

function promptUser(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.trim());
    });
  });
}

// 7 Archetype Token Presets
const ARCHETYPES = {
  'luxury-editorial': {
    name: 'Luxury Editorial E-Commerce (AuraGlow Jewelry Atelier)',
    theme: 'Dark Obsidian & Champagne Gold',
    css: `:root {
  --color-bg-canvas: #0B0B0D;
  --color-bg-surface: #141417;
  --color-bg-surface-raised: #1C1C21;
  --color-text-primary: #FAF7F2;
  --color-text-secondary: #E8DECB;
  --color-text-muted: #8E8B82;
  --color-accent: #D4AF37;
  --color-accent-hover: #E5C358;
  --color-accent-glow: rgba(212, 175, 55, 0.18);
  --color-border: rgba(212, 175, 55, 0.22);
  --font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-card: 8px;
  --radius-pill: 9999px;
}`,
    tailwind: {
      colors: {
        canvas: '#0B0B0D',
        surface: {
          DEFAULT: '#141417',
          raised: '#1C1C21',
        },
        gold: {
          DEFAULT: '#D4AF37',
          hover: '#E5C358',
          muted: '#8E8B82',
        },
        champagne: '#E8DECB',
        silk: '#FAF7F2',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  'cosmic-fintech': {
    name: 'Cosmic FinTech SaaS (OrbitFinance Telemetry)',
    theme: 'Cosmic Void, Neon Violet & Cyan Flare',
    css: `:root {
  --color-bg-canvas: #060714;
  --color-bg-surface: #0C102B;
  --color-bg-surface-glass: rgba(12, 16, 43, 0.7);
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #CBD5E1;
  --color-text-muted: #64748B;
  --color-accent: #8B5CF6;
  --color-accent-cyan: #06B6D4;
  --color-border: rgba(139, 92, 246, 0.2);
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-card: 16px;
  --shadow-neon: 0 0 24px rgba(139, 92, 246, 0.35);
}`,
    tailwind: {
      colors: {
        canvas: '#060714',
        surface: {
          DEFAULT: '#0C102B',
          glass: 'rgba(12, 16, 43, 0.7)',
        },
        neon: {
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        },
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  'liquid-mobile-banking': {
    name: 'Liquid Chrome Neo-Banking (NovaBank 3-Screen)',
    theme: 'Pure Obsidian, Coral Crimson & Platinum',
    css: `:root {
  --color-bg-canvas: #050505;
  --color-bg-surface: #121214;
  --color-bg-surface-raised: #1C1C20;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #E2E8F0;
  --color-text-muted: #64748B;
  --color-accent-coral: #FF3B56;
  --color-accent-platinum: #E2E8F0;
  --color-border: rgba(255, 255, 255, 0.1);
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --radius-card: 24px;
}`,
    tailwind: {
      colors: {
        canvas: '#050505',
        surface: '#121214',
        coral: '#FF3B56',
        platinum: '#E2E8F0',
      },
      borderRadius: {
        card: '24px',
      },
    },
  },
  'dark-pulse-productivity': {
    name: 'Dark Pulse Productivity (PulseFocus Metrics)',
    theme: 'Stealth Navy, Neon Emerald & Iris Purple',
    css: `:root {
  --color-bg-canvas: #0C0D14;
  --color-bg-surface: #141724;
  --color-bg-surface-elevated: #1D2133;
  --color-text-primary: #F1F5F9;
  --color-text-secondary: #CBD5E1;
  --color-text-muted: #94A3B8;
  --color-accent-blue: #3B82F6;
  --color-accent-emerald: #10B981;
  --color-accent-purple: #A855F7;
  --color-border: rgba(255, 255, 255, 0.08);
  --font-sans: 'Inter', sans-serif;
  --radius-card: 20px;
}`,
    tailwind: {
      colors: {
        canvas: '#0C0D14',
        surface: '#141724',
        emerald: '#10B981',
        iris: '#3B82F6',
        purple: '#A855F7',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  'chronotask-timetable': {
    name: 'ChronoTask Mobile Suite (Timetable & Stopwatch)',
    theme: 'Charcoal Dark, Mint & Multi-Color Category Blocks',
    css: `:root {
  --color-bg-canvas: #0F1015;
  --color-bg-surface: #191B22;
  --color-bg-surface-light: #242731;
  --color-text-primary: #F8FAFC;
  --color-text-muted: #64748B;
  --color-accent-mint: #2DD4BF;
  --color-accent-orange: #FB923C;
  --color-accent-blue: #38BDF8;
  --color-accent-magenta: #F43F5E;
  --color-border: rgba(255, 255, 255, 0.07);
  --radius-card: 18px;
}`,
    tailwind: {
      colors: {
        canvas: '#0F1015',
        surface: '#191B22',
        mint: '#2DD4BF',
        sunset: '#FB923C',
        sky: '#38BDF8',
        rose: '#F43F5E',
      },
      borderRadius: {
        card: '18px',
      },
    },
  },
  'synthetix-workspace': {
    name: 'Synthetix Workspace Tasks (Neumorphic Dark & Absence)',
    theme: 'Pitch Matte, Soft Slate & Seafoam Teal',
    css: `:root {
  --color-bg-canvas: #0E0E12;
  --color-bg-surface: #181920;
  --color-bg-surface-soft: #21222C;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #CBD5E1;
  --color-text-muted: #71717A;
  --color-accent-teal: #14B8A6;
  --color-accent-teal-light: #5EEAD4;
  --color-border: rgba(255, 255, 255, 0.06);
  --radius-card: 22px;
}`,
    tailwind: {
      colors: {
        canvas: '#0E0E12',
        surface: '#181920',
        teal: '#14B8A6',
        'teal-light': '#5EEAD4',
      },
      borderRadius: {
        card: '22px',
      },
    },
  },
  'veritas-wealth-spending': {
    name: 'Veritas Wealth & Banking (Dual Mint Cards & Donut)',
    theme: 'Forest Dark, Mint Green & Donut Category Accents',
    css: `:root {
  --color-bg-canvas: #0A0F0D;
  --color-bg-surface: #131A17;
  --color-text-primary: #ECFDF5;
  --color-text-secondary: #A7F3D0;
  --color-text-muted: #6EE7B7;
  --color-accent-mint: #2EE59D;
  --color-accent-cyan: #00D2D3;
  --color-accent-yellow: #FACC15;
  --color-accent-coral: #F43F5E;
  --color-border: rgba(46, 229, 157, 0.15);
  --radius-card: 20px;
}`,
    tailwind: {
      colors: {
        canvas: '#0A0F0D',
        surface: '#131A17',
        mint: '#2EE59D',
        cyan: '#00D2D3',
        yellow: '#FACC15',
        coral: '#F43F5E',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
};

// Auto-detect project stack
function detectProjectStack() {
  const cwd = process.cwd();
  const hasPkg = fs.existsSync(path.join(cwd, 'package.json'));
  let pkg = {};
  if (hasPkg) {
    try {
      pkg = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));
    } catch (e) {
      // ignore
    }
  }

  const hasNext = pkg.dependencies?.next || pkg.devDependencies?.next;
  const hasVite = pkg.dependencies?.vite || pkg.devDependencies?.vite;
  const hasTailwind =
    pkg.dependencies?.tailwindcss ||
    pkg.devDependencies?.tailwindcss ||
    fs.existsSync(path.join(cwd, 'tailwind.config.js')) ||
    fs.existsSync(path.join(cwd, 'tailwind.config.ts'));
  const hasFlutter = fs.existsSync(path.join(cwd, 'pubspec.yaml'));
  const hasCompose =
    fs.existsSync(path.join(cwd, 'build.gradle.kts')) ||
    fs.existsSync(path.join(cwd, 'app', 'build.gradle.kts'));

  return {
    hasPkg,
    hasNext: !!hasNext,
    hasVite: !!hasVite,
    hasTailwind: !!hasTailwind,
    hasFlutter,
    hasCompose,
  };
}

// 1. INIT COMMAND
async function runInit(args) {
  banner();
  console.log(`${color.bold}Initialize ORQIVA Adaptive Design Tokens & Heuristics${color.reset}\n`);

  const stack = detectProjectStack();
  if (stack.hasNext) console.log(`${color.green}  ✓ Detected Next.js project${color.reset}`);
  if (stack.hasVite) console.log(`${color.green}  ✓ Detected Vite project${color.reset}`);
  if (stack.hasTailwind) console.log(`${color.green}  ✓ Detected Tailwind CSS${color.reset}`);
  if (stack.hasFlutter) console.log(`${color.green}  ✓ Detected Flutter application${color.reset}`);
  if (stack.hasCompose) console.log(`${color.green}  ✓ Detected Jetpack Compose Android project${color.reset}`);

  console.log(`\n${color.bold}Choose your Application Archetype:${color.reset}`);
  const keys = Object.keys(ARCHETYPES);
  keys.forEach((key, i) => {
    const arch = ARCHETYPES[key];
    console.log(`  ${color.cyan}${i + 1})${color.reset} ${color.bold}${arch.name}${color.reset}`);
    console.log(`     ${color.dim}${arch.theme}${color.reset}`);
  });
  console.log(`  ${color.cyan}${keys.length + 1})${color.reset} ${color.bold}Universal Multi-Theme System${color.reset}`);

  let choiceIndex = 0;
  if (args.includes('-y') || args.includes('--yes')) {
    choiceIndex = 0;
    console.log(`\n${color.yellow}Running in non-interactive mode. Selected #1.${color.reset}`);
  } else {
    const answer = await promptUser(`\nEnter number (1-${keys.length + 1}) [default: 1]: `);
    const num = parseInt(answer, 10);
    if (!isNaN(num) && num >= 1 && num <= keys.length + 1) {
      choiceIndex = num - 1;
    }
  }

  const selectedKey = choiceIndex < keys.length ? keys[choiceIndex] : 'universal';
  const selectedArch = choiceIndex < keys.length ? ARCHETYPES[selectedKey] : null;

  console.log(`\n${color.green}Selected Archetype:${color.reset} ${selectedArch ? selectedArch.name : 'Universal Multi-Theme System'}`);

  // Determine output directory
  const cwd = process.cwd();
  let targetDir = path.join(cwd, 'src', 'styles');
  if (!fs.existsSync(path.join(cwd, 'src'))) {
    targetDir = path.join(cwd, 'styles');
  }
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Write CSS Tokens
  const cssFile = path.join(targetDir, 'orqiva-tokens.css');
  const cssContent = selectedArch
    ? `/* Generated by ORQIVA UI/UX CLI : ${selectedArch.name} */\n${selectedArch.css}\n`
    : `/* Generated by ORQIVA UI/UX CLI : Universal Multi-Theme */\n:root {\n  --color-canvas: #090A0F;\n  --color-surface: #12141F;\n  --color-accent: #6366F1;\n}\n`;

  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log(`  ${color.green}✓ Injected CSS Custom Properties:${color.reset} ${path.relative(cwd, cssFile)}`);

  // Write Tailwind Preset / Extension
  const tailwindPresetFile = path.join(cwd, 'orqiva.preset.js');
  const tailwindData = selectedArch ? selectedArch.tailwind : { colors: { brand: '#6366F1' } };
  const presetContent = `/**
 * ORQIVA Tailwind Preset : ${selectedArch ? selectedArch.name : 'Universal'}
 * Include in your tailwind.config.js:
 *   presets: [require('./orqiva.preset.js')]
 */
module.exports = {
  theme: {
    extend: ${JSON.stringify(tailwindData, null, 2)}
  }
};
`;
  fs.writeFileSync(tailwindPresetFile, presetContent, 'utf8');
  console.log(`  ${color.green}✓ Generated Tailwind Preset:${color.reset} ${path.relative(cwd, tailwindPresetFile)}`);

  // Write TypeScript Type Definitions for Tokens
  const tsDir = path.join(cwd, 'src', 'tokens');
  if (!fs.existsSync(tsDir)) {
    fs.mkdirSync(tsDir, { recursive: true });
  }
  const tsTokensFile = path.join(tsDir, 'orqiva.ts');
  const tsContent = `// ORQIVA Design Tokens Type Definitions
export interface OrqivaDesignSystem {
  archetype: string;
  theme: string;
  tokens: Record<string, string>;
}

export const activeTheme: OrqivaDesignSystem = {
  archetype: '${selectedKey}',
  theme: '${selectedArch ? selectedArch.theme : 'Universal'}',
  tokens: ${JSON.stringify(selectedArch ? selectedArch.tailwind.colors : {}, null, 2)}
};
`;
  fs.writeFileSync(tsTokensFile, tsContent, 'utf8');
  console.log(`  ${color.green}✓ Generated TypeScript Tokens:${color.reset} ${path.relative(cwd, tsTokensFile)}`);

  // Write config file
  const configFile = path.join(cwd, 'orqiva.config.json');
  fs.writeFileSync(
    configFile,
    JSON.stringify(
      {
        version: VERSION,
        archetype: selectedKey,
        cssFile: path.relative(cwd, cssFile),
        tailwindPreset: path.relative(cwd, tailwindPresetFile),
        tsTokens: path.relative(cwd, tsTokensFile),
      },
      null,
      2
    ),
    'utf8'
  );
  console.log(`  ${color.green}✓ Saved Configuration:${color.reset} ${path.relative(cwd, configFile)}`);

  console.log(`\n${color.bold}${color.green}Initialization Complete!${color.reset}`);
  console.log(`\nNext Steps:`);
  console.log(`  1. Import tokens into your main stylesheet:`);
  console.log(`     ${color.cyan}@import './${path.relative(cwd, cssFile).replace(/\\/g, '/')}';${color.reset}`);
  console.log(`  2. Add the preset to ${color.bold}tailwind.config.js${color.reset}:`);
  console.log(`     ${color.cyan}presets: [require('./orqiva.preset.js')]${color.reset}`);
  console.log(`  3. Audit your UI code for accessibility compliance:`);
  console.log(`     ${color.cyan}npx orqiva-ui-ux audit${color.reset}\n`);
}

// 2. AUDIT COMMAND
async function runAudit() {
  banner();
  console.log(`${color.bold}Auditing UI Codebase for Design and Accessibility Compliance...${color.reset}\n`);

  const cwd = process.cwd();
  let filesChecked = 0;
  let issues = [];

  function scanDir(dir) {
    const list = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of list) {
      if (item.name === 'node_modules' || item.name === '.git' || item.name === 'dist' || item.name === '.next') {
        continue;
      }
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        scanDir(full);
      } else if (item.isFile() && /\.(tsx|jsx|html|vue|svelte)$/.test(item.name)) {
        filesChecked++;
        const content = fs.readFileSync(full, 'utf8');
        const lines = content.split('\n');

        lines.forEach((line, idx) => {
          // Check 1: Button without aria-label when icon-only
          if (/<button[^>]*>[\s\n]*<(svg|Icon|lucide)/i.test(line) && !/aria-label/i.test(line)) {
            issues.push({
              file: path.relative(cwd, full),
              line: idx + 1,
              rule: 'WCAG 4.1.2: Icon-only button is missing an accessible aria-label',
              severity: 'warning',
            });
          }

          // Check 2: Low-contrast tailwind text utility
          if (/\btext-gray-400\b/i.test(line) && /\bbg-white\b/i.test(line)) {
            issues.push({
              file: path.relative(cwd, full),
              line: idx + 1,
              rule: 'WCAG 1.4.3: text-gray-400 on bg-white violates 4.5:1 contrast minimum',
              severity: 'error',
            });
          }

          // Check 3: Tiny touch target on buttons
          if (/<button[^>]*class(Name)?="[^"]*\b(h-6|h-7|w-6|w-7)\b[^"]*"/i.test(line)) {
            issues.push({
              file: path.relative(cwd, full),
              line: idx + 1,
              rule: 'WCAG 2.5.5: Interactive touch target is smaller than 44x44px minimum',
              severity: 'warning',
            });
          }

          // Check 4: Missing alt on images
          if (/<img[^>]*>/i.test(line) && !/alt=["'][^"']*["']/i.test(line)) {
            issues.push({
              file: path.relative(cwd, full),
              line: idx + 1,
              rule: 'WCAG 1.1.1: <img> element is missing an alt attribute',
              severity: 'error',
            });
          }
        });
      }
    }
  }

  scanDir(cwd);

  console.log(`Scanned ${color.bold}${filesChecked}${color.reset} component and template files.\n`);

  if (issues.length === 0) {
    console.log(`${color.green}${color.bold}✓ No critical design system or accessibility violations detected!${color.reset}\n`);
  } else {
    console.log(`${color.yellow}${color.bold}Found ${issues.length} potential improvements:${color.reset}\n`);
    issues.slice(0, 10).forEach((issue) => {
      const tag = issue.severity === 'error' ? `${color.red}[ERROR]${color.reset}` : `${color.yellow}[WARN]${color.reset}`;
      console.log(`  ${tag} ${color.dim}${issue.file}:${issue.line}${color.reset}`);
      console.log(`     ${issue.rule}`);
    });
    if (issues.length > 10) {
      console.log(`\n  ${color.dim}...and ${issues.length - 10} more findings.${color.reset}`);
    }
    console.log('');
  }
}

// 3. INSTALL AGENT SKILL COMMAND
async function runInstall(args) {
  banner();
  console.log(`${color.bold}Install ORQIVA Skill for Coding Agents${color.reset}\n`);

  const cwd = process.cwd();
  const skillPromptRule = `
## ORQIVA UI/UX Design Intelligence : Adaptive Protocol

Always adopt the ORQIVA adaptive UI/UX protocol before designing, modifying, or reviewing user interfaces.

### 1. Contextual Archetype Selection
Never default to generic dark purple gradients. Select an intentional visual direction matching the product domain:
- Luxury Editorial E-Commerce: Obsidian (#0B0B0D) + Champagne Gold (#D4AF37) + Serif display headings.
- Cosmic FinTech SaaS: Deep Void (#060714) + Neon Violet (#8B5CF6) + Cyan (#06B6D4) + Radial glow nebulae.
- Liquid Chrome Neo-Banking: Obsidian (#050505) + Coral Crimson (#FF3B56) + Dedicated 56px tactile keypad.
- Dark Pulse Personal Metrics: Stealth Navy (#0C0D14) + SVG goal progress rings + 7-day velocity bar metrics.
- Timetable Calendar & Execution: Dark Minimal (#0E0F13) + Date scrubber + Real-time timetable needle.
- Neumorphic Dark Workspace: Matte Charcoal (#0E0E12) + Soft elevated cards + Team absence matrix.
- Dual Mint Cards & Spending: Dark Slate (#111214) + Mint (#2DD4BF) + 6-segment spending breakdown donut.

### 2. Complete Interactive State Coverage
Every interactive component must provide:
- Default state with unmistakable visual hierarchy.
- Hover state with smooth subtle transition (scale 1.02x or border highlight).
- Focus-visible state with distinct ring (outline-none focus-visible:ring-2 focus-visible:ring-sky-500).
- Active state with tactile feedback.
- Disabled state with reduced opacity and cursor-not-allowed.
- Loading skeleton state for asynchronous data fetching.
- Empty state with descriptive guidance and primary action.
- Error recovery state with actionable remedy.

### 3. Accessibility & Ergonomics Standards (WCAG 2.2 AA)
- Contrast: Minimum 4.5:1 for body text; 3:1 for large text and UI borders.
- Touch Targets: Minimum 44x44px (iOS) or 48x48px (Android/Web).
- Semantic Elements: Use <main>, <nav>, <header>, <article>, <button type="button">. Never use <div onClick>.
- Telemetry & Numbers: Apply tabular-nums to currencies, stats, timers, and data tables.
- Mobile Layout: Anchor primary actions in the thumb zone; respect safe-area insets.
`;

  // Cursor rules
  const cursorDir = path.join(cwd, '.cursor', 'rules');
  if (!fs.existsSync(cursorDir)) fs.mkdirSync(cursorDir, { recursive: true });
  const cursorRuleFile = path.join(cursorDir, 'orqiva-ui-ux.mdc');
  fs.writeFileSync(
    cursorRuleFile,
    `---\ndescription: Adaptive UI/UX Design Intelligence and Accessibility Standards\nglobs: ["**/*.{tsx,jsx,vue,svelte,html,css,kt,dart}"]\n---\n${skillPromptRule}`,
    'utf8'
  );
  console.log(`  ${color.green}✓ Installed Cursor Rule:${color.reset} ${path.relative(cwd, cursorRuleFile)}`);

  // Claude Code configuration
  const claudeFile = path.join(cwd, 'CLAUDE.md');
  let claudeContent = '';
  if (fs.existsSync(claudeFile)) {
    claudeContent = fs.readFileSync(claudeFile, 'utf8');
  }
  if (!claudeContent.includes('ORQIVA UI/UX')) {
    claudeContent += `\n${skillPromptRule}\n`;
    fs.writeFileSync(claudeFile, claudeContent, 'utf8');
    console.log(`  ${color.green}✓ Added to Claude Code:${color.reset} ${path.relative(cwd, claudeFile)}`);
  } else {
    console.log(`  ${color.dim}- Claude Code already configured in CLAUDE.md${color.reset}`);
  }

  // Claude Code skills folder (.claude/skills/orqiva-ui-ux/SKILL.md)
  const claudeSkillDir = path.join(cwd, '.claude', 'skills', 'orqiva-ui-ux');
  if (!fs.existsSync(claudeSkillDir)) fs.mkdirSync(claudeSkillDir, { recursive: true });
  const claudeSkillFile = path.join(claudeSkillDir, 'SKILL.md');
  const claudeSkillDoc = `---
name: orqiva-ui-ux
description: Adaptive UI/UX design intelligence for planning, designing, implementing, and auditing production interfaces.
license: MIT
compatibility: Claude Code, Antigravity, Cursor, Windsurf
metadata:
  author: ORQIVA
  version: "1.0.0"
---

# ORQIVA UI/UX Design Intelligence
${skillPromptRule}
`;
  fs.writeFileSync(claudeSkillFile, claudeSkillDoc, 'utf8');
  console.log(`  ${color.green}✓ Installed Claude Code Skill:${color.reset} ${path.relative(cwd, claudeSkillFile)}`);

  // Windsurf rules
  const windsurfFile = path.join(cwd, '.windsurfrules');
  let windsurfContent = '';
  if (fs.existsSync(windsurfFile)) {
    windsurfContent = fs.readFileSync(windsurfFile, 'utf8');
  }
  if (!windsurfContent.includes('ORQIVA UI/UX')) {
    windsurfContent += `\n${skillPromptRule}\n`;
    fs.writeFileSync(windsurfFile, windsurfContent, 'utf8');
    console.log(`  ${color.green}✓ Installed Windsurf Rule:${color.reset} ${path.relative(cwd, windsurfFile)}`);
  } else {
    console.log(`  ${color.dim}- Windsurf already configured in .windsurfrules${color.reset}`);
  }

  console.log(`\n${color.green}${color.bold}Skill installation complete!${color.reset} Your AI agent is now primed with ORQIVA Design Intelligence.\n`);
}

// 4. TOKENS EXPORT COMMAND
async function runTokens(args) {
  banner();
  console.log(`${color.bold}Export ORQIVA Design Tokens${color.reset}\n`);

  const formatIdx = args.indexOf('--format');
  const format = formatIdx !== -1 && args[formatIdx + 1] ? args[formatIdx + 1].toLowerCase() : 'all';

  console.log(`Target format: ${color.cyan}${format}${color.reset}`);
  console.log(`Run ${color.bold}npm run tokens:compile${color.reset} in the repository root to regenerate all multi-framework token packages (CSS, Tailwind, TypeScript, Kotlin, Dart).\n`);
}

// 5. SHOWCASE COMMAND
async function runShowcase() {
  banner();
  console.log(`${color.bold}ORQIVA Tier-1 Application Design Showcases${color.reset}\n`);

  const items = [
    {
      name: 'AuraGlow Jewelry Atelier',
      type: 'Luxury Editorial E-Commerce',
      palette: 'Obsidian #0B0B0D, Champagne Gold #D4AF37, Silk #FAF7F2',
      features: 'Asymmetric split hero, gold specular glows, lens zoom product cards',
    },
    {
      name: 'OrbitFinance SaaS',
      type: 'Cosmic FinTech Telemetry',
      palette: 'Cosmic Void #060714, Neon Violet #8B5CF6, Cyan Flare #06B6D4',
      features: 'Atmospheric space depth, glowing metric sparklines, floating glass balance',
    },
    {
      name: 'NovaBank Mobile',
      type: 'Liquid Chrome Neo-Banking',
      palette: 'Pure Obsidian #050505, Coral #FF3B56, Platinum Silver #E2E8F0',
      features: '3-screen continuous flow, fluid 3D chrome hero, tactile numeric keypad',
    },
    {
      name: 'PulseFocus Productivity',
      type: 'Dark Pulse Personal Metrics',
      palette: 'Stealth Navy #0C0D14, Neon Emerald #10B981, Iris Purple #A855F7',
      features: 'Radial goal completion ring, 7-day velocity bar metrics, pill navigation',
    },
    {
      name: 'ChronoTask Mobile Suite',
      type: 'Timetable Calendar & Stopwatch',
      palette: 'Charcoal #0F1015, Mint #2DD4BF, Sunset #FB923C, Sky #38BDF8',
      features: 'Daily progress header, chronological timetable blocks, active stopwatch dock',
    },
    {
      name: 'Synthetix Workspace',
      type: 'Neumorphic Dark Workspace Tasks',
      palette: 'Pitch Matte #0E0E12, Seafoam Teal #14B8A6, Soft Slate #71717A',
      features: 'Angled glass floating cards, team absence calendar, workload percentage',
    },
    {
      name: 'Veritas Wealth & Banking',
      type: 'Neo-Banking & Donut Spending',
      palette: 'Forest Dark #0A0F0D, Mint #2EE59D, Cyan #00D2D3, Coral #F43F5E',
      features: 'Dual mint debit cards, quick action strip, 6-category spending donut ring',
    },
  ];

  items.forEach((item, i) => {
    console.log(`${color.cyan}${i + 1}. ${item.name}${color.reset} ${color.dim}(${item.type})${color.reset}`);
    console.log(`   ${color.bold}Palette:${color.reset} ${item.palette}`);
    console.log(`   ${color.bold}Features:${color.reset} ${item.features}\n`);
  });

  console.log(`Explore interactive previews at: ${color.cyan}https://codebyarnob.github.io/orqiva-ui-ux/#showcase${color.reset}\n`);
}

// 6. HELP COMMAND
function runHelp() {
  banner();
  console.log(`${color.bold}Commands:${color.reset}`);
  console.log(`  ${color.cyan}init${color.reset}       : Interactive setup wizard to inject design tokens & Tailwind config`);
  console.log(`  ${color.cyan}install${color.reset}    : Install ORQIVA skill into Cursor, Claude Code, and Windsurf`);
  console.log(`  ${color.cyan}audit${color.reset}      : Audit UI files for contrast, touch targets, and WCAG AA compliance`);
  console.log(`  ${color.cyan}mcp${color.reset}        : Launch the Model Context Protocol (MCP) server for Claude Desktop & Cursor`);
  console.log(`  ${color.cyan}tokens${color.reset}     : Export design tokens to multi-framework assets`);
  console.log(`  ${color.cyan}showcase${color.reset}   : List 7 tier-1 application design archetypes and specifications`);
  console.log(`  ${color.cyan}version${color.reset}    : Print ORQIVA CLI version`);
  console.log(`  ${color.cyan}help${color.reset}       : Show this help manual\n`);
  console.log(`${color.bold}Examples:${color.reset}`);
  console.log(`  npx orqiva-ui-ux init`);
  console.log(`  npx orqiva-ui-ux init --yes`);
  console.log(`  npx orqiva-ui-ux audit`);
  console.log(`  npx orqiva-ui-ux install\n`);
}

// Main CLI Router
async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0] ? args[0].toLowerCase() : 'help';

  switch (cmd) {
    case 'init':
      await runInit(args);
      break;
    case 'audit':
      await runAudit();
      break;
    case 'mcp':
      await import('../mcp/server.js');
      break;
    case 'install':
      await runInstall(args);
      break;
    case 'tokens':
      await runTokens(args);
      break;
    case 'showcase':
      await runShowcase();
      break;
    case '-v':
    case '--version':
    case 'version':
      console.log(`orqiva-ui-ux v${VERSION}`);
      break;
    case '-h':
    case '--help':
    case 'help':
    default:
      runHelp();
      break;
  }
}

main().catch((err) => {
  console.error(`\n${color.red}Error:${color.reset}`, err.message);
  process.exit(1);
});
