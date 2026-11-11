import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let errors = 0;
let passed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    errors++;
  }
}

console.log('\n========================================');
console.log('ORQIVA UI/UX : Skill & Repository Validation');
console.log('========================================\n');

// 1. Validate SKILL.md Frontmatter
console.log('1. Validating SKILL.md Frontmatter...');
const skillPath = path.join(rootDir, 'SKILL.md');
assert(fs.existsSync(skillPath), 'SKILL.md exists at root');

const skillContent = fs.readFileSync(skillPath, 'utf8');
assert(skillContent.startsWith('---'), 'SKILL.md begins with YAML frontmatter delimiter (---)');

const frontmatterMatch = skillContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
assert(frontmatterMatch !== null, 'SKILL.md has closing frontmatter delimiter (---)');

if (frontmatterMatch) {
  const fm = frontmatterMatch[1];
  assert(/name:\s*orqiva-ui-ux/.test(fm), "Frontmatter contains 'name: orqiva-ui-ux'");
  assert(/description:/.test(fm), 'Frontmatter contains descriptive text');
  assert(/license:\s*MIT/.test(fm), "Frontmatter contains 'license: MIT'");
  assert(/compatibility:/.test(fm), 'Frontmatter declares compatibility');
  assert(/version:\s*"1\.0\.0"/.test(fm), "Frontmatter declares version: '1.0.0'");
}

// 2. Validate Link Integrity across documentation & references
console.log('\n2. Validating Internal Markdown Link Integrity...');
function checkLinksInDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist' && entry.name !== '.next') {
      checkLinksInDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        const link = match[2].trim();
        // Skip external web links and in-page anchor links
        if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('#') || link.startsWith('mailto:')) {
          continue;
        }

        const cleanLink = link.split('#')[0];
        if (!cleanLink) continue;

        const resolvedPath = path.resolve(path.dirname(fullPath), cleanLink);
        assert(fs.existsSync(resolvedPath), `Link in ${path.relative(rootDir, fullPath)} -> ${cleanLink} resolves to disk`);
      }
    }
  }
}

checkLinksInDir(rootDir);

// 3. Validate Showcase & Screenshot Assets
console.log('\n3. Validating Showcase & Screenshot Assets...');
const showcaseDir = path.join(rootDir, 'assets', 'showcase');
const requiredShowcases = [
  '01-auraglow-luxury-jewelry.jpg',
  '02-orbitfinance-cosmic-saas.jpg',
  '03-novabank-liquid-mobile-banking.jpg',
  '04-pulsefocus-dark-productivity.jpg',
  '05-chronotask-mobile-timetable.jpg',
  '06-synthetix-workspace-tasks.jpg',
  '07-veritas-wealth-spending.jpg',
];

for (const file of requiredShowcases) {
  const filePath = path.join(showcaseDir, file);
  assert(fs.existsSync(filePath), `Showcase asset exists: assets/showcase/${file}`);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    assert(stat.size > 20000, `Showcase asset ${file} has healthy size (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

// 4. Validate Agent Skills Manifest & CLI Tool
console.log('\n4. Validating Agent Skills Manifest & CLI Tool...');
const manifestPath = path.join(rootDir, '.agent-skills', 'manifest.json');
assert(fs.existsSync(manifestPath), '.agent-skills/manifest.json exists');
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert(manifest.name === 'orqiva-ui-ux', 'Manifest declares correct name');
  assert(manifest.entrypoint === 'SKILL.md', 'Manifest entrypoint is SKILL.md');
}

const cliPath = path.join(rootDir, 'bin', 'orqiva.js');
assert(fs.existsSync(cliPath), 'bin/orqiva.js exists');
if (fs.existsSync(cliPath)) {
  const cliContent = fs.readFileSync(cliPath, 'utf8');
  assert(cliContent.startsWith('#!/usr/bin/env node'), 'bin/orqiva.js has shebang');
}

// 5. Validate Design Token Definitions
console.log('\n5. Validating Design Token Definitions...');
const cssTokensPath = path.join(rootDir, 'examples', 'design-tokens.css');
assert(fs.existsSync(cssTokensPath), 'examples/design-tokens.css exists');
const cssTokens = fs.readFileSync(cssTokensPath, 'utf8');
assert(cssTokens.includes('--color-bg-canvas'), 'Tokens define --color-bg-canvas');
assert(cssTokens.includes('--color-bg-surface'), 'Tokens define --color-bg-surface');
assert(cssTokens.includes('--color-accent-default'), 'Tokens define --color-accent-default');
assert(cssTokens.includes('--color-success-fg'), 'Tokens define --color-success-fg');
assert(cssTokens.includes('--space-1'), 'Tokens define 4pt/8pt spatial scale');

// 6. Zero Em-Dash Strict Check
console.log('\n6. Checking Zero Em-Dash Constraint...');
let emDashViolations = 0;

function checkEmDashInDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (
      entry.isDirectory() &&
      entry.name !== 'node_modules' &&
      entry.name !== '.git' &&
      entry.name !== 'dist' &&
      entry.name !== '.next'
    ) {
      checkEmDashInDir(fullPath);
    } else if (
      entry.isFile() &&
      /\.(md|js|mjs|ts|tsx|json)$/.test(entry.name) &&
      entry.name !== 'package-lock.json' &&
      entry.name !== 'validate.mjs' &&
      entry.name !== 'remove-em-dash.mjs'
    ) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('\u2014')) {
        console.error(`  ✗ Em-dash violation in ${path.relative(rootDir, fullPath)}`);
        emDashViolations++;
      }
    }
  }
}

checkEmDashInDir(rootDir);
assert(emDashViolations === 0, `Zero em-dash characters across repository (found: ${emDashViolations})`);

console.log('\n========================================');
console.log(`Validation Results: ${passed} passed, ${errors} failed`);
console.log('========================================\n');

if (errors > 0) {
  process.exit(1);
} else {
  console.log('ALL VALIDATION CHECKS PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
