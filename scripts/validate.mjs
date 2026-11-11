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
console.log('ORQIVA UI/UX — Skill & Repository Validation');
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
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
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

// 3. Validate Screenshot Assets
console.log('\n3. Validating Screenshot Assets...');
const screenshotsDir = path.join(rootDir, 'assets', 'screenshots');
const requiredScreenshots = [
  '01-mobile-banking.png',
  '01-mobile-banking-mobile.png',
  '02-saas-dashboard.png',
  '02-saas-dashboard-mobile.png',
  '03-ecommerce.png',
  '03-ecommerce-mobile.png',
  '04-healthcare.png',
  '04-healthcare-mobile.png',
  '05-developer-workspace.png',
  '06-responsive-website.png',
  '07-before-after-redesign.png',
  '08-responsive-comparison.png',
  'README.md'
];

for (const file of requiredScreenshots) {
  const filePath = path.join(screenshotsDir, file);
  assert(fs.existsSync(filePath), `Screenshot asset exists: assets/screenshots/${file}`);
  if (file.endsWith('.png')) {
    const stat = fs.statSync(filePath);
    assert(stat.size > 5000, `File size is healthy (${(stat.size / 1024).toFixed(1)} KB)`);

    const buf = fs.readFileSync(filePath);
    const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
    assert(isPng, `PNG magic bytes verified (0x89 0x50 0x4E 0x47) for ${file}`);
  }
}

// 4. Validate Token Definitions
console.log('\n4. Validating Design Token Definitions...');
const cssTokensPath = path.join(rootDir, 'examples', 'design-tokens.css');
assert(fs.existsSync(cssTokensPath), 'examples/design-tokens.css exists');
const cssTokens = fs.readFileSync(cssTokensPath, 'utf8');
assert(cssTokens.includes('--color-bg-canvas'), 'Tokens define --color-bg-canvas');
assert(cssTokens.includes('--color-bg-surface'), 'Tokens define --color-bg-surface');
assert(cssTokens.includes('--color-accent-default'), 'Tokens define --color-accent-default');
assert(cssTokens.includes('--color-success-fg'), 'Tokens define --color-success-fg');
assert(cssTokens.includes('--space-1'), 'Tokens define 4pt/8pt spatial scale');

console.log('\n========================================');
console.log(`Validation Results: ${passed} passed, ${errors} failed`);
console.log('========================================\n');

if (errors > 0) {
  process.exit(1);
} else {
  console.log('ALL VALIDATION CHECKS PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
